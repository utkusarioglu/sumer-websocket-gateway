require("dotenv").config();
import { strict as assert } from "assert";

assert(process.env.NODE_ENV, ".env.NODE_ENV is required");
assert(process.env.HOSTNAME, ".env.HOSTNAME is required");
assert(process.env.KAFKA_BROKERS, ".env.KAFKA_BROKERS is required");
assert(process.env.PORT, ".env.PORT is required");
assert(process.env.CORS_ORIGIN, ".env.ALLOWED_APPS is required");

export const NODE_ENV = process.env.NODE_ENV;
export const HOSTNAME = process.env.HOSTNAME;
export const KAFKA_BROKERS = process.env.KAFKA_BROKERS.split(",");
export const PORT = +process.env.PORT;
export const CORS_ORIGIN = process.env.CORS_ORIGIN;
