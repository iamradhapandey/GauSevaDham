import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const PrivacyPolicy = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <img
          src="https://www.jkpliterature.org.in/cdn/shop/files/bhagwan-naam-mahatmya-english-1.jpg?v=1713532447"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </section>

      {/* Introduction */}
      <motion.div
        className="max-w-4xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-pink-600">
          Privacy Policy
        </h2>
        <p className="text-lg leading-relaxed text-center text-gray-700">
          At <span className="font-semibold">Gau Seva Dham</span>, your privacy is sacred. This document outlines how we collect,
          use, and protect the information you share while engaging with our platform.
        </p>
      </motion.div>

      {/* Policy Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-16 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {[
          {
            title: "1. Data Collection",
            text: "We collect minimal data such as name, email, and preferences when you contact us or donate.",
            color: "border-pink-500",
          },
          {
            title: "2. Use of Information",
            text: "We use your data to improve your experience, send updates, and inform you of spiritual events.",
            color: "border-yellow-500",
          },
          {
            title: "3. No Third-Party Sharing",
            text: "Your sacred information is never shared with external parties unless legally required.",
            color: "border-green-600",
          },
          {
            title: "4. Data Security",
            text: "We follow spiritual values and modern security standards to protect your data.",
            color: "border-blue-600",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`p-6 bg-white shadow-xl rounded-2xl border-l-4 ${item.color}`}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote Section with Bhagavad Gita Image */}
      <section className="relative py-12 px-6 bg-yellow-50">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/5/DQ/LD/AG/140666900/servdharm-premium-bhagavad-gita-with-screen-printed-lord-krishna.jpg"
            alt="Bhagavad Gita"
            className="mx-auto mb-6 rounded-xl shadow-lg w-72 sm:w-96 object-cover object-center"
          />
          <p className="italic text-gray-700 text-lg">
            “One who sees inaction in action, and action in inaction, is intelligent among men.” <br />
            <span className="text-sm text-pink-500">– Bhagavad Gita 4.18</span>
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <motion.div
        className="bg-pink-50 py-10 px-6 text-center text-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="mb-4">
          📧 Contact us at:{" "}
          <a
            href="mailto:privacy@gausevadham.org"
            className="text-pink-700 font-medium underline"
          >
            privacy@gausevadham.org
          </a>
        </p>
        <p>
          By using our site, you agree to this policy. This policy may be revised as needed.
        </p>
      </motion.div>

      {/* Language Switch */}
      <div className="text-center py-4 text-sm text-gray-500">
        🌐 Hindi version coming soon – <button className="underline hover:text-pink-600">Switch to हिंदी</button>
      </div>

      {/* Footer Note */}
      <div className="text-center py-6 text-xs text-gray-400">
        [Note: This privacy policy is for informational purposes. For legal validity, consult a privacy law expert.]
      </div>
    </div>
  );
};

export default PrivacyPolicy;
