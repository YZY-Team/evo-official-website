"use client";

import Image from "next/image";

const scrollImages = [
  "/layout-scroll/1.png",
  "/layout-scroll/2.png",
  "/layout-scroll/3.png",
  "/layout-scroll/4.png",
  "/layout-scroll/5.png",
  "/layout-scroll/6.png",
  "/layout-scroll/7.png",
  "/layout-scroll/8.png",
];

interface ScrollBannerProps {
  direction?: 'left' | 'right';
}

export default function ScrollBanner({ direction = 'left' }: ScrollBannerProps) {
  return (
    <div className="relative z-30 w-full overflow-hidden border-t border-white/20 bg-white/5 backdrop-blur-md ">
      <div className={`flex ${direction === 'left' ? 'animate-banner-scroll' : 'animate-banner-scroll-reverse'}`}>
        {[...Array(4)].map((_, groupIndex) =>
          scrollImages.map((src, index) => (
            <Image
              key={`scroll-${groupIndex}-${index}`}
              src={src}
              alt={`Scroll ${index + 1}`}
              width={360}
              height={48}
              className="mx-4 h-[3vw]  w-auto"
            />
          ))
        )}
      </div>
    </div>
  );
}