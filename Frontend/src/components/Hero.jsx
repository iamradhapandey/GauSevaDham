




import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";

const images = [img1, img2, img3, img4];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {/* Previous image stays while new one fades in */}
        {prevImage !== null && (
          <img
            src={images[prevImage]}
            alt={`Slide ${prevImage}`}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        )}

        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-full h-full object-cover absolute top-0 left-0"
        />

        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg"
        >
          Experience Divine Grace with Devi Chitralekha Ji
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mt-4"
        >
          Join spiritual satsangs, soulful bhajans, and Gau Seva missions to elevate your inner self and connect with divine love.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          onClick={() => navigate("/contact")}
          className="mt-8 bg-white text-[#a8247e] px-6 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-100 transition duration-300"
        >
          Get Involved
        </motion.button>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30"
      >
        <svg
          className="w-8 h-8 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;

