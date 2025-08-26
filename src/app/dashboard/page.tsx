'use client';
import BannerCarousel from '@/components/BannerCarousel';
import GalleryGrid from '@/components/GalleryGrid';

export default function DashboardPage() {
  const banners = [
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg'
  ];

  const gallery = [
    '/images/g1.jpg','/images/g2.jpg','/images/g3.jpg',
    '/images/g4.jpg','/images/g5.jpg','/images/g6.jpg',
    '/images/g7.jpg','/images/g8.jpg','/images/g9.jpg'
  ];

  return (
    <div>
      <BannerCarousel images={banners} />
      <GalleryGrid images={gallery} />
    </div>
  );
}
