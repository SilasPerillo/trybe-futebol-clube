import { ok } from '../utils/httpHelpers';
import Teams from '../database/models/Teams';

export default class TeamsService {
  static async findAll() {
    const result = await Teams.findAll();

    return ok(result);
  }
}
