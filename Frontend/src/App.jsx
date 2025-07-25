import { Routes, Route } from "react-router-dom"
import "./App.css"
import AboutDeviJi from "./pages/AboutDeviJi"
import AboutSeva from "./pages/AboutSeva"
import AboutTrust from "./pages/AboutTrust"
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
import Footer from "./components/Footer"

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
            <Route  path="/about/devi-ji" element={<AboutDeviJi />} />
            <Route path="/about/seva" element={<AboutSeva />} />
            <Route path="/about/trust" element={<AboutTrust />} />
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
