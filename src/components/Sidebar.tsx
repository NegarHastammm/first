'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';

type SidebarProps = {
  items: string[];
  active: number;
  onSelect: (i: number) => void;
};

export default function Sidebar({ items, active, onSelect }: SidebarProps) {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`bg-gray-100 min-h-screen transition-all duration-300 ${
        open ? 'w-64' : 'w-16'
      } flex flex-col`}
    >
      {/* Header with burger button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-ghost btn-sm"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        {open && <span className="font-bold text-black">Menu</span>}
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className="flex flex-col gap-2">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                i === active
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-200 text-gray-800'
              }`}
            >
              {open ? item : i + 1}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
