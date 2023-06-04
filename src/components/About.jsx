import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'
// import web from '../images/';

const About = () => {
  return (
    <>
     <Common name='Welcome to About page' imgsrc={'about img'} visit="/contact" btname="Contact now"/>
    </>
  )
}

export default About