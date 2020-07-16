import { SentenceModel } from '../model/sentence';
import { NotFound } from 'lin-mizar';
class Sentence {
  static async addSentence (v) {
    const result = await SentenceModel.create(v);
    return result;
  }

  static async getSentenceList () {
    const res = await SentenceModel.findAll();
    return res;
  }

  static async editSentence (id, params) {
    const sentence = await SentenceModel.findByPk(id);
    if (!sentence) {
      throw NotFound();
    }
    const res = await sentence.update({ ...params });
    return res;
  }

  static async deleteSentenceById (id) {
    const res = await SentenceModel.destroy({
      where: { id }
    });
    return res;
  }
}

export { Sentence as SentenceDao };