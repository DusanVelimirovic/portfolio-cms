// Hight level component
import React from 'react';
//import { Link } from "react-router-dom";

// Import Icons
import { BsLinkedin, BsFillWebcamFill} from 'react-icons/bs';


const SocialMedia = () => (

    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/dusan-velimirovic/" target="_blank" rel="noreferrer">
          <BsLinkedin/>
        </a>
      </div>
      <div>
        <a href="https://dusanvelimirovic.com/" target="_blank" rel="noreferrer">
          <BsFillWebcamFill/>
        </a>
      </div>
     </div>
  

);

export default SocialMedia;