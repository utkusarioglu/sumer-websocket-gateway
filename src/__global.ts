declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: 'development' | 'testing' | 'production';
      KAFKA_BROKERS?: string; //csv
    }
  }
}
export {};
