import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { defineConfig } from '@prisma/client';

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export default defineConfig({
  adapter,
});
