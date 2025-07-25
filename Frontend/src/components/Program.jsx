// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// import img1 from "../assets/event1.jpeg";
// import img2 from "../assets/event2.jpeg";
// import img3 from "../assets/event3.jpeg";

// const programs = [
//   {
//     title: "The Happiness Program",
//     description:
//       "The practical knowledge of breathing techniques gives you balance and wisdom that will transform your life by unlocking the true potential of your mind and soul by bringing them fullness.",
//     image: img1,
//     slug: "happiness-program",
//   },
//   {
//     title: "Sahaj Samadhi Meditation",
//     description:
//       "The state of samadhi will help you experience deep inner peace as well as increase self-awareness. It’s really easy to learn and practice.",
//     image: img2,
//     slug: "sahaj-samadhi",
//   },
//   {
//     title: "Vedic Rituals & Pujas",
//     description:
//       "Join powerful fire rituals to energize your space and bring harmony, based on ancient Vedic sciences.",
//     image: img3,
//     slug: "vedic-pujas",
//   },
// ];

// const Programs = () => {
//   const navigate = useNavigate();

//   // ✅ Navigate to Event Detail page with slug
//   const handleImageClick = (slug) => {
//     navigate(`/events`);
//   };

//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <p className="uppercase tracking-widest text-[#D04E4E] text-sm mb-2">
//           Programs
//         </p>
//         <h2 className="text-4xl font-bold text-[#3D1B3A]">
//           Meditation, Yoga, Retreats, Free Programs & More...
//         </h2>
//       </div>

//       <div className="relative border-l-2 border-[#F49CA1] max-w-4xl mx-auto space-y-16 pl-3">
//         {programs.map((program, idx) => (
//           <div
//             key={idx}
//             className="grid md:grid-cols-2 gap-6 items-center px-4 relative"
//           >
//             {/* Image clickable with animation */}
//             <div
//               onClick={() => handleImageClick(program.slug)}
//               className="cursor-pointer"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//                 className="rounded-lg shadow-md w-full h-[250px] overflow-hidden"
//               >
//                 <img
//                   src={program.image}
//                   alt={program.title}
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>

//             <div className="relative">
//               {/* Timeline dot */}
//               <div className="absolute -left-5 top-1.5 w-4 h-4 bg-[#F49CA1] rounded-full border-2 border-white z-10"></div>

//               <h3 className="text-xl font-bold text-[#D04E4E] mb-2">
//                 {program.title}
//               </h3>
//               <p className="text-gray-700">{program.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="h-[40px] w-screen mt-12 flex justify-center items-center bg-white">
//         <button
//           onClick={() => navigate("/events")}
//           className="bg-gray-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-[#8d1c69] transition duration-300 cursor-pointer"
//         >
//           MORE EVENTS
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Programs;





import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../assets/event1.jpeg";
import img2 from "../assets/event2.jpeg";
import img3 from "../assets/event3.jpeg";

const programs = [
  {
    title: "Shri Radha Krishna Satsang",
    description:
      "Join the divine satsang led by Devi Chitralekha Ji, where bhajans and pravachans bring peace to the soul and devotion to the heart.",
    image: img1,
    slug: "radha-krishna-satsang",
  },
  {
    title: "Bhajan Sandhya",
    description:
      "Immerse yourself in soulful bhajans that invoke love for Shri Radha Rani and bring the mind closer to divine bliss and surrender.",
    image: img2,
    slug: "bhajan-sandhya",
  },
  {
    title: "Gau Seva & Spiritual Retreat",
    description:
      "Participate in our Gau Seva programs and spiritual camps organized by Gau Seva Dham – where selfless service and divine teachings come together.",
    image: img3,
    slug: "gau-seva-retreat",
  },
];

const Programs = () => {
  const navigate = useNavigate();

  const handleImageClick = (slug) => {
    navigate(`/events/${slug}`);
  };

  const handleJoinNow = () => {
    navigate("/contact");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f9f6f5] to-[#fdf0f5]">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="uppercase tracking-wider text-[#D04E4E] text-sm font-semibold mb-3">
          Spiritual Events
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#3C1F2F]">
          Satsangs, Bhajan Evenings & Seva Programs with Devi Chitralekha Ji
        </h2>
        <p className="mt-4 text-gray-600 text-base max-w-2xl mx-auto">
          Explore upcoming spiritual events, Gau Seva initiatives, and divine bhajan sessions guided by Devi Ji – awakening hearts through devotion.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-20 border-l-2 border-[#F49CA1] pl-6 relative">
        {programs.map((program, idx) => (
          <div
            key={idx}
            className="grid md:grid-cols-2 gap-6 items-center px-2 relative group"
          >
            {/* Timeline dot */}
            <div className="absolute -left-4 top-2 w-4 h-4 bg-[#F49CA1] rounded-full border-2 border-white z-10"></div>

            {/* Program Image */}
            <motion.div
              onClick={() => handleImageClick(program.slug)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer rounded-lg shadow-lg overflow-hidden h-[250px]"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Program Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#D04E4E]">{program.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{program.description}</p>
              <button
                onClick={handleJoinNow}
                className="mt-4 inline-block bg-[#8d1c69] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#a6277c] transition duration-300"
              >
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16 flex justify-center">
        <button
          onClick={() => navigate("/events")}
          className="bg-[#3c1f2f] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#8d1c69] transition duration-300"
        >
          View All Events
        </button>
      </div>
    </section>
  );
};

export default Programs;
