import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../assets/event1.jpeg";
import img2 from "../assets/event2.jpeg";
import img3 from "../assets/event3.jpeg";

const programs = [
  {
    title: "The Happiness Program",
    description:
      "The practical knowledge of breathing techniques gives you balance and wisdom that will transform your life by unlocking the true potential of your mind and soul by bringing them fullness.",
    image: img1,
    slug: "happiness-program",
  },
  {
    title: "Sahaj Samadhi Meditation",
    description:
      "The state of samadhi will help you experience deep inner peace as well as increase self-awareness. It’s really easy to learn and practice.",
    image: img2,
    slug: "sahaj-samadhi",
  },
  {
    title: "Vedic Rituals & Pujas",
    description:
      "Join powerful fire rituals to energize your space and bring harmony, based on ancient Vedic sciences.",
    image: img3,
    slug: "vedic-pujas",
  },
];

const Programs = () => {
  const navigate = useNavigate();

  const handleImageClick = (slug) => {
    navigate(`/events/${slug}`);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="uppercase tracking-widest text-[#D04E4E] text-sm mb-2">
          Programs
        </p>
        <h2 className="text-4xl font-bold text-[#3D1B3A]">
          Meditation, Yoga, Retreats, Free Programs & More...
        </h2>
      </div>

      <div className="relative border-l-2 border-[#F49CA1] max-w-4xl mx-auto space-y-16 pl-3">
        {programs.map((program, idx) => (
          <div
            key={idx}
            className={`grid md:grid-cols-2 gap-6 items-center px-4 relative`}
          >
            {/* Image with motion hover */}
            <div
              onClick={() => handleImageClick(program.slug)}
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg shadow-md w-full h-[250px] overflow-hidden"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-5 top-1.5 w-4 h-4 bg-[#F49CA1] rounded-full border-2 border-white z-10"></div>

              <h3 className="text-xl font-bold text-[#D04E4E] mb-2">
                {program.title}
              </h3>
              <p className="text-gray-700">{program.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[40px] w-screen mt-12 flex justify-center items-center bg-white">
        <button
          onClick={() => navigate("/events")}
          className="bg-gray-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-[#8d1c69] transition duration-300 cursor-pointer"
        >
          MORE EVENTS
        </button>
      </div>
    </section>
  );
};

export default Programs;
