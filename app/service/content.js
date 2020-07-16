import { MovieDao } from '../dao/movie';
import { SentenceDao } from '../dao/sentence';
import { MusicDao } from '../dao/music';
import { NotFound, config } from 'lin-mizar';

class Content {
  // 新增
  static async addContent (v) {
    switch (v['type']) {
      case 100:
        // todo 电影
        delete v['url'];
        await MovieDao.addMovie(v);
        break;
      case 200:
        // todo 音乐
        await MusicDao.addMusic(v);
        break;
      case 300:
        // todo 句子
        delete v['url'];
        await SentenceDao.addSentence(v);
        break;
      default:
        throw new NotFound({ message: '内容类型不存在' });
    }
  }
  // 查询列表
  static async getContentList () {
    const movieList = await MovieDao.getMovieList();
    const musicList = await MusicDao.getMusicList();
    const sentenceList = await SentenceDao.getSentenceList();

    let res = [];
    res.push.apply(res, movieList);
    res.push.apply(res, musicList);
    res.push.apply(res, sentenceList);

    res.sort((a, b) => b.created_at.localeCompare(a.created_at));
    return res;
  }

  // 编辑
  static async editContent (id, params) {
    params['image'] = params['image'].split(config.getItem('localMainImgUrlPrefix'))[1];
    switch (params['type']) {
      case 100:
        // todo 电影
        delete params['url'];
        await MovieDao.editMovie(id, params);
        break;
      case 200:
        // todo 音乐
        await MusicDao.editMusic(id, params);
        break;
      case 300:
        // todo 句子
        delete params['url'];
        await SentenceDao.editSentence(id, params);
        break;
      default:
        throw new NotFound({ message: '内容类型不存在' });
    }
  }

  // 删除
  static async deleteContent (id, type) {
    switch (type) {
      case 100:
        // todo 电影
        await MovieDao.deleteMovieById(id);
        break;
      case 200:
        // todo 音乐
        await MusicDao.deleteMusicById(id);
        break;
      case 300:
        // todo 句子
        await SentenceDao.deleteSentenceById(id);
        break;
      default:
        throw new NotFound({ message: '内容类型不存在' });
    }
  }
}

export { Content as ContentService };