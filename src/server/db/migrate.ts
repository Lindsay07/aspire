import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { env } from "~/env";

const runMigrations = async () => {
  // Debug: Print environment status
  console.log("Environment check:");
  console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
  console.log("env.DATABASE_URL exists:", !!env.DATABASE_URL);
  
  const connection = postgres(env.DATABASE_URL, { max: 1 });
  const db = drizzle(connection, { logger: true });

  console.log("⏳ Running migrations...");
  
  try {
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("✅ Migrations completed!");
  } catch (error) {
    console.error("❌ Migration failed!", error);
    process.exit(1);
  } finally {
    await connection.end();
  }
};

void runMigrations();