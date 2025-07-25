import { useState } from "react";
import { bhajanData } from "../assets/assets";
import { Link } from "react-router-dom";

const Bhajan = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Extract unique categories from the data
  const categories = ["All Categories", ...new Set(bhajanData.map(b => b.category))];

  // Filter the bhajans based on the selected category
  const filteredBhajans =
    selectedCategory === "All Categories"
      ? bhajanData
      : bhajanData.filter(b => b.category === selectedCategory);

  return (
    <div className="p-10 mt-25">
      <h1 className="text-4xl font-bold text-center text-[#3c1f2f] mb-10">
        🎶 Bhajans by Devi Ji
      </h1>

      {/* Dropdown for category filtering */}
      <div className="flex justify-center mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-4 py-2 rounded text-[#3c1f2f] text-lg shadow-md"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredBhajans.map((bhajan) => (
          <div
            key={bhajan.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <iframe
              className="w-full h-48"
              src={bhajan.youtubeUrl}
              title={bhajan.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-[#3c1f2f]">
                {bhajan.title}
              </h2>
              <p className="text-gray-600">{bhajan.description}</p>
              <Link
                to={`/bhajan/${bhajan.id}`}
                className="text-indigo-600 font-medium mt-2 underline hover:text-indigo-800"
              >
                View Lyrics →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bhajan;
