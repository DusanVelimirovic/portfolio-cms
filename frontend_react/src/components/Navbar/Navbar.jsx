import React, { useState } from 'react';
import "./Navbar.scss";
import { images } from "../../constants";

// Import libraries for Hamburger Menu
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  // State block - keep track of all changes on the page
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <img src={images.logo} alt="logo"/>
        </div>
        {/* Navbar Menu for Desktop and Tablet devices */ }
        <ul className='app__navbar-links'>
          {['home', 'about', 'contact', 'work','skills', 'testimonials'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        {/* Hamburger Menu for mobile devices */ }
        <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>

  )
}

export default Navbar