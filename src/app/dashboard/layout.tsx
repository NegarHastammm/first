'use client';
import { useMemo, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopGallery from '@/components/TopGallery';
import BannerCarousel from '@/components/BannerCarousel';
import BottomNav from '@/components/BottomNav';
import GalleryGrid from '@/components/GalleryGrid';

export default function DashboardPage() {
  const [active, setActive] = useState(0);

  // Sidebar items
  const items = useMemo(
    () => Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
    []
  );

  // Galleries
  const galleries = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => {
        const count = (i % 5) + 2; // between 2..6 images
        const images = Array.from({ length: count }, (_, j) => {
          const seed = `${i + 1}-${j + 1}`;
          return `https://picsum.photos/seed/${seed}/960/480`;
        });
        return {
          title: `Top Gallery${i + 1}`,
          images
        };
      }),
    []
  );

  // Banner images
  const banners = [
    { id: 1, image: 'https://picsum.photos/seed/banner1/1200/400' },
    { id: 2, image: 'https://picsum.photos/seed/banner2/1200/400' },
    { id: 3, image: 'https://picsum.photos/seed/banner3/1200/400' }
  ];

  // Static grid gallery
  const gridImages = Array.from({ length: 9 }, (_, i) => 
    `https://picsum.photos/seed/grid-${i}/400/400`
  );

  const safeActive = Math.min(Math.max(active, 0), galleries.length - 1);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar items={items} active={safeActive} onSelect={setActive} />

      {/* Main content */}
      <main className="flex-1 p-6 flex flex-col gap-8 pb-24">
        {/* Banner */}
        <BannerCarousel cards={banners} />

        {/* Title */}
        <h1 className="text-2xl font-bold text-blue-700">
          {galleries[safeActive].title}
        </h1>

        {/* Top Gallery */}
        <TopGallery key={safeActive} images={galleries[safeActive].images} />

        {/* Grid Gallery */}
        <GalleryGrid images={gridImages} />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
