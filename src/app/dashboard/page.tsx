import { auth } from '@/auth';
import { WidgetItem } from '@/components';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();

  if (!session) redirect('api/auth/signin');

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
      <WidgetItem title="Usuario conectado">
        <div className="flex flex-col">
          <Image
            src={session?.user?.image ?? ''}
            width={100}
            height={100}
            alt="logo"
          />
          <span>Nombre: {session?.user?.name ?? ''}</span>
          <span>Email: {session?.user?.email ?? ''}</span>
        </div>
      </WidgetItem>
    </div>
  );
}
