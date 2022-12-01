import { ok } from '../utils/httpHelpers';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

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
}
