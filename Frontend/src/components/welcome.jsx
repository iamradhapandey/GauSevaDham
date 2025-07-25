import React from "react"

export const Welcome = () => {
  return (
    <div className="flex flex-row justify-between py-20 space-y-6 bg-white">
      {/** Left Side */}
      <div className="w-[40vw] h-[50vh] flex flex-col justify-center px-6">
        <p className="text-lg  text-pink-500 mb-2">Welcome</p>
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold leading-tight text-black">
          Experience Yoga at Our Vihara Ashram Studio
        </h1>
      </div>

      {/**right side */}
      <div className="w-[40vw] max-w-3xl mx-auto px-4 py-10 text-justify space-y-10 text-sm text-gray-700 leading-relaxed sm:text-lg">
  <p>
    We are happy to see newcomers at any of our yoga and meditation classes. Join the community to participate in the center’s life and the discussion club.
  </p>
  
  <p>
    Stay at the Ashram and immerse yourself in our wonderful yogic lifestyle program with other like-minded members.
    </p>
</div>

    </div>
  )
}
export default Welcome
