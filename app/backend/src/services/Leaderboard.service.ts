import { ok } from '../utils/httpHelpers';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

export default class MatchesService {
  private static arrayAllTeams: any[] = [];

  static allocatePoints(matchInfo: any, winner: string) {
    const result = winner === 'home'
      ? matchInfo.homeTeamGoals - matchInfo.awayTeamGoals
      : matchInfo.awayTeamGoals - matchInfo.homeTeamGoals;
    if (result > 0) {
      MatchesService.arrayAllTeams[matchInfo.teamId].totalPoints += 3;
      MatchesService.arrayAllTeams[matchInfo.teamId].totalVictories += 1;
    }
    if (result < 0) {
      MatchesService.arrayAllTeams[matchInfo.teamId].totalLosses += 1;
    }
    if (result === 0) {
      MatchesService.arrayAllTeams[matchInfo.teamId].totalPoints += 1;
      MatchesService.arrayAllTeams[matchInfo.teamId].totalDraws += 1;
    }
  }

  static async insertDataHome(winner: string) {
    const matches = await Matches.findAll({ where: { inProgress: false } }) as any[];
    const teams = await Teams.findAll();
    const result = teams.map((team) => MatchesService.constructorTableTeam(team));
    MatchesService.arrayAllTeams = result;
    matches.forEach(({ homeTeam, homeTeamGoals, awayTeam, awayTeamGoals }) => {
      const id = winner === 'home' ? homeTeam : awayTeam;
      const teamId = result.findIndex((team) => team.id === id);
      const obj = { teamId, homeTeamGoals, awayTeamGoals };
      MatchesService.allocatePoints(obj, winner);
      const team = MatchesService.arrayAllTeams[teamId];
      team.totalGames += 1;
      team.goalsFavor += winner === 'home' ? homeTeamGoals : awayTeamGoals;
      team.goalsOwn += winner === 'home' ? awayTeamGoals : homeTeamGoals;
      team.goalsBalance = team.goalsFavor - team.goalsOwn;// [P / (J * 3)] * 100
      team.efficiency = ((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2);
    });
  }

  private static constructorTableTeam = ({ teamName, id }: Teams) => ({
    name: teamName,
    id,
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0,
  });

  static async findLeaderboard(winner: string) {
    await MatchesService.insertDataHome(winner);
    MatchesService.arrayAllTeams.sort((a, b) => b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || a.goalsOwn - b.goalsOwn);
    return ok(MatchesService.arrayAllTeams);
  }
}
