'use client';
import React from 'react';

type Props = {
  galleries: { [key: number]: string[] }; // مجموعه گالری‌ها
  active: number;                         // اندیس گالری فعال
};

export default function TopGallery({ galleries, active }: Props) {
  const images = galleries[active] || [];

  return (
    <div className="w-full">
      <h2 className="text-lg font-bold mb-3">Top Gallery</h2>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 w-40 h-28 rounded-lg overflow-hidden shadow"
          >
            <img
              src={img}
              alt={`top-gallery-${idx}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
