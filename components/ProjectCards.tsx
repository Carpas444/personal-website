"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

interface Props {
  image: string;
  title: string;
  text: string;
  link: string;
}

const ProjectCards = ({ image, title, text, link }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-full sm:w-[480px] h-[320px] sm:h-[350px] rounded-md cursor-pointer"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Front Side */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-3 sm:p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-sm sm:text-lg pb-5 hidden group-hover:flex items-center z-[20] justify-center">
            Learn more &gt;
          </div>
        </div>

        {/* Back Side */}
        <div
          className="w-full h-full group relative flip-card-back bg-transparent bg-cover bg-center text-white rounded-lg p-3 sm:p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          <div className="flex flex-col gap-2 sm:gap-3 py-2 sm:py-3 z-[30]">
            <h1 className="text-white text-base sm:text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[15px] sm:text-[17px]">
              {text}
            </p>
            <Link href={link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} 
                  onTouchStart={(e) => e.stopPropagation()}
                  onPointerDown={(e) => e.stopPropagation()} 
                  className="text-gray-200 text-[15px] sm:text-[17px] underline">
              Github Link
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCards;