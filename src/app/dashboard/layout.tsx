'use client';

import { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import BottomNav from '@/components/BottomNav';

type Props = { children: ReactNode };

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 p-4 mb-16 md:mb-0 overflow-y-auto">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
