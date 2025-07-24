import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import { Menu, X, ChevronDown } from "lucide-react"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleMobileNav = () => {
    setMenuOpen(!menuOpen)
    setDropdownOpen(false)
  }

  const closeAll = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  const LeftLinks = () => (
    <>
      <NavLink to="/" onClick={closeAll} className="hover:text-pink-300">
        Home
      </NavLink>

      {/* Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => !isMobile && setDropdownOpen(true)}
        onMouseLeave={() => !isMobile && setDropdownOpen(false)}
      >
        <button
          onClick={() => isMobile && setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1 hover:text-pink-300"
        >
          About <ChevronDown size={16} />
        </button>

        {/* Dropdown Panel */}
        <div
          className={`${
            isMobile ? "relative mt-2" : "absolute top-full left-0"
          } bg-white text-black rounded-md shadow-md transition-all duration-300 z-50 min-w-[135px] ${
            dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <NavLink
            to="/about/devi-ji"
            onClick={closeAll}
            className="block px-4 py-2 hover:bg-pink-100"
          >
            About Devi Ji
          </NavLink>
          <NavLink
            to="/about/trust"
            onClick={closeAll}
            className="block px-4 py-2 hover:bg-pink-100"
          >
            About Trust
          </NavLink>
          <NavLink
            to="/about/seva"
            onClick={closeAll}
            className="block px-4 py-2 hover:bg-pink-100"
          >
            About Seva
          </NavLink>
        </div>
      </div>

      <NavLink to="/events" onClick={closeAll} className="hover:text-pink-300">
        Events
      </NavLink>
      <NavLink to="/bhajan" onClick={closeAll} className="hover:text-pink-300">
        Bhajan
      </NavLink>
    </>
  )

  const RightLinks = () => (
    <>
      <NavLink to="/gallery" onClick={closeAll} className="hover:text-pink-300">
        Gallery
      </NavLink>
      <NavLink to="/blog" onClick={closeAll} className="hover:text-pink-300">
        Blog
      </NavLink>
      <NavLink to="/contact" onClick={closeAll} className="hover:text-pink-300">
        Contact
      </NavLink>
      <NavLink to="/donate" onClick={closeAll} className="hover:text-pink-300">
        Donate
      </NavLink>
    </>
  )

  return (
    <header className="bg-[#3c1f2f] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4 relative">
        {/* Mobile menu icon */}
        <button onClick={handleMobileNav} className="sm:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop layout: Left | Logo | Right */}
        <div className="hidden sm:flex flex-1 justify-center items-center gap-10">
          <div className="flex gap-6">{LeftLinks()}</div>
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 object-contain mx-6"
          />
          <div className="flex gap-6">{RightLinks()}</div>
        </div>

        {/* Logo on mobile */}
        <div className="sm:hidden absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-[#3c1f2f] px-4 pb-4 space-y-2">
          <div className="flex flex-col gap-2">{LeftLinks()}</div>
          <div className="flex flex-col gap-2 mt-4 border-t border-pink-300 pt-4">
            {RightLinks()}
          </div>
        </div>
      )}
    </header>
  )
}
