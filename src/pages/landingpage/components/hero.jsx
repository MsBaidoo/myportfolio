import { FaHome, FaUser, FaFileAlt, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import eve from "../../../assets/images/eve.jpeg";
import { GrGithub } from 'react-icons/gr';
import React from 'react';


const Hero = () => {


  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">

      <div className="flex lg:flex-col items-center justify-around lg:justify-center space-y-0 lg:space-y-6 p-4 bg-white shadow-lg lg:w-24 w-full">
        <SidebarIcon icon={<FaHome size="24" />} />
        <SidebarIcon icon={<FaUser size="24" />} />
        <SidebarIcon icon={<FaFileAlt size="24" />} />
        <SidebarIcon icon={<FaEnvelope size="24" />} />
      </div>


      <div className="flex-grow flex flex-col items-center justify-center relative lg:pr-96 p-6 lg:p-0">
        <div className="text-center z-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Evelyn Yaa Baidoo
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 mb-6">
            Junior Web Developer || Customer Service - Digital Channel
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/MsBaidoo/mobile-wallet-fraud-database" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={<GrGithub />} />
            </a>
            <a href="https://web.facebook.com/evelyn.baidoo.12" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={<FaFacebookF />} />
            </a>
            <a href="https://www.instagram.com/_baidoo_?igsh=djQ4MDNyZ3R6aXVu&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={<FaInstagram />} />
            </a>
            <a href="https://www.linkedin.com/in/evelynbaidoo/" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={<FaLinkedinIn />} />
            </a>
          </div>

        </div>

        <div className="absolute right-5 bottom-5 lg:right-10 lg:bottom-10 opacity-60 lg:opacity-60">
          <img
            src={eve}
            alt="Profile"
            className="w-48 h-auto lg:w-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, onClick }) => (
  <div
    className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer"

  >
    {icon}
  </div>
);

const SocialIcon = ({ icon }) => (
  <div className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
    {icon}
  </div>
);

export default Hero;
