'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

interface TiltedCardProps {
  image: string;
  altText?: string;
  captionText?: string;
  slug?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showTooltip?: boolean;
}

export default function TiltedCard({
  image,
  altText,
  captionText,
  slug,
  scaleOnHover = 1.05,
  rotateAmplitude = 20,
  showTooltip = true,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, { damping: 30, stiffness: 100, mass: 2 });
  const rotateY = useSpring(0, { damping: 30, stiffness: 100, mass: 2 });
  const scale = useSpring(1, { damping: 30, stiffness: 100, mass: 2 });
  const tooltipOpacity = useSpring(0);
  const rotateTooltip = useSpring(0);
  const [lastY, setLastY] = useState(0);
  const router = useRouter();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateTooltip.set(-velocityY * 0.6);
    setLastY(offsetY);
  };

  const handleMouseEnter = () => {
    scale.set(scaleOnHover);
    tooltipOpacity.set(1);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    tooltipOpacity.set(0);
    rotateTooltip.set(0);
  };

  const handleClick = () => {
    if (slug) router.push(`/destinasi/${slug}`);
  };

  return (
    <div
      ref={ref}
      className="relative w-full  cursor-pointer perspective-800"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="w-full aspect-[16/7] relative transform-style-preserve-3d"
        style={{ rotateX, rotateY, scale }}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src={image}
          alt={altText || 'Gambar destinasi'}
          fill
          className="object-cover rounded-xl shadow-lg will-change-transform"
        />
        {showTooltip && captionText && (
          <motion.div
            className="absolute bg-white text-xs text-gray-800 px-2 py-1 rounded shadow-md pointer-events-none hidden sm:block z-10"
            style={{ x, y, opacity: tooltipOpacity, rotate: rotateTooltip }}
          >
            {captionText}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
