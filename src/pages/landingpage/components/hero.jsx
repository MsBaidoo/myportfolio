import {FaHome, FaUser,FaFileAlt,  FaEnvelope,FaTwitter, FaFacebookF, FaInstagram,FaLinkedinIn,} from 'react-icons/fa';
import eve from "../../../assets/images/eve.jpeg";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center space-y-6 p-4 bg-white shadow-lg">
        <SidebarIcon icon={<FaHome size="24" />} onClick={() => navigate("home")} />
        <SidebarIcon icon={<FaUser size="24" />} onClick={() => navigate("about")} />
        <SidebarIcon icon={<FaFileAlt size="24" />} onClick={() => navigate("resume")} />
        <SidebarIcon icon={<FaEnvelope size="24" />} onClick={() => navigate("contact")} />
      </div>

      <div className="flex-grow flex items-center justify-center relative pr-96">
        <div className="text-center z-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Evelyn Yaa Baidoo
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Junior Web Developer || Customer Service - Digital Channel
          </p>
          <div className="flex justify-center space-x-4">
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaLinkedinIn />} />
          </div>
        </div>

        <div className="absolute right-10 bottom-10">
          <img
            src={eve}
            alt="Profile"
            className="w-96 h-auto object-cover opacity-60"
          />
        </div>
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, onClick }) => (
  <div
    className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer"
    onClick={onClick}
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
