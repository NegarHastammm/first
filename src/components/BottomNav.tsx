
'use client';
// Fixed bottom navigation bar
import type { FC } from 'react';

const BottomNav: FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-base-100 p-2 z-40">
      <div className="max-w-4xl mx-auto flex justify-between">
        <button className="btn btn-ghost flex-1">Shopping</button>
        <button className="btn btn-ghost flex-1">Profile</button>
        <button className="btn btn-ghost flex-1">Map</button>
        <button className="btn btn-ghost flex-1">Category</button>
      </div>
    </div>
  );
};

export default BottomNav;
