'use client';
import { useState } from 'react';
import TopGallery from '@/components/TopGallery';
import BannerCarousel from '@/components/BannerCarousel';
import GalleryGrid from '@/components/GalleryGrid';

export default function DashboardPage() {
  const [active, setActive] = useState(1);

  const galleries: { [key: number]: string[] } = {};
  Array.from({ length: 20 }, (_, i) => {
    galleries[i + 1] = Array.from({ length: 6 }, (_, j) => `/images/g${(i + j) % 9 + 1}.jpg`);
  });

  const bannerCards = [
    { image: '/images/banner1.jpg', title: 'Offer', description: '50% off' },
    { image: '/images/banner2.jpg', title: 'New', description: 'Latest arrivals' },
    { image: '/images/banner3.jpg', title: 'Book', description: 'Reserve now' },
  ];

  const mainGallery = Array.from({ length: 9 }, (_, i) => `/images/g${i + 1}.jpg`);

  return (
    <>
    

      <BannerCarousel cards={bannerCards} />

  <TopGallery galleries={galleries} active={active} />
      <GalleryGrid images={mainGallery} />
    </>
  );
}
