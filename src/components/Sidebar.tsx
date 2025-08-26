'use client';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type Props = {
  items: string[];
  active: number;
  onSelect: (idx: number) => void;
};

export default function Sidebar({ items, active, onSelect }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-base-200 text-base-content h-screen flex flex-col transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Collapse button */}
      <div className="flex justify-end p-2 flex-shrink-0">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="btn btn-ghost btn-square"
          aria-label="Toggle sidebar"
        >
          {collapsed ? <Bars3Icon className="w-6 h-6" /> : <XMarkIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu items */}
      <div className="flex-1 flex flex-col justify-start">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 flex items-center gap-2
              ${active === idx ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}
            `}
          >
            {/* Small icon placeholder */}
            <div className="w-4 h-4 bg-gray-400 rounded-full flex-shrink-0" />
            {!collapsed && <span>{item}</span>}
          </button>
        ))}
      </div>
    </aside>
  );
}
