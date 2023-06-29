import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, } from 'react-icons/fa';

const Footer = () => {
  const author = 'Senzo Masango';

  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto px-8 text-center">
        <p className="pt-2 flex flex-row justify-center items-center">

          <a href="https://www.linkedin.com/in/zwelihle-masango-2750081b4/" className="mx-4"><FaLinkedin size={25} /></a>
          <a href="https://github.com/Zwelihle-M" className="mx-4 "><FaGithub size={25}/></a>
          <a href="https://www.youtube.com/" className="mx-4 "><FaYoutube size={30} /></a>
        </p>
      <p className="mt-4">{`Copyright ${new Date().getFullYear()} ${author}`}</p>
      </div>
    </div>
  );
};

export default Footer;