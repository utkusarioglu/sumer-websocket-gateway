declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: "development" | "testing" | "production";
      HOSTNAME?: string;
      KAFKA_BROKERS?: string; // csv
      PORT?: string; // number
      CORS_ORIGIN?: string; // csv
    }
  }
}
export {};
