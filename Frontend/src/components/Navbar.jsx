import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()

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

  const linkStyle = (path) =>
    location.pathname === path
      ? "text-yellow-400 font-semibold"
      : "hover:text-yellow-400 transition-colors duration-200"

      const LeftLinks = () => (
        <>
          <NavLink to="/" onClick={closeAll} className={linkStyle("/")}>
            Home
          </NavLink>
      
          <div
            className="relative group"
            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
          >
            <button
              onClick={() => isMobile && setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-yellow-400 transition-colors duration-300"
            >
              About <ChevronDown size={16} />
            </button>
      
            <div
              className={`${
                isMobile ? "relative mt-2" : "absolute top-full left-0"
              } bg-[#6e4053] text-white rounded-md shadow-lg transition-all duration-300  min-w-[160px] ${
                dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <NavLink
                to="/about/devi-ji"
                onClick={closeAll}
                className="block px-4 py-2 hover:bg-yellow-400 hover:text-black transition"
              >
                About Devi Ji
              </NavLink>
              <NavLink
                to="/about/trust"
                onClick={closeAll}
                className="block px-4 py-2 hover:bg-yellow-400 hover:text-black transition"
              >
                About Trust
              </NavLink>
              <NavLink
                to="/about/seva"
                onClick={closeAll}
                className="block px-4 py-2 hover:bg-yellow-400 hover:text-black transition"
              >
                About Seva
              </NavLink>
            </div>
          </div>
      
          <NavLink
            to="/events"
            onClick={closeAll}
            className={linkStyle("/events")}
          >
            Events
          </NavLink>
      
          <NavLink
            to="/bhajan"
            onClick={closeAll}
            className={linkStyle("/bhajan")}
          >
            Bhajan
          </NavLink>
        </>
      );
      
  const RightLinks = () => (
  <>
    <NavLink
      to="/gallery"
      onClick={closeAll}
      className={linkStyle("/gallery")}
    >
      Gallery
    </NavLink>

    <NavLink
      to="/blog"
      onClick={closeAll}
      className={linkStyle("/blog")}
    >
      Blog
    </NavLink>

    <NavLink
      to="/contact"
      onClick={closeAll}
      className={linkStyle("/contact")}
    >
      Contact
    </NavLink>

    <NavLink
      to="/donate"
      onClick={closeAll}
      className={linkStyle("/donate")}
    >
      Donate
    </NavLink>
  </>
);


  // Scroll hide/show navbar & scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (currentScrollY / docHeight) * 100
      setScrollProgress(progress)
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      <motion.div
        className="h-1 bg-yellow-400 fixed top-0 left-0 "
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 w-full z-60 bg-[#171725] text-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 lg:px-10">
          <button onClick={handleMobileNav} className="sm:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden sm:flex flex-1 justify-center items-center gap-10">
            <div className="flex gap-6 text-sm font-medium">{LeftLinks()}</div>
            <img src={logo} alt="Logo" className="w-16 h-16 object-contain mx-6" />
            <div className="flex gap-6 text-sm font-medium">{RightLinks()}</div>
          </div>

          <div className="sm:hidden absolute left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
          </div>
        </div>

        {menuOpen && (
          <div className="sm:hidden bg-[#2c1a24] px-5 pb-4 space-y-2">
            <div className="flex flex-col gap-2">{LeftLinks()}</div>
            <div className="flex flex-col gap-2 mt-4 border-t border-yellow-300 pt-4">
              {RightLinks()}
            </div>
          </div>
        )}
      </motion.header>

      {/* Floating Donate & WhatsApp Buttons */}
      <div className="fixed right-4 bottom-4 flex flex-col gap-3 ">
        <a
          href="/donate"
          className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300"
        >
          Donate
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-bold px-4 py-2 rounded-full shadow-md hover:bg-green-400"
        >
          WhatsApp
        </a>
      </div>
    </>
  )
}
