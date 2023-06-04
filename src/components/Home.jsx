import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'
// import web from '../images/';

const Home = () => {
  return (
    <>
     <Common name='Grow your tech skills with' imgsrc={'home img'} visit="/service" btname="Get Started"/>
    </>
  )
}

export default Home