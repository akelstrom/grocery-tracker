import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../constants/index';
import { User } from 'src/modules/users/user.model';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(
        process.env.LOCAL_DB,
        process.env.LOCAL_USER,
        process.env.LOCAL_PASS,
      );
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
