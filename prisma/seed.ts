import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Try a simple query to test connection
  const result = await prisma.$queryRaw`SELECT 1+1 as result`;
  console.log("✅ Database connected, test query result:", result);

  // Create one game
  const game = await prisma.game.create({
    data: {
      title: "The Legend of Zelda: Tears of the Kingdom",
      slug: "zelda-tears-of-kingdom",
      description:
        "An epic adventure awaits in this sequel to Breath of the Wild.",
      releaseDate: new Date("2023-05-12"),
      developer: "Nintendo",
      publisher: "Nintendo",
      genre: JSON.stringify(["Action-Adventure", "Open World"]),
      platform: JSON.stringify(["Nintendo Switch"]),
      coverImage: "/games/zelda.jpg",
      screenshots: JSON.stringify([
        "/screenshots/zelda-1.jpg",
        "/screenshots/zelda-2.jpg",
      ]),
      rating: 9.8,
    },
  });

  console.log("✅ Created game:", game.title);
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
