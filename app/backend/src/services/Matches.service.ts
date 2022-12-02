import { created, ok, unprocessableEntity } from '../utils/httpHelpers';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import { IMatch } from '../interfaces/matches.interface';

export default class MatchesService {
  static async findAll() {
    const result = await Matches.findAll({
      include: [
        { model: Teams, as: 'teamHome' },
        { model: Teams, as: 'teamAway' },
      ],
    });

    return ok(result);
  }

  static async getMatchesProgress(inProgress: string) {
    const value = inProgress === 'true' ? '1' : '0';
    const result = await Matches.findAll({
      where: { inProgress: value },
      include: { all: true },
    });

    return ok(result);
  }

  static async insertMatches(body: IMatch) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = body;

    if (homeTeam === awayTeam) {
      return unprocessableEntity('It is not possible to create a match with two equal teams');
    }

    const result = await Matches.create({
      homeTeam,
      homeTeamGoals,
      awayTeam,
      awayTeamGoals,
      inProgress: true,
    });

    return created(result);
  }

  static async updateMatchesStatus(idMatch: string) {
    const id = Number(idMatch);
    await Matches.update({ inProgress: false }, { where: { id } });

    return ok({ message: 'Finished' });
  }
}
