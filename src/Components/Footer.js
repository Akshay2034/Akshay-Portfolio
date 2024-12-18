import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by AKSHAY VINOD M</h4>
      <h4>Copyright &copy; 2024 AK</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Akshay2034" target='_blank'><FaGithub/></a>
        <a href="http://www.linkedin.com/in/akshay-vinod-0846b320b" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:makshayvinod@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/AkshayVinodM/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer