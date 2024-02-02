import { faker } from "@faker-js/faker";
import bcrypt from "bcryptjs";
import { PrismaClient, Project, Tag, User } from "@prisma/client";

const prisma = new PrismaClient();

async function seedUsers() {
  const users = await prisma.user.findMany({});
  if (users.length > 0) {
    const salts = Number(process.env.HASH_SALTS) || 12;
    const data = Array.from<unknown, Omit<User, "id">>({ length: 5 }, () => ({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: bcrypt.hashSync(faker.internet.password(), salts),
    }));

    await prisma.user.createMany({
      data,
    });

    return await prisma.user.findMany({});
  }
  return users;
}

async function seedTags() {
  const tags = await prisma.tag.findMany({});
  if (tags.length === 0) {
    const names = ["UX", "Mobile", "Web"];
    await prisma.tag.createMany({
      data: names.map((name) => ({ name })),
    });

    return await prisma.tag.findMany({});
  }
  return tags;
}

async function seedProjects(tags: Tag[], users: User[]) {
  const projects = await prisma.project.findMany({});

  if (projects.length === 0) {
    const data = Array.from<unknown, Omit<Project, "id">>(
      { length: 10 },
      () => ({
        description: faker.lorem.sentence(),
        name: faker.lorem.word(),
        url_image: faker.image.urlLoremFlickr(),
        url_project: "https://orangejuice.com.br",
        userId: getRandomItem(users).id,
      })
    );

    for (const project of data) {
      await prisma.project.create({
        data: {
          ...project,
          ProjectTag: {
            create: {
              tagId: getRandomItem(tags).id,
            },
          },
        },
      });
    }

    return await prisma.project.findMany({});
  }

  return projects;
}

function getRandomItem<T>(array: T[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

async function main() {
  const tags = await seedTags();
  const users = await seedUsers();
  await seedProjects(tags, users);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
