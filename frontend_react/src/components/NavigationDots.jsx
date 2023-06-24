/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

// Hight level component

import React from 'react';

// Navigate through Sections
const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;