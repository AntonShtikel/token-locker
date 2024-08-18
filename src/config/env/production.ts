import { IConfig, NodeEnvTypes } from '../types/interface';

const applicationProductionConfig: IConfig = {
  nodeEnv: NodeEnvTypes.production,
  server: {
    host: process.env.SERVER_HOST,
    port: Number(process.env.SERVER_PORT),
  },
  db: {
    main: {
      config: {
        username: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT),
        host: process.env.DB_HOST,
        schema: process.env.DB_SCHEMA,
      },
      options: {
        entities: {
          autoload: true,
        },
      },
    },
  },
  app: {
    name: process.env.APP_NAME,
    abbr: process.env.APP_ABBR,
    version: process.env.APP_VERSION,
    documentation: {
      title: process.env.APP_DOCUMENTATION_TITLE,
      desription: process.env.APP_DOCUMENTATION_DESCRIPTION,
      prefix: process.env.APP_DOCUMENTATION_PREFIX,
    },
    routes: {
      mainPrefix: process.env.APP_ROUTES_MAIN_PREFIX,
    },
  },
};

export default applicationProductionConfig;
