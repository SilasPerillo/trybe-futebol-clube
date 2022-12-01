import { notFound, ok } from '../utils/httpHelpers';
import Teams from '../database/models/Teams';

export default class TeamsService {
  static async findAll() {
    const result = await Teams.findAll();

    return ok(result);
  }

  static async findById(teamId: string) {
    const id = Number(teamId);
    const result = await Teams.findByPk(id);
    console.log('result', result);

    if (!result) return notFound('Id not found');

    return ok(result);
  }
}
