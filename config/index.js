import dotenv from "dotenv";
dotenv.config();
export const {
  DEBUG_MODE,
  APP_ENVIRONMENT,
  APP_PORT,
  DB_CONNECTION,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
} = process.env;
