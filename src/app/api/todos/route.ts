import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import * as yup from 'yup';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = +(searchParams.get('take') ?? '10');
  const spik = +(searchParams.get('spik') ?? '0');

  if (isNaN(take)) {
    return NextResponse.json(
      { message: 'Take tiene que ser un numero' },
      { status: 400 }
    );
  }

  if (isNaN(spik)) {
    return NextResponse.json(
      { message: 'Spik tiene que ser un numero' },
      { status: 400 }
    );
  }
  const todos = await prisma.todo.findMany({
    take: take,
    skip: spik,
  });

  return NextResponse.json(todos);
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const { complete, description } = await postSchema.validate(
      await request.json()
    );

    const todo = await prisma.todo.create({ data: { complete, description } });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  const todo = await prisma.todo.deleteMany({
    where: { complete: true },
  });

  if (!todo) {
    return NextResponse.json(
      { message: `No existe todos activos` },
      { status: 404 }
    );
  }

  return NextResponse.json({
    todo,
  });
}
