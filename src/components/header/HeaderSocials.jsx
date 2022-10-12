import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaHackerrank} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com"><BsLinkedin/></a>
      <a href="https://github"><FaGithub/></a>
      <a href="https://hackerrank.com"><FaHackerrank/></a>
    </div>
  );
};

export default HeaderSocials;
