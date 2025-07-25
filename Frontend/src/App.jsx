import { Routes, Route } from "react-router-dom"
import "./App.css"
import About_DeviJi from "./pages/About_DeviJi"
import About_Seva from "./pages/About_Seva"
import About_Trust from "./pages/About_trust"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Donate from "./pages/Donate"
import Events from "./pages/Events"
import EventDetail from "./pages/EventDetail"
import Gallery from "./pages/Gallery"
import Blog from "./pages/Blog"
import BlogDetail from "./pages/BlogDetail"
import Volunteer from "./pages/Volunteer"
import PrivacyPolicies from "./pages/PrivacyPolicies"
import TermsConditions from "./pages/TermsConditions"
import NotFound from "./pages/NotFound"
import Video from "./pages/Video"
import Bhajan from "./pages/Bhajan"
import { ToastContainer } from "react-toastify"
import { Navbar } from "./components/Navbar"
import Footer from "./components/footer"

import LoadingScreen from "./components/Loading"
import { useEffect, useState } from "react"
import ScrollToTop from "./components/ScrollToTop"

export const App = () => {
  
   const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }



  
  return (


    <div>
      <ToastContainer />
<ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow  overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route  path="/about/devi-ji" element={<About_DeviJi />} />
            <Route path="/about/seva" element={<About_Seva />} />
            <Route path="/about/trust" element={<About_Trust />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/privacypolicies" element={<PrivacyPolicies />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/video" element={<Video />} />

            <Route path="/bhajan" element={<Bhajan />} />
            <Route path="/bhajan/:id" element={<Bhajan />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
