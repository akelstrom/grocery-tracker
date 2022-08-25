import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../constants/index';
import { User } from 'src/modules/users/user.model';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(
        process.env.LOCAL_DB,
        process.env.LOCAL_USER,
        process.env.LOCAL_PASS,
        {
          host: 'localhost',
          dialect: 'postgres',
          port: 5432,
        },
      );
      sequelize.addModels(['models goes here']);
      await sequelize.sync();
      return sequelize;
    },
  },
];
