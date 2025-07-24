import React from "react"
import Hero from "../components/Hero"
import Welcome from "../components/welcome"
import Card from "../components/card"
import Program from "../components/Program"
import Poster from "../components/Poster"
import Donation from "../components/Donation"
import Rigister from "../components/Rigister"
import Footer from "../components/footer"

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Card />
      <Program />
      {/* <Poster /> */}
      <Donation />
      <Rigister/>
    </div>
  )
}

export default Home
