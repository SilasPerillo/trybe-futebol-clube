export interface ILeaderboard {
  name: string,
  id: number,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number | string,
}

export interface IObjMatchInfo {
  teamId: number,
  awayTeam?: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
}
