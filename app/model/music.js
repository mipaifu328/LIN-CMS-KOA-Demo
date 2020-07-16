import { Sequelize, Model } from 'sequelize';
import sequelize from '../lib/db';
import { config } from 'lin-mizar';

class Music extends Model {
}

Music.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    url: {
      type: Sequelize.STRING(100)
    },
    content: {
      type: Sequelize.STRING(300),
      allowNull: true
    },
    fav_nums: {
      type: Sequelize.INTEGER
    },
    image: {
      type: Sequelize.STRING(64),
      get () {
        const image = this.getDataValue('image');
        return config.getItem('localMainImgUrlPrefix') + image;
      }
    },
    pubdate: {
      type: Sequelize.DATE,
      allowNull: true
    },
    type: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.INTEGER
    }
  },
  {
    sequelize,
    tableName: 'music',
    modelName: 'music',
    // 重命名时间字段
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
  }
);

export { Music as MusicModel };
