

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Card = () => {
  const navigate = useNavigate();

  const cards = [
    {
      image: assets.card1,
      title: "Ashram Facilities",
      desc: "Experience peace, discipline, and spiritual upliftment in our serene and well-maintained Ashram environment.",
    },
    {
      image: assets.card2,
      title: "Spiritual Programs",
      desc: "Join daily satsangs, yoga sessions, and meditation retreats designed to enrich your inner self.",
    },
    {
      image: assets.card3,
      title: "Devotional Services",
      desc: "Participate in a variety of devotional activities like Bhajans, Pujas, and Katha programs with pure devotion.",
    },
  ];

  return (
    <div className="w-full py-16 px-6 bg-[#f9f6f5] flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#3c1f2f] mb-12 text-center">
        Explore Our Offerings
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-20 h-20 object-contain mb-4"
              src={card.image}
              alt={card.title}
            />
            <h3 className="text-xl font-semibold text-[#8d1c69] mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {card.desc}
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-auto bg-[#8d1c69] hover:bg-[#a3257d] text-white px-6 py-2 rounded-full text-sm font-medium transition duration-300 cursor-pointer"
            >
              Join Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;
