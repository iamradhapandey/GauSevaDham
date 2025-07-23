import React from 'react'
import Hero from '../components/Hero'
import Welcome from '../components/welcome'
import Card from '../components/card'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Welcome/>
      <Card/>
    </div>
  )
}

export default Home