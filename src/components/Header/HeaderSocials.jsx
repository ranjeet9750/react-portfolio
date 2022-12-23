import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials= () => {
  return(
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/ranjeet-kumar-8075b218a/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/ranjeet9750" target="_blank"><FaGithub/></a>
      <a href="https://leetcode.com/ranjeet9750/" target="_blank"><SiLeetcode/></a>
      
      

    </div>

  )
};
export default HeaderSocials;
