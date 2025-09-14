import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';

dotenv.config();

const db = drizzle(process.env.DATABASE_FILE_NAME);

export default db;