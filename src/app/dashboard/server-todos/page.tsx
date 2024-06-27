export const dynamic = 'force-dynamic';
export const revalidate = 0;

import React from 'react';
import prisma from '@/lib/prisma';
import { NewTodo, TodosGrid } from '@/todos';

export const metadata = {
  title: 'Listado de todos',
  description: 'Listado de todos',
};

export default async function ServerTodoPages() {
  const todos = await prisma.todo.findMany({
    orderBy: { description: 'asc' },
  });

  return (
    <>
      <span className="text-3xl mb-10">Server Action</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
