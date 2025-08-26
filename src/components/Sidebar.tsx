'use client';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const sidebarItems = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  label: `Item ${i + 1}`,
  route: `/dashboard?tab=${i + 1}`
}));

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`bg-white shadow-lg transition-all duration-300 ${open ? 'w-64' : 'w-16'}`}>
      <div className="flex items-center justify-between p-4 border-b">
        {open && <span className="font-bold text-lg">Menu</span>}
        <button onClick={() => setOpen(!open)}>
          <Bars3Icon className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      <ul className="mt-4">
        {sidebarItems.map((it) => (
          <li key={it.id}>
            <a
              href={it.route}
              className="w-full block px-4 py-2 rounded hover:bg-blue-100 text-left"
            >
              {open ? it.label : it.label[0]}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
