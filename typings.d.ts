declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Common Application Config Variables
      NODE_ENV: 'production' | 'sandbox' | 'staging' | 'development';
      APP_PORT: number;
      APP_NAME: string;
      APP_ABBR: string;
      APP_VERSION: string;
      APP_DOCUMENTATION_TITLE: string;
      APP_DOCUMENTATION_DESCRIPTION: string;
      APP_DOCUMENTATION_PREFIX: string;
      APP_ROUTES_MAIN_PREFIX: string;
      // Main Database Config Variables
      DB_USER: string;
      DB_NAME: string;
      DB_PASSWORD: string;
      DB_PORT: number;
      DB_HOST: string;
      DB_SCHEMA: string;
    }
  }
}

export {};
