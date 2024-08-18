import { IConfig, NodeEnvTypes } from '../types/interface';

const applicationDevelopmentConfig: IConfig = {
  nodeEnv: NodeEnvTypes.development,
  server: {
    host: '0.0.0.0',
    port: Number(process.env.APP_PORT),
  },
  db: {
    main: {
      config: {
        username: process.env.DB_USER,
        password: String(process.env.DB_PASSWORD),
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT),
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
      title: process.env.APP_DOCUMENTATION_TITLE ?? 'API',
      desription:
        process.env.APP_DOCUMENTATION_DESCRIPTION ?? 'REST API Documentation',
      prefix: process.env.APP_DOCUMENTATION_PREFIX ?? '/api/docs',
    },
    routes: {
      mainPrefix: process.env.APP_ROUTES_MAIN_PREFIX ?? '/api/v1',
    },
  },
} as const;

export default applicationDevelopmentConfig;
