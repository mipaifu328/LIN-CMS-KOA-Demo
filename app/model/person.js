import { Sequelize, Model } from 'sequelize';
import sequelize from '../lib/db';

class Person extends Model {
}

Person.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        from: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        remark: {
            type: Sequelize.STRING(300),
            allowNull: true
        },
        sex: {
            type: Sequelize.INTEGER
        }
    },
    {
        sequelize,
        tableName: 'person',
        modelName: 'person'
    }
);

export { Person as PersonModel };
