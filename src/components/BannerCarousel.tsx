'use client';
import { useState } from 'react';

type BannerCard = {
  id: number;
  image: string;
};

type BannerCarouselProps = {
  cards: BannerCard[];
};

export default function BannerCarousel({ cards }: BannerCarouselProps) {
  const [active, setActive] = useState(0);

  function prevSlide() {
    setActive((p) => (p - 1 + cards.length) % cards.length);
  }
  function nextSlide() {
    setActive((p) => (p + 1) % cards.length);
  }

  return (
    <div className="w-full relative rounded-xl overflow-hidden shadow-lg">
        <h2 className="text-lg font-bold mb-3">Banner</h2>
      {/* Images */}
      <div className="relative w-full h-56 md:h-80">
        {cards.map((c, i) => (
          <img
            key={c.id}
            src={c.image}
            alt={`banner-${c.id}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-white/70 hover:bg-white"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-white/70 hover:bg-white"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              i === active ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
