import React from "react"
import Hero from "../components/Hero"
import Welcome from "../components/Welcome"
import Card from "../components/Card"
import Program from "../components/Program"
import Poster from "../components/Poster"
import Donation from "../components/Donation"
import Rigister from "../components/Rigister"
import Footer from "../components/Footer"

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
