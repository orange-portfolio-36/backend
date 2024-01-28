import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createTag(tagName: string) {
  
    const createdTag = await prisma.tag.create({
      data: {
        name: tagName,
      },
    });

    console.log('Tag created:', createdTag);
  
  } 

const tagName: string[] = ['UX', 'Web', 'Mobile'];

tagName.map(e => {
    createTag(e)
})

