import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const leftLinks = [
    { to: "/", label: "HOME", exact: true },
    { to: "/about", label: "ABOUT" },
    { to: "/events", label: "EVENTS" },
    { to: "/bhajan", label: "BHAJAN" },
  ];

  const rightLinks = [
    { to: "/gallery", label: "GALLERY" },
    { to: "/blog", label: "BLOG" },
    { to: "/contact", label: "CONTACT" },
    { to: "/donate", label: "DONATE" },
  ];

  const renderLinks = (links) =>
    links.map(({ to, label, exact }) => (
      <NavLink key={to} to={to} end={exact} className="group">
        {({ isActive }) => (
          <div className="flex flex-col items-center transition-transform duration-200 group-hover:scale-105">
            <p
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-white font-semibold"
                  : "text-pink-500 group-hover:text-white"
              }`}
            >
              {label}
            </p>
            <span
              className={`h-[2px] w-2/4 bg-white transition-all duration-300 rounded-full ${
                isActive
                  ? "opacity-100 scale-x-100"
                  : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
              }`}
            />
          </div>
        )}
      </NavLink>
    ));

  return (
    <div className="w-full bg-[#48263D] text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Desktop Navbar */}
        <div className="hidden sm:flex items-center justify-center gap-10">
          {/* Left Links */}
          <ul className="flex gap-6 text-sm font-medium">{renderLinks(leftLinks)}</ul>

          {/* Center Logo */}
          <div
            className="text-xl font-bold cursor-pointer px-4"
            onClick={() => navigate("/")}
          >
            LOGO
          </div>

          {/* Right Links */}
          <ul className="flex gap-6 text-sm font-medium">{renderLinks(rightLinks)}</ul>
        </div>

        {/* Mobile Navbar */}
        <div className="sm:hidden flex justify-between items-center">
          <div
            className="text-xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            LOGO
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="sm:hidden mt-4">
            <ul className="flex flex-col gap-3 text-sm font-medium">
              {[...leftLinks, ...rightLinks].map(({ to, label, exact }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={exact}
                  onClick={() => setIsOpen(false)}
                  className="group"
                >
                  {({ isActive }) => (
                    <div className="flex flex-col transition-transform duration-200 group-hover:scale-105">
                      <p
                        className={`transition-colors duration-300 ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-pink-500 group-hover:text-white"
                        }`}
                      >
                        {label}
                      </p>
                      <span
                        className={`h-[2px] w-1/2 bg-white transition-all duration-300 rounded-full ${
                          isActive
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                        }`}
                      />
                    </div>
                  )}
                </NavLink>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
