import React, { useState } from "react"
import { assets } from "../assets/assets"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const sevaSlides = [
  {
    type: "video",
    content: (
      <iframe
        className="w-full h-full rounded-xl"
        src="https://www.youtube.com/embed/vZqTv905-Ls"
        title="Gau Seva | Devi Chitralekha Ji | G.S.D Animal Hospital"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    )
  },
  ...[assets.sevaImg1, assets.sevaImg2, assets.sevaImg3, assets.sevaImg4, assets.sevaImg5].map((img) => ({
    type: "image",
    content: <img src={img} alt="Seva" className="w-full h-full object-cover rounded-xl" />
  }))
]

const AboutSeva = () => {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sevaSlides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sevaSlides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full mt-24">
      {/* Swiper Section */}
      <div className="relative w-full h-[60vh] sm:h-[75vh] overflow-hidden mb-10 rounded-xl">
        <motion.div
          key={currentIndex}
          className="w-full h-full absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {sevaSlides[currentIndex].content}
        </motion.div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-80"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-80"
        >
          ❯
        </button>
      </div>

      {/* 📜 Seva Description */}
      <div className="bg-white py-10 px-5 sm:px-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Seva Activities
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4 text-justify">
          <span className="block mb-4">
            Gau Seva Dham is a divine center established under the pious guidance of Devi Chitralekha Ji,
            committed to the service and protection of Gau Mata (holy cows). This sacred place is not just a shelter,
            but a living embodiment of Dharma and selfless service.
          </span>
          <span className="block mb-4">
            Hundreds of cows, especially those injured, abandoned, or in critical condition, are lovingly cared for here.
            They are provided with nutritious food, proper medical treatment, and a peaceful environment where they can live with dignity.
          </span>
          <span className="block mb-4">
            The seva doesn’t stop at physical care—daily rituals, devotional bhajans, and spiritual practices are held to uplift the
            divine vibration of the place. Volunteers and devotees gather to participate in this sacred mission of service and devotion.
          </span>
          <span className="block mb-4">
            Under the inspiration of Devi Chitralekha Ji, this initiative has become a beacon of Sanatan values—promoting kindness,
            ahimsa (non-violence), and a deep respect for all forms of life.
          </span>
          <span className="block mb-4">
            Gau Seva Dham is also a place for transformation—where people come not only to serve but to find peace, purpose, and spiritual connection.
            Many devotees have shared life-changing experiences after spending time here in seva and satsang.
          </span>
          <span className="block">
            The mission continues to grow, with the grace of Devi Ji and support of the devotees, spreading the message of compassion,
            love, and dharma across the nation and beyond.
          </span>
        </p>

        {/* ❤️ CTA Donate Banner */}
        <div className="bg-[#3c1f2f] text-white text-center py-6 mt-12 rounded-xl shadow-lg">
          <motion.p
            className="font-semibold text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Join your hand with us for a better life and beautiful future.
          </motion.p>
          <button
            onClick={() => navigate("/donate")}
            className="mt-4 px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-[#8d1c69] to-[#d81b60] rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            💠 DONATE NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutSeva