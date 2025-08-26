
'use client';

type Props = { images: string[] };

export default function GalleryGrid({ images }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
          <img src={src} alt={`Gallery ${i}`} className="w-full h-40 object-cover" />
        </div>
      ))}
    </div>
  );
}
