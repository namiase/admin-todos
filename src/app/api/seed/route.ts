import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  const todo = await prisma.todo.createMany({
    data: [
      {
        description: 'Piedra del alma',
        complete: true,
      },
      { description: 'piedra del poder ' },
      { description: 'piedra del tiempo ' },
      { description: 'piedra del espacio' },
      { description: 'piedra de la realidad ' },
    ],
  });
  console.log(todo);
  return NextResponse.json({
    message: 'seed executed',
  });
}
