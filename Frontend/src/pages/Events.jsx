import React from "react"
import { Fade, Zoom } from "react-awesome-reveal"
import { events } from "../assets/assets" // ✅ fixed path
import { Link } from "react-router-dom"
const Events = () => {
  return (
    <Fade cascade damping={0.1} triggerOnce>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 p-20">
        {events.map((e) => (
          <Zoom triggerOnce key={e.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={e.imageUrl}
                alt={e.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-center text-gray-800">
                  {e.title}
                </h2>
                <p className="text-[#3C1F2F]">
                  <i className="ri-time-line mr-1"></i>
                  {e.date}
                </p>
                <p className="text-[#3C1F2F]">
                  <i className="ri-map-pin-line mr-1"></i>
                  {e.location}
                </p>
                <Link to={`/events/${e.id}`}>
                  <button className="bg-[#3C1F2F] text-white w-full p-4 rounded-lg transition duration-300 hover:bg-[#50253d] cursor-pointer">
                    KNOW MORE
                  </button>
                </Link>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </Fade>
  )
}

export default Events
