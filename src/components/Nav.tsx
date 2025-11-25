import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LogoRed from '../assets/images/ward21logoRed2.png';
import LogoWhite from '../assets/images/ward21logoWhite1.png';
import DiscordWhite from '../assets/icons/DarkMode/discord-white.svg';
import DiscordDark from '../assets/icons/WhiteMode/discord-black.svg';
import MenuIconWhite from '../assets/icons/DarkMode/menu-white.svg';
import MenuIconDark from '../assets/icons/WhiteMode/menu-dark.svg';
import { NAV_LINKS } from '../constants/NavLinks';
import Lottie from "lottie-react";
import Download from "../assets/Animations/download.json";
import SwipeRight from "../assets/Animations/swipeRight.json";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleGithubClick = () => {
    window.open('https://discord.gg/GddycnXKb3', '_blank');
  };

  return (
    <header className="font-montserrat padding-x py-4 fixed z-10 w-full backdrop-blur-md bg-white opacity-80 dark:bg-transparent dark:opacity-100 border-b-1 border-[var(--Black-Dark-3)]"> 
      <nav className="flex justify-start items-center max-container gap-10 ">
        {/* Logo */}
        <div>
          <Link to="/">
            <img className="pt-1 dark:hidden" src={LogoRed} alt="Logo" width={150} height={20} />
            <img className="pt-1 hidden dark:block" src={LogoWhite} alt="Logo" width={150} height={20} />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className='flex-1 flex justify-start items-center gap-1 max-[1400px]:hidden opacity-90 '>
          {NAV_LINKS.map((item) => (
            <li key={item.id} className='Navigation-Links'>
              <Link 
                to={item.id === 'home' ? '/' : `/${item.id}`}
                className='font-montserrat leading-normal text-xl drop-shadow-lgs'
              >
                {item.label}
              </Link>   
            </li>
          ))}
        </ul>

        <ul className='absolute max-[420px]:right-5 right-18 flex justify-between items-center pr:20 gap-5'>
          {/* Dark mode toggle */}
          <li><ThemeToggle/></li>

          {/* Discord button */}
          <li>
            <button onClick={handleGithubClick} className="Button-icon max-[420px]:hidden">
              <img className='dark:hidden' src={DiscordDark} alt="github" width={35} height={35} />
              <img className='hidden dark:block' src={DiscordWhite} alt="github" width={33} height={33} />
            </button>
          </li>

          {/* Download button */}
          <li>
            <Link to="/download" className='hidden md:block shadow-2xl bg-red-500 Gradient-button border-2 -skew-x-16 text-[var(--white-OP-1)] px-10 py-5 text-xl hover:text-[var(--yellow)] font-bold border-[var(--yellow)]/80 duration-200 transition-transform transform hover:scale-105 pr-15'>
              DOWNLOAD NOW!
              <Lottie animationData={Download} loop={true} className="absolute w-15 bottom-1 right-1" />
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="hidden z-14 max-[1350px]:block absolute right-5 pt-1">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="Button-icon">
            <img className='hidden dark:block' src={MenuIconWhite} alt="Menu Icon" width={35} height={35} />
            <img className='block dark:hidden' src={MenuIconDark} alt="Menu Icon" width={35} height={35} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed z-25 inset-0 font-montserrat h-screen bg-black  flex flex-col items-center justify-center ">
            <button onClick={toggleMenu} className="absolute top-2 right-5 text-white text-[40px]" aria-label="Close Menu">
              &times;
            </button>
            <ul className="flex flex-col items-right gap-10 font-bold ">

              {/* Home Link */}
        <li key="home" className="Navigation-Mobile">
        <Lottie animationData={SwipeRight} loop={true} className="absolute w-15 bottom-5 right-1" />
          <Link to="/" className="font-montserrat leading-normal text-lg drop-shadow-lgs" onClick={toggleMenu}>
            Home
          </Link>
        </li>
              {NAV_LINKS.map((item) => (
                <li key={item.id} className="Navigation-Mobile">
                  <Lottie animationData={SwipeRight} loop={true} className="absolute w-15 bottom-5 right-1"  />
                  <Link to={item.id === 'home' ? '/' : `/${item.id}`} className="font-montserrat leading-normal text-lg drop-shadow-lgs"
                   onClick={toggleMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
