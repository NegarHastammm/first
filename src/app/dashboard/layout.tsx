'use client';
import { ReactNode,useState} from 'react';
import Sidebar from '@/components/Sidebar';
import BottomNav from '@/components/BottomNav';



type Props = { children: ReactNode };

export default function DashboardLayout({ children }: Props) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
     <Sidebar
          items={Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)}
          active={active}
          onSelect={setActive}
        />
        <main className="flex-1 p-4 flex flex-col gap-4">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
