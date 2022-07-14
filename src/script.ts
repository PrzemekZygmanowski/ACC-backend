import { PrismaClient } from "@prisma/client";

// 2
const prisma = new PrismaClient();

// 3
async function main() {
  const newProject = await prisma.project.create({
    data: {
      location: "Łódź",
      description: "pierwsza lokacja",
    },
  });
  const allProjects = await prisma.project.findMany();
  console.log(allProjects);
}

// 4
main()
  .catch((e) => {
    throw e;
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect();
  });
