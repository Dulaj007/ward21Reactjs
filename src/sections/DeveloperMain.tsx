import React from 'react';
import facebookLogo from '../assets/Icons/facebook.svg';
import LinkedLogo from '../assets/Icons/linkedin.svg';
import InstaLogo from '../assets/Icons/instagram.svg';
import ProfilePhoto from '../assets/images/profileimg.jpg';
import { DEV_INFO } from "../constants/dev";

import { Fade } from 'react-awesome-reveal';

const DeveloperMain: React.FC = () => {
  // Fetch developer data with ID = 1
  const developer = DEV_INFO.find(dev => dev.id === 1);

  if (!developer) {
    return <p className="text-center text-red-500">Developer not found</p>;
  }

  return (
    <div className='bg-white dark:bg-black py-10'>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        {/* Profile Section */}
        <div className="flex-shrink-0">
        <Fade direction="down" duration={1000}>
          <div className="relative">
            <img 
              src={ProfilePhoto} 
              alt="Profile" 
              className="w-40 h-40 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600"
            />
            {/* Social Media Links */}
            <div className="absolute -bottom-2 -right-5 bg-black/40 border border-white/20 backdrop-blur-lg  bg-opacity-60 p-2 pl-3 rounded-full">
              <div className="flex space-x-2">
                <a href={developer.Insta} target="_blank" rel="noopener noreferrer">
                  <img src={InstaLogo} alt="Instagram" className="w-8 h-8 text-white duration-200 transition-transform transform hover:scale-110" />
                </a>
                <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={LinkedLogo} alt="LinkedIn" className="w-9 h-8 text-white duration-200 transition-transform transform hover:scale-110" />
                </a>
                <a href={developer.facebook} target="_blank" rel="noopener noreferrer">
                  <img src={facebookLogo} alt="Facebook" className="w-8 h-8 text-white duration-200 transition-transform transform hover:scale-110" />
                </a>
              </div>
            </div>
          </div></Fade>
        </div>
        
        {/* Developer Info Section */}
        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
        <Fade direction="down" duration={1000}>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">{developer.Name}</h2>
        </Fade>
        <Fade direction="down" duration={1000}>
          <p className="text-xl text-gray-600 dark:text-gray-400">{developer.Position}</p>
        </Fade>
        <Fade direction="down" duration={1000}>
          <p className="mt-4 text-gray-700 dark:text-gray-300 px-6">{developer.Dis[0]}</p>
          </Fade>
          <Fade direction="down" duration={1000}>
          <p className="mt-4 text-gray-700 dark:text-gray-300 px-6 ">{developer.Dis[1]}</p>
          </Fade>
          <Fade direction="down" duration={1000}>
          <p className="mt-4 text-gray-700 dark:text-gray-300 px-6">{developer.Dis[2]}</p>
          </Fade>

        
        </div>
        
      </div>  
    </div>
    
  );
};

export default DeveloperMain;
