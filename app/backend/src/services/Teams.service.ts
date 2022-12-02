import { notFound, ok } from '../utils/httpHelpers';
import Teams from '../database/models/Teams';

export default class TeamsService {
  static async findAll() {
    const result = await Teams.findAll();

    return ok(result);
  }

  static async findById(id: number) {
    const result = await Teams.findByPk(id);

    if (!result) return notFound('There is no team with such id!');

    return ok(result);
  }
}
