import './Navbar.css'
import React from 'react'
import Logo from '../images/brand.png'


const Navbar = () => {
  return (
    <nav className='body'>
        <div className='navbar-container'>
            <a href='/'>
                <img className='logo' src={Logo} alt="Logo">
                </img>
            </a>
            <a href='/' className='toggle-button'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div className='navbar-links'>
                <ul>
                    <li><a href='/'>75TH ANNIVERSARY</a></li>
                    <li><a href='/'>NEWSROOM</a></li>
                    <li><a href='/'>BIOGRAPHIES</a></li>
                    <li><a href='/'>ABOUT US</a></li>
                    <li><a href='/'>AF SENIOR LEADERS</a></li>
                    <li><a href='/'>COVID-19</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar