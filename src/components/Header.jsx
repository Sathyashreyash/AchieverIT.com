import React from 'react'
import '../css/header.css'

import logo from '../assets/img/logo-white.png'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='header'>
        <div> <img src={logo} alt="c-logo" /></div>
        <Navbar/>
    </div>
  )
}

export default Header