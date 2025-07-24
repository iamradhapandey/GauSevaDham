import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Rigister = () => {

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-600 text-white px-4">
      <div className="max-w-4xl w-full text-center">
        <p className="text-sm tracking-widest text-[#f5cfcf] mb-2">JOIN</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Learn To Be Sustainably Happy!</h1>
        <p className="text-sm sm:text-base text-gray-200 mb-8">
          Join the Happiness Program. Experience a calm mind, reduced anxiety, increased energy levels and sustainable happiness everyday!
        </p>

        <form className="flex flex-col gap-6 items-center">
          {/* Inputs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={form.name}
              onChange={handleChange}
              className="bg-gray-500 placeholder-white/70 text-white px-6 py-3 rounded-full w-full sm:w-1/3 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number*"
              value={form.mobile}
              onChange={handleChange}
              className="bg-gray-500 placeholder-white/70 text-white px-6 py-3 rounded-full w-full sm:w-1/3 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={form.email}
              onChange={handleChange}
              className="bg-gray-500 placeholder-white/70 text-white px-6 py-3 rounded-full w-full sm:w-1/3 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-3 text-sm text-white/90 cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="w-4 h-4 accent-red-500 border-2 border-red-400"
            />
            <span>I agree that my submitted data is being collected and stored.</span>
          </label>

          {/* Button */}
          <button
          onClick={()=> navigate('/volunteer')}
            disabled={!isChecked}
            className={`px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer ${
              isChecked
                ? "bg-white/40 text-black hover:bg-red-100"
                : "bg-white/30 text-white cursor-not-allowed"
            }`}
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Rigister
