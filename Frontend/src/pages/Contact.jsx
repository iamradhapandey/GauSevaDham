import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="w-full mt-25 bg-gray-100 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left: Image */}
        <div className="h-96 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1752743090932-48741d2a3e4e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Temple"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Form + Info */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Fill in the form or reach us through the contact details below.
          </p>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 space-y-2 text-gray-700">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-indigo-600" />
              <span>08045681800</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-600" />
              <span>support@devaseva.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-indigo-600" />
              <span>4th floor, T-Hub 2.0, Hyderabad, Telangana - 500081</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl text-gray-600">
            <a href="#"><FaFacebook className="hover:text-blue-600" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaYoutube className="hover:text-red-600" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
