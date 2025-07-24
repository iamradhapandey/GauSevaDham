import React from "react"
import { motion } from "framer-motion"
import { assets } from "../assets/assets" // Make sure paths are correct

const Poster = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full max-w-7xl mx-auto min-h-[500px]">
      {/* Left Section */}
      <div className="w-full md:w-1/2 h-[500px] relative overflow-hidden group">
        <motion.img
          src={assets.poster1}
          alt="Left"
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 px-4 text-left flex flex-col justify-end text-white pb-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-[#fd9090] transition duration-300">Ashram Life</h1>

          <div className="w-full flex justify-center">
            <button className="bg-white text-[#a8247e] px-6 py-3 rounded-full shadow-lg hover:bg-[#8d1c69] hover:text-white transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col ">
        {/* Top Image */}
        <div className="h-[245px] relative overflow-hidden group">
          <motion.img
            src={assets.poster2}
            alt="Top Right"
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 px-4 text-left flex flex-col justify-end text-white pb-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-[#fd9090] transition duration-300">Ashram Life</h1>

            <div className="w-full flex justify-center">
              <button className="bg-white text-[#a8247e] px-6 py-3 rounded-full shadow-lg hover:bg-[#8d1c69] hover:text-white transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="h-[255px] relative overflow-hidden group">
          <motion.img
            src={assets.poster3}
            alt="Bottom Right"
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 px-4 text-left flex flex-col justify-end text-white pb-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-[#fd9090] transition duration-300">Ashram Life</h1>

            <div className="w-full flex justify-center">
              <button className="bg-white text-[#a8247e] px-6 py-3 rounded-full shadow-lg hover:bg-[#8d1c69] hover:text-white transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Poster
