import React from "react"
import Hero from "../components/Hero"

import Card from "../components/Card"
import Program from "../components/Program"

import Donation from "../components/Donation"
import Rigister from "../components/Rigister"


const Home = () => {
  return (
    <div className="mt-15">
      <Hero />
      {/* <Welcome /> */}
      <Card />
      <Program />
      {/* <Poster /> */}
      <Donation />
      <Rigister/>
    </div>
  )
}

export default Home
