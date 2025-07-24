import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Update path as per your structure
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-300 py-10 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Left Section */}
        <div>
          <img src={logo} alt="WST Logo" className="w-24 mb-4" />
          <p className="text-sm leading-relaxed">
            World Sankirtan Tour Trust is established by Pujya Devishri Chitralekha Ji with four Trustees on 26th May 2010. Head Office: Village Khambi, Teh–Hodal, Distt-Palwal (HR). Branch Office: "Gau Seva Dham", NH2, Bhulwan, Hodal, Palwal (HR).
          </p>
        </div>

        {/* Middle Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-orange-500 mb-4">Quick Link</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/photo" className="hover:text-orange-400">› Photo</Link></li>
            <li><Link to="/about-devshri" className="hover:text-orange-400">› About Devshri</Link></li>
            <li><Link to="/about-mission" className="hover:text-orange-400">› About Mission</Link></li>
            <li><Link to="/about-trust" className="hover:text-orange-400">› About Trust</Link></li>
            <li><Link to="/terms" className="hover:text-orange-400">› Terms</Link></li>
          </ul>
        </div>

        {/* Right Quick Links */}
        <div className="mt-2 md:mt-0">
          <ul className="space-y-2 text-sm pt-12">
            <li><Link to="/gallery" className="hover:text-orange-400">› Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-orange-400">› Blog</Link></li>
            <li><Link to="/events" className="hover:text-orange-400">› Events</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">› Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-orange-400">› Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center mt-10 gap-6 text-orange-500 text-xl">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="YouTube"><FaYoutube /></a>
      </div>
    </footer>
  );
};

export default Footer;
