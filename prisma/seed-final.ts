console.log("Starting seed...");
console.log("DATABASE_URL:", process.env.DATABASE_URL);

import { PrismaClient } from "@prisma/client";

console.log("Creating PrismaClient...");
const prisma = new PrismaClient();
console.log("PrismaClient created");

async function main() {
  console.log("Testing connection...");
  await prisma.$connect();
  console.log("Connected!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
