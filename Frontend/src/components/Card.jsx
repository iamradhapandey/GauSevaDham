import React from "react"
import { assets } from "../assets/assets"

export const Card = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFEFE2] flex flex-col items-center justify-center px-4 py-10">
  <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full justify-center items-center">
    {/* Card 1 */}
    <div className="w-full md:w-1/4 bg-white p-6 flex flex-col items-center gap-4 shadow-2xl rounded-lg min-h-[22rem]">
      <img className="w-16" src={assets.card1} alt="Ashram" />
      <h1 className="text-lg font-semibold">Ashram</h1>
      <p className="text-center text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum
        reprehenderit molestiae dicta perferendis? Excepturi
      </p>
    </div>

    {/* Card 2 */}
    <div className="w-full md:w-1/4 bg-white p-6 flex flex-col items-center gap-4 shadow-2xl rounded-lg min-h-[22rem]">
      <img className="w-16" src={assets.card2} alt="Ashram" />
      <h1 className="text-lg font-semibold">Ashram</h1>
      <p className="text-center text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum
        reprehenderit molestiae dicta perferendis? Excepturi
      </p>
    </div>

    {/* Card 3 */}
    <div className="w-full md:w-1/4 bg-white p-6 flex flex-col items-center gap-4 shadow-2xl rounded-lg min-h-[22rem]">
      <img className="w-16" src={assets.card3} alt="Ashram" />
      <h1 className="text-lg font-semibold">Ashram</h1>
      <p className="text-center text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum
        reprehenderit molestiae dicta perferendis? Excepturi
      </p>
    </div>
  </div>
</div>

  )
}

export default Card
