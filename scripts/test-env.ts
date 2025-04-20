import { env } from "../src/env";

console.log("Environment variables:");
console.log("DATABASE_URL:", env.DATABASE_URL ? "exists" : "missing");
console.log("AUTH_GOOGLE_ID:", env.AUTH_GOOGLE_ID ? "exists" : "missing");
console.log("AUTH_GOOGLE_SECRET:", env.AUTH_GOOGLE_SECRET ? "exists" : "missing"); 