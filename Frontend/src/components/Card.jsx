import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export const Card = () => {
  const cards = [
    {
      image: assets.card1,
      title: "Ashram",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum reprehenderit molestiae dicta perferendis? Excepturi",
    },
    {
      image: assets.card2,
      title: "Ashram",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum reprehenderit molestiae dicta perferendis? Excepturi",
    },
    {
      image: assets.card3,
      title: "Ashram",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum reprehenderit molestiae dicta perferendis? Excepturi",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full justify-center items-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full md:w-1/4 bg-white p-6 flex flex-col items-center gap-4 shadow-2xl rounded-lg min-h-[22rem]"
          >
            <img className="w-16" src={card.image} alt={card.title} />
            <h1 className="text-lg font-semibold">{card.title}</h1>
            <p className="text-center text-sm text-gray-600">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;
