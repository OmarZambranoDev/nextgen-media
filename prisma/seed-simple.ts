console.log("Starting seed...");
console.log("DATABASE_URL:", process.env.DATABASE_URL);

import { PrismaClient } from "@prisma/client";

console.log("PrismaClient imported");

// Try with explicit options
const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

console.log("PrismaClient instantiated");

async function main() {
  console.log("Main function started");

  // Test the connection
  await prisma.$connect();
  console.log("Connected to database");

  const result = await prisma.$queryRaw`SELECT 1+1 as result`;
  console.log("Query result:", result);
}

main()
  .catch((error) => {
    console.error("Error in main:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Disconnected");
  });
