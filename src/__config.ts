require('dotenv').config();
import { strict as assert } from 'assert';

assert(process.env.NODE_ENV, '.env.NODE_ENV is required');
assert(process.env.KAFKA_BROKERS, '.env.KAFKA_BROKERS is required');

export const NODE_ENV = process.env.NODE_ENV;
export const KAFKA_BROKERS = process.env.KAFKA_BROKERS.split(',');
