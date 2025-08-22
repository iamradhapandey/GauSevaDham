
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/logo.png'; // Update path as per your structure

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      dropdown: [
        { name: "About Devi", path: "/about/devi-ji" },
        { name: "About Trust", path: "/about/trust" },
        { name: "About Seva", path: "/about/seva" },
      ],
    },
    { name: "Events", path: "/events" },
    { name: "Bhajans", path: "/bhajan" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
    // { name: "Rules", path: "/Rules" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      {/* ✅ Topbar */}
      <div className="w-full bg-pink-600 text-white text-sm py-2 px-6 flex justify-between items-center">
        <div>
          📞 +91-9876543210 | ✉️ info@gausevadham.org
        </div>

        <div className="flex items-center gap-4">
          {/* Social Media */}
          <div className="flex gap-3 text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href="https://www.youtube.com/@Chitralekhaji"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-gray-100 transition"
            >
              YouTube
            </a>
            <NavLink
              to="/contact"
              className="bg-white text-pink-600 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-gray-100 transition"
            >
              Contact
            </NavLink>
            <NavLink
              to="/volunteer"
              className="bg-yellow-400 text-pink-800 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-yellow-300 transition"
            >
              Join Us
            </NavLink>
          </div>
        </div>
      </div>

      {/* ✅ Main Navbar */}
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-3">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-purple-700">
  {/* Logo Image */}
  <img
    src={logo} alt="WST Logo"
    className="w-10 h-10 object-contain" // width & height + maintain aspect ratio
  />
  {/* Logo Text */}
 <h1 className="text-2xl text-black font-semibold"> Gau Seva Dham</h1>
</NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button className="flex items-center gap-1 text-gray-800 hover:text-purple-700">
                    {link.name} <ChevronDown size={16} />
                  </button>
                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-44"
                      >
                        {link.dropdown.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-gray-800 hover:text-purple-700 ${
                      isActive ? "font-semibold text-purple-700" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="md:hidden bg-white shadow-lg"
            >
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="border-b">
                    <button
                      onClick={() => setAboutOpen(!aboutOpen)}
                      className="w-full flex justify-between px-6 py-3 text-left text-gray-800 hover:text-purple-700"
                    >
                      {link.name} <ChevronDown size={16} />
                    </button>
                    {aboutOpen && (
                      <div className="pl-8">
                        {link.dropdown.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="block px-6 py-3 text-gray-800 hover:bg-purple-100 hover:text-purple-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
