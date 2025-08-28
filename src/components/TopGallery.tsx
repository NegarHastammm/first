'use client';
import { useEffect, useState } from 'react';

type TopGalleryProps = {
  images: string[]; // any length per item
};

export default function TopGallery({ images }: TopGalleryProps) {
  const [current, setCurrent] = useState(0);

  // Ensure we reset to the first slide whenever the gallery changes
  useEffect(() => {
    setCurrent(0);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto text-gray-500">
        No images for this gallery.
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <img
        src={images[current]}
        alt={`Top gallery image ${current + 1}`}
        className="w-full h-64 md:h-80 object-cover rounded-xl shadow"
      />

      {/* arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-blue-600 text-white"
        aria-label="Previous"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-blue-600 text-white"
        aria-label="Next"
      >
        ❯
      </button>

      {/* dots */}
      <div className="flex justify-center mt-3 gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === i ? 'bg-blue-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
