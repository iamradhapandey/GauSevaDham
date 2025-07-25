import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


    const Donation = () => {
        const [isChecked, setIsChecked] = useState(false); 
        const navigate = useNavigate();

  return (
    <section className="bg-[#fdf0f5] text-[#4b2c34] px-6 py-12 md:px-16 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div>
          <p className="uppercase tracking-widest text-sm font-semibold text-[#e37086] mb-2">Donations</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Dakshina: <br />
            Yoga’s Practice of <br />
            “Giving Back”
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Dakshina is an ancient tradition of those who practice yoga, and it is a display of generosity – a private contribution to the financial support of the teacher and their teachings.
          </p>
          <p className="text-base leading-relaxed">
            When we experience a pure inner impulse caused by a higher purpose to help others, to express our unconditional gratefulness, it is called Dakshina. We are being guided by our feelings, and, in this case, the amount we give is irrelevant as long as we gain our own true Self.
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Progress Bar */}
          <div>
            <h3 className="text-3xl font-bold text-[#dc4e4e]">$20,575 <span className="text-[#4b2c34] text-lg font-semibold">of $16,000 raised</span></h3>
            <div className="w-full h-4 mt-3 bg-[#f8cbc7] rounded-full overflow-hidden shadow-inner">
              <div className="w-[100%] bg-[#dc4e4e] h-full rounded-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Test Mode Notice */}
          <div className="flex items-start gap-3 bg-white border-l-4 border-yellow-400 p-4 rounded-md shadow">
            <span className="text-yellow-500 text-xl font-bold">⚠️</span>
            <p className="text-sm"><strong>Notice:</strong> Test mode is enabled. While in test mode no live donations are processed.</p>
          </div>

          {/* Donation Input */}
          <div className="flex items-center gap-2 bg-[#f8dbc7] rounded-full px-4 py-2 w-fit shadow-inner">
            <span className="text-[#dc4e4e] text-lg font-bold">$</span>
            <input
              type="text"
              defaultValue="25.00"
              className="bg-transparent outline-none text-lg w-20 text-center"
            />
          </div>

          {/* Predefined Amount Buttons */}
          <div className="flex gap-3 flex-wrap">
            {["$25.00", "$50.00", "$100.00", "Custom"].map((amount, i) => (
              <button
                key={i}
                className={`px-6 py-2 rounded-full transition duration-300 shadow-sm text-sm font-medium ${
                  i === 0
                    ? "bg-[#f8cbc7] text-[#dc4e4e]"
                    : "bg-[#f1ddc7] hover:bg-[#e8c5b0]"
                }`}
              >
                {amount}
              </button>
            ))}
          </div>

          {/* Personal Info */}
          <div className="p-6 bg-[#fff9f6] rounded-xl shadow-md w-full max-w-2xl mx-auto">
  {/* Section Title */}
  <h4 className="text-xl font-bold text-[#5f3c4b] mb-4">Personal Info</h4>

  {/* Input Fields */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="First Name"
      className="bg-white border border-gray-300 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-[#dc4e4e]"
    />
    <input
      type="text"
      placeholder="Last Name"
      className="bg-white border border-gray-300 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-[#dc4e4e]"
    />
  </div>

  <input
    type="email"
    placeholder="Email Address"
    className="mt-4 w-full bg-white border border-gray-300 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-[#dc4e4e]"
  />

  {/* Checkbox + Terms */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
    <label className="flex items-center text-[#5f3c4b] text-sm font-medium">
      <input
        type="checkbox"
        className="accent-[#dc4e4e] w-4 h-4 rounded mr-2"
        onChange={() => setIsChecked(!isChecked)}
      />
      I agree that my submitted data is being collected and stored.
    </label>
    <span className="text-sm text-[#5f3c4b] underline cursor-pointer hover:text-[#dc4e4e]">
      Show Terms
    </span>
  </div>

  {/* Submit Button */}
  <div className="mt-6 flex justify-center">
  <button
          disabled={!isChecked}
          onClick={() => navigate("/donate")}
          className={`px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer ${
            isChecked
              ? "bg-red-400 text-black hover:bg-red-400 hover:text-white"
              : "bg-red-400 text-white cursor-not-allowed"
          }`}
        >
          Donate Now
        </button>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Donation;
