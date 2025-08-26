'use client';
import { useState } from 'react';

type Props = { images: string[] };

export default function BannerCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((prev) => (prev + 1) % images.length);
  }
  function prev() {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-2xl shadow-lg mb-6">
      <img
        src={images[index]}
        alt={`Banner ${index + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
      />
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm">
        ❮
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm">
        ❯
      </button>
    </div>
  );
}
