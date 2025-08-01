import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    setTimeout(() => {
      if (formData.phone.length !== 10) {
        setError("Phone number must be 10 digits.");
        setLoading(false);
        return;
      }
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.iskconbhiwandi.org/images/page-header/02.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto bg-white bg-opacity-95 shadow-lg rounded-lg p-8"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-orange-600 mb-4"
          variants={itemVariants}
        >
          Join as a Volunteer
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-8"
          variants={itemVariants}
        >
          Become part of a noble cause. Help us in different areas and bring a
          change!
        </motion.p>

        {submitted ? (
          <motion.div
            className="text-center text-green-600 text-lg font-medium"
            variants={itemVariants}
          >
            Thank you for registering as a volunteer! 💖
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-3 rounded-md w-full"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border p-3 rounded-md w-full"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border p-3 rounded-md w-full"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Select Your Area of Volunteering
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Cow Seva (गौ सेवा)", value: "cow", icon: "🐄" },
                  { label: "Cleaning / Maintenance", value: "cleaning", icon: "🧹" },
                  { label: "Medical Help", value: "medical", icon: "🩺" },
                  { label: "Food Distribution", value: "food", icon: "🍲" },
                  { label: "Event Help", value: "event", icon: "🎉" },
                  { label: "Media / Photography", value: "media", icon: "📸" },
                ].map((item) => (
                  <motion.label
                    key={item.value}
                    className={`border rounded-xl px-4 py-3 cursor-pointer flex items-center gap-3 transition hover:shadow-md ${
                      formData.category === item.value
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-300"
                    }`}
                    variants={itemVariants}
                  >
                    <input
                      type="radio"
                      name="category"
                      value={item.value}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            <motion.textarea
              name="message"
              placeholder="Any message or reason to join (optional)"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="border p-3 rounded-md w-full"
              variants={itemVariants}
            />

            {error && (
              <motion.p className="text-red-500 text-sm" variants={itemVariants}>
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-md w-full"
              variants={itemVariants}
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
}