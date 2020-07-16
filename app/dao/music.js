import { MusicModel } from '../model/music';
import { NotFound } from 'lin-mizar';
class Music {
  static async addMusic (v) {
    const result = await MusicModel.create(v);
    return result;
  }

  static async getMusicList () {
    const res = await MusicModel.findAll();
    return res;
  }

  static async editMusic (id, params) {
    const music = await MusicModel.findByPk(id);
    if (!music) {
      throw NotFound();
    }
    const res = await music.update({ ...params });
    return res;
  }

  static async deleteMusicById (id) {
    const res = await MusicModel.destroy({
      where: { id }
    });
    return res;
  }
}

export { Music as MusicDao };