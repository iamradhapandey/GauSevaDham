import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Import your images from assets folder
import img1 from "../assets/img1.jpeg" // WhatsApp Image 2025-07-23 at 21.15.36.jpeg
import img2 from "../assets/img2.jpeg" // WhatsApp Image 2025-07-23 at 21.15.37.jpeg
import img3 from "../assets/img3.jpeg" // WhatsApp Image 2025-07-23 at 21.15.38.jpeg
import img4 from "../assets/img4.jpeg" // WhatsApp Image 2025-07-23 at 21.15.38 (1).jpeg

const images = [img1, img2, img3, img4]

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <section className="relative h-screen w-full overflow-hidden bg-white flex justify-center items-center">
        <div className="relative w-[85vw] max-w-[1000px] mt-10 h-[80vh] shadow-2xl overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <img
                src={images[currentImage]}
                alt={'Slide ${currentImage}'}
                className="w-full h-full object-cover "
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <div className="absolute top-30 inset-0 w-full h-full flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-3xl sm:text-3.5xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to Our Community
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-6 sm:mb-8 leading-relaxed text-white/90 px-4 sm:px-0 text-center">
          Join us in our mission to spread love, compassion, and positivity.
        </p>

        <button className="bg-white text-[#a8247e] px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 text-sm sm:text-base md:text-lg">
          Get Involved
        </button>
      </div>
    </div>
  )
}

export default Hero