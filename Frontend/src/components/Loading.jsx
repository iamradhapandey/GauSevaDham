import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const logoVariants = {
  hidden: { scale: 0.95, opacity: 0, y: -10 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 1, ease: "easeOut" },
  },
};

const quoteVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.8,
    transition: { delay: 0.8, duration: 1.2, ease: "easeIn" },
  },
};

const LoadingScreen = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-100 to-yellow-50 text-center px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Logo with subtle float */}
      <motion.div
        variants={logoVariants}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          className="w-36 h-36 md:w-44 md:h-44 object-contain mx-auto drop-shadow-xl"
        />
      </motion.div>

      {/* Welcome Text */}
      <motion.h1
        className="text-4xl md:text-5xl font-light mt-6 text-yellow-800"
        variants={textVariants}
      >
        Welcome to WST Trust
      </motion.h1>

      <motion.p
        className="mt-3 text-lg md:text-xl text-yellow-700 max-w-2xl"
        variants={textVariants}
      >
        Spreading love, compassion, and positivity through divine wisdom & community service.
      </motion.p>

      {/* Optional spiritual quote / shloka */}
      <motion.p
        className="mt-6 italic text-sm md:text-base text-amber-600 max-w-xl"
        variants={quoteVariants}
      >
        “सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः।” <br />
        *May all beings be happy and free from suffering.*
      </motion.p>

      {/* Spinner */}
      <motion.div
        className="mt-10 w-10 h-10 border-[3px] border-yellow-600 border-t-transparent rounded-full animate-spin"
        aria-label="Loading Spinner"
      />
    </motion.div>
  );
};

export default LoadingScreen;
