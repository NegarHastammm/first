'use client';
import React from 'react';

type Props = {
  images: string[];
};

export default function GalleryGrid({ images }: Props) {
  return (
    <div className="w-full">
      <h2 className="text-lg font-bold mb-3">Main Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative w-full h-32 md:h-40 rounded-lg overflow-hidden shadow"
          >
            <img
              src={img}
              alt={`gallery-${idx}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
