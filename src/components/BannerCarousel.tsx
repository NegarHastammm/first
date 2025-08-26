'use client';
import React from 'react';

type BannerCard = {
  image: string;
  title?: string;
};

type Props = {
  cards: BannerCard[];
};

export default function BannerCarousel({ cards }: Props) {
  return (
    <div className="w-full">
       <h2 className="text-lg font-bold mb-3">Banner</h2>
      {/* Carousel wrapper */}
      <div className="carousel w-full rounded-xl overflow-hidden shadow-md">
        {cards.map((card, idx) => (
          <div
            key={idx}
            id={`slide-${idx}`}
            className="carousel-item relative w-full"
          >
            <img
              src={card.image}
              alt={card.title || `banner-${idx}`}
              className="w-full h-52 md:h-72 object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
              <a
                href={`#slide-${(idx - 1 + cards.length) % cards.length}`}
                className="btn btn-circle btn-sm"
              >
                ❮
              </a>
              <a
                href={`#slide-${(idx + 1) % cards.length}`}
                className="btn btn-circle btn-sm"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 py-3">
        {cards.map((_, idx) => (
          <a
            key={idx}
            href={`#slide-${idx}`}
            className="btn btn-xs btn-circle"
          >
            {idx + 1}
          </a>
        ))}
      </div>
    </div>
  );
}
