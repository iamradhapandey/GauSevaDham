import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DonationCard = ({ image, title, description, options = [], disabled }) => {
   const [selectedOption, setSelectedOption] = useState(0);
  //    const handleOptionChange = (index) => {
  //   setSelectedOption(index);
  //   console.log(index.target);
    
  // };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-lg shadow-md p-4"
    >
      <img src={image} alt={title} className="rounded-md mb-4 w-full h-48 object-cover" />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
       {/* Read More Link */}
       <p className="text-sm text-red-500 font-semibold underline cursor-pointer mb-4">
         Read More
       </p>

      {/* Extracted ₹ Amount */}
     <p className="text-xl font-bold text-blue-900 mb-3">
         {options[selectedOption]?.label?.match(/₹[\d,]+/)?.[0] || ''}
       </p>

      {disabled && (
        <button
          disabled
          className="bg-[#cc6b4c] text-white font-semibold flex items-center justify-center gap-2 px-4 py-2 rounded w-full cursor-not-allowed"
        >
          <span className="text-xl">ॐ</span> Not available
        </button>
      )}
      <form className="space-y-3 mt-3 ">
        {options.map((option, index) => (
          <label   className="block" key={index}>
            <input  type="radio" name={title} className="mr-2 cursor-pointer" /> {option.label}
          </label>
        ))}
      </form>
    </motion.div>
  );
};

export default DonationCard;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const DonationCard = ({ image, title, description, options = [], disabled }) => {
//   const [selectedOption, setSelectedOption] = useState(0);

//   const handleOptionChange = (index) => {
//     setSelectedOption(index);
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05, y: -5 }}
//       transition={{ type: 'spring', stiffness: 300 }}
//       className="bg-white rounded-lg shadow-md p-4"
//     >
//       {/* Image */}
//       <img src={image} alt={title} className="rounded-md mb-4 w-full h-48 object-cover" />

//       {/* Selected Radio Label */}
//       <label className="flex items-start gap-2 font-semibold text-sm text-gray-800 mb-2">
//         <input
//           type="radio"
//           checked
//           readOnly
//           className="accent-orange-500 mt-1"
//         />
//         {options[selectedOption]?.label}
//       </label>

//       {/* Extracted ₹ Amount */}
//       <p className="text-xl font-bold text-blue-900 mb-3">
//         {options[selectedOption]?.label?.match(/₹[\d,]+/)?.[0] || ''}
//       </p>

//       {/* Description */}
//       <p className="text-sm text-gray-700 mb-2 leading-relaxed">{description}</p>

//       {/* Read More Link */}
//       <p className="text-sm text-red-500 font-semibold underline cursor-pointer mb-4">
//         Read More
//       </p>

//       {/* Disabled Button */}
//       {disabled && (
//         <button
//           disabled
//           className="bg-[#cc6b4c] text-white font-semibold flex items-center justify-center gap-2 px-4 py-2 rounded w-full cursor-not-allowed"
//         >
//           <span className="text-xl">ॐ</span> Not available
//         </button>
//       )}

//       {/* Hidden Extra Options (Optional) */}
//       <form className="space-y-3 mt-5 hidden">
//         {options.map((option, index) => (
//           <label
//             key={index}
//             className={`block cursor-pointer text-sm ${
//               selectedOption === index ? 'text-orange-600 font-semibold' : 'text-gray-800'
//             }`}
//           >
//             <input
//               type="radio"
//               name={title}
//               className="mr-2 accent-orange-500"
//               checked={selectedOption === index}
//               onChange={() => handleOptionChange(index)}
//             />
//             {option.label}
//           </label>
//         ))}
//       </form>
//     </motion.div>
//   );
// };

// export default DonationCard;

