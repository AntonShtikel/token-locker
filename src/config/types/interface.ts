export enum NodeEnvTypes {
  production = 'production',
  sandbox = 'sandbox',
  staging = 'staging',
  development = 'development',
}

export type NodeEnv = keyof typeof NodeEnvTypes;

interface IServerConfig {
  host: string;
  port: number;
}

interface IDBConfig {
  username: string;
  database: string;
  password: string;
  port: number;
  host: string;
  schema?: string;
}
interface IDBOptions {
  entities: {
    autoload: boolean;
  };
}

interface ISwaggerConfig {
  title: string;
  desription: string;
  prefix: string;
}

export interface IRoutesConfig {
  mainPrefix: string;
}

interface IApplicationConfig {
  name: string;
  abbr: string;
  version: string;
  documentation: ISwaggerConfig;
  routes: IRoutesConfig;
}

export interface IConfig {
  nodeEnv: NodeEnv;
  app: IApplicationConfig;
  server: IServerConfig;
  db: {
    main: {
      config: IDBConfig;
      options?: IDBOptions;
    };
  };
}
