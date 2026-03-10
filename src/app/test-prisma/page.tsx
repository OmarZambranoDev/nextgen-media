import { PrismaClient } from "@prisma/client";

export default function TestPage() {
  // Just testing the import - we won't actually use it in a server component
  const hasPrisma = typeof PrismaClient !== "undefined";

  return (
    <div>
      <h1>Prisma Import Test</h1>
      <p>PrismaClient import: {hasPrisma ? "✅ Success" : "❌ Failed"}</p>
    </div>
  );
}
