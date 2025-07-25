import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { events } from "../assets/assets";
import { motion } from "framer-motion";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    
    const selected = events.find((e) => e.id === parseInt(id));
    if (selected) {
      setEvent(selected);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="p-10 text-center text-lg">Loading...</div>;
  }

  if (notFound) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl text-red-600 mb-4">Event not found</h2>
        <button
          onClick={() => navigate("/events")}
          className="px-6 py-2 bg-[#3c1f2f] text-white rounded hover:bg-[#50253d]"
        >
          ← Back to Events
        </button>
      </div>
    );
  }

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 md:p-10 text-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerStagger}
    >
      <motion.img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-72 object-cover rounded-lg shadow-md"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-4xl font-bold mt-6 text-[#3c1f2f]"
        variants={fadeIn}
      >
        {event.title}
      </motion.h1>

      <motion.p className="text-gray-600 mt-2" variants={fadeIn}>
        <i className="ri-time-line mr-1" /> {event.date}
      </motion.p>
      <motion.p className="text-gray-600" variants={fadeIn}>
        <i className="ri-map-pin-line mr-1" /> {event.location}
      </motion.p>

      {/* About Section */}
      <motion.section className="mt-6" variants={fadeIn}>
        <h2 className="text-2xl font-semibold text-[#3c1f2f] mb-2">🪔 About the Event</h2>
        <p className="text-lg leading-relaxed">
          Welcome to the spiritual celebration of <strong>{event.title}</strong>. This event is a
          sacred gathering to honor the teachings and divine presence of our beloved saints and
          sages. Immerse yourself in the divine vibrations of bhajans, kathas, and spiritual
          discourses that awaken the soul.
        </p>
      </motion.section>

      {/* Schedule */}
      <motion.section className="mt-6" variants={fadeIn}>
        <h2 className="text-2xl font-semibold text-[#3c1f2f] mb-2">📅 Event Schedule</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
          <li>Morning Aarti and Bhajan – 7:00 AM</li>
          <li>Katha by Devi Ji – 9:00 AM to 12:00 PM</li>
          <li>Langar (Prasadam) – 12:30 PM</li>
          <li>Afternoon Satsang – 2:00 PM</li>
          <li>Evening Bhajan Sandhya – 6:00 PM</li>
        </ul>
      </motion.section>

      {/* Highlights */}
      <motion.section className="mt-6" variants={fadeIn}>
        <h2 className="text-2xl font-semibold text-[#3c1f2f] mb-2">🌟 Highlights</h2>
        <p className="text-lg leading-relaxed">
          Attendees will experience divine bliss through soulful music, spiritual discourses, and a
          deeply devotional environment. Special sessions by Devi Chitralekha Ji will offer insight
          into Bhakti Yoga, Shrimad Bhagwat Katha, and the path to inner peace. Devotees from across
          the country are expected to attend.
        </p>
      </motion.section>

      {/* Contact */}
      <motion.section className="mt-6" variants={fadeIn}>
        <h2 className="text-2xl font-semibold text-[#3c1f2f] mb-2">📞 Contact & Registration</h2>
        <p className="text-lg leading-relaxed">
          For queries or volunteering, contact: <br />
          <strong>📱 +91 9876543210</strong> <br />
          <strong>📧 gau-seva-dham@example.com</strong>
        </p>
        <a
          href="https://forms.gle/sampleeventform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          📝 Register for the Event
        </a>
      </motion.section>

      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/events")}
        className="mt-10 px-6 py-3 bg-[#3c1f2f] text-white rounded hover:bg-[#50253d] cursor-pointer"
        variants={fadeIn}
      >
        ← Back to Events
      </motion.button>
    </motion.div>
  );
};

export default EventDetail;
