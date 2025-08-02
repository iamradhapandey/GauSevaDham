import React, { useState } from "react";
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

const Terms = () => {
  const [isHindi, setIsHindi] = useState(false);

  const toggleLanguage = () => setIsHindi(!isHindi);

  const termsContent = [
    {
      title: isHindi ? "1. सम्मान के साथ उपयोग करें" : "1. Use with Respect",
      text: isHindi
        ? "यह वेबसाइट एक आध्यात्मिक मंच है। कृपया इसका उपयोग सम्मानपूर्वक करें, हमारी मूल्यों की गरिमा को ध्यान में रखते हुए।"
        : "This website is a spiritual platform. Please use it respectfully, keeping in mind the dignity of our values.",
      color: "pink-500",
    },
    {
      title: isHindi ? "2. सामग्री की सुरक्षा" : "2. Content Protection",
      text: isHindi
        ? "सभी वीडियो, चित्र और ग्रंथ गौ सेवा धाम के हैं। कृपया बिना अनुमति के पुनः उपयोग या परिवर्तन न करें।"
        : "All videos, images, and texts belong to Gau Seva Dham. Do not reuse or alter without written permission.",
      color: "yellow-500",
    },
    {
      title: isHindi ? "3. अन्य प्लेटफॉर्म्स के लिंक" : "3. Links to Other Platforms",
      text: isHindi
        ? "हम YouTube या अन्य सत्संग से संबंधित साइट्स के लिंक साझा कर सकते हैं। उनकी सामग्री के लिए हम ज़िम्मेदार नहीं हैं।"
        : "We may share links to YouTube or other satsang-related sites. We’re not responsible for their content.",
      color: "green-600",
    },
    {
      title: isHindi ? "4. सेवा व्यावसायिक नहीं है" : "4. Seva is Non-Commercial",
      text: isHindi
        ? "यह साइट व्यावसायिक उद्देश्यों के लिए नहीं है। सभी दान और सामग्री केवल सेवा और धर्म के लिए प्रयुक्त होते हैं।"
        : "This site is not for commercial purposes. All donations and content are used purely for seva and dharma.",
      color: "blue-600",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center bg-black overflow-hidden">
        <img
          src="https://www.worldsankirtan.org/slider/0006.jpg"
          alt="Devi Chitralekha Ji"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto text-white"
        >
          <div className="text-5xl md:text-6xl font-extrabold tracking-wide mb-4">
            🕉️ {isHindi ? "सेवा एवं भक्ति की शर्तें" : "Terms of Seva & Bhakti"}
          </div>
          <p className="text-lg md:text-xl italic text-gray-200 leading-relaxed">
            “Serve with love, speak with truth, and spread the divine teachings with purity.”<br />
            <span className="block mt-2 font-medium text-pink-300">
              – Devi Chitralekha Ji
            </span>
          </p>
        </motion.div>
      </section>

      {/* Language Toggle */}
      <div className="text-center py-4">
        <button
          onClick={toggleLanguage}
          className="bg-pink-600 text-white py-2 px-4 rounded-full shadow hover:bg-pink-700 transition"
        >
          {isHindi ? "Translate to English" : "हिंदी में पढ़ें"}
        </button>
      </div>

      {/* Introduction */}
      <motion.div
        className="max-w-4xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="text-lg leading-relaxed mb-6">
          {isHindi ? (
            <>
              <span className="font-semibold">गौ सेवा धाम</span> में आपका स्वागत है – यह एक पावन स्थल है जो
              <span className="font-semibold text-pink-700"> देवी चित्रलेखा जी</span> की शिक्षाओं को समर्पित है। इस वेबसाइट का उपयोग करके, आप हमारी <span className="italic">सेवा</span>, <span className="italic">सत्य</span>, और <span className="italic">भक्ति</span> की भावना को स्वीकार करते हैं।
            </>
          ) : (
            <>
              Welcome to <span className="font-semibold">Gau Seva Dham</span> – a sacred space dedicated to the teachings of
              <span className="font-semibold text-pink-700"> Devi Chitralekha Ji</span>. By accessing this website, you accept
              our values rooted in <span className="italic">seva</span>, <span className="italic">satya</span>, and <span className="italic">bhakti</span>.
            </>
          )}
        </p>
      </motion.div>

      {/* Terms */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-12 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {termsContent.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`p-6 bg-white shadow-lg rounded-2xl border-l-4 border-${item.color}`}
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="max-w-4xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <h2 className="text-2xl font-bold mb-6 text-pink-600">🙏 {isHindi ? "सामान्य प्रश्न" : "FAQs (Frequently Asked Questions)"}</h2>
        {(isHindi
          ? [
              "क्या मैं इस वेबसाइट की सामग्री साझा कर सकता हूँ?",
              "मैं स्वयंसेवक कैसे बन सकता हूँ या दान कैसे कर सकता हूँ?",
              "क्या ऑनलाइन कार्यक्रम या लाइव कीर्तन उपलब्ध हैं?",
            ]
          : [
              "Can I share content from this website?",
              "How can I volunteer or donate?",
              "Are there online events or live kirtans?",
            ]).map((q, i) => (
          <motion.div key={i} variants={fadeInUp} className="mb-4">
            <h3 className="font-semibold text-lg">Q{i + 1}: {q}</h3>
            <p className="text-gray-700">
              {isHindi
                ? "अधिक जानकारी के लिए कृपया हमारी टीम से संपर्क करें या संपर्क पृष्ठ देखें।"
                : "Please reach out to our team or visit our contact page for more information."}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Disclaimer */}
      <motion.div
        className="bg-pink-50 py-10 px-6 text-center text-gray-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="mb-4">
          {isHindi
            ? "जैसे-जैसे हमारी सेवा आगे बढ़ेगी, ये शर्तें अद्यतन हो सकती हैं। इस साइट का उपयोग करके, आप इन दिव्य दिशानिर्देशों को स्वीकार करते हैं।"
            : "These terms may be updated as our seva grows. By using this site, you accept these divine guidelines."}
        </p>
        <p>
          {isHindi ? "संपर्क करें:" : "For questions, reach out at: "}
          <a
            href="mailto:contact@gausevadham.org"
            className="text-pink-700 font-medium underline"
          >
            contact@gausevadham.org
          </a>
        </p>
      </motion.div>

      {/* Multilingual Toggle Placeholder */}
      <div className="text-center py-4 text-sm text-gray-500">
        🌐 {isHindi ? "आप हिंदी में देख रहे हैं" : "You are viewing in English"}
      </div>

      {/* SEO & CMS Note */}
      <div className="text-center py-6 text-xs text-gray-400">
        [Note: SEO metadata and CMS integration setup to be added in your layout or backend configuration.]
      </div>
    </div>
  );
};

export default Terms;
