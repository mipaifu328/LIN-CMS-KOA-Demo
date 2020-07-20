import {PersonModel} from "../model/person";
class Person {
  static async addPerson (v) {
    const res = await PersonModel.create(v);
    return res;
  }
  static async getPersons(page, counts) {
    const condition = {
      offset: (page - 1) * counts,
      limit: counts,
      distinct: true
    }
    console.log(condition)
    const { rows, count } = await PersonModel.findAndCountAll(condition);
    return {
      datas: rows,
      total: count
    };
  }
}

export { Person as PersonDao };