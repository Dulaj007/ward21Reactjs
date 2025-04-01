import React from "react";
import { NAV_LINKS } from '../constants/NavLinks';
import { Link } from 'react-router-dom';

interface NavProps {
  setActivePage: (page: 'home' | 'news' | 'game_info' | 'credits' | 'dev' | 'Report_Bugs' | 'DMCA' | 'Terms') => void;
}

const Footer: React.FC<NavProps> = ({ setActivePage }) => {
  const handleContactUsClick = () => {
    window.open('https://discord.gg/GddycnXKb3', '_blank');  // Open the GitHub URL in a new tab
  };

  return (
    <footer className="font-montserrat bg-gray-200 dark:bg-black/95 text-black dark:text-gray-100 p-6 md:p-8">
      <div className="max-w-6xl mx-auto flex md:flex-row justify-center items-center text-center md:text-left gap-5">
        {/* Main Links */}
        <div className="mb-4 md:mb-0 text-right">
          <ul className="space-y-1">
            {NAV_LINKS.map((item) => (
              // reference to each id in the navlinks array
              <li key={item.id} className="hover:text-blue-500 dark:hover:text-blue-400">
                <Link
                  to={`/${item.id}`} // Adjust routing based on your app's routes
                  onClick={() => {
                    if (['news', 'game_info', 'credits', 'dev'].includes(item.id)) {
                      setActivePage(item.id as 'news' | 'game_info' | 'credits' | 'dev');
                    } else {
                      setActivePage('home');
                    }
                  }}
                  className="font-montserrat leading-normal drop-shadow-lgs"
                >
                  {item.label} 
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Secondary Links */}
        <div className="mb-4 md:mb-0 text-left">
          <ul className="space-y-1">
            <li>
              <Link
                to="/Report_Bugs" // Adjust route if necessary
                className="hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => setActivePage('Report_Bugs')}
              >
                Report Bugs
              </Link>
            </li>
            <li>
              <Link
                to="/DMCA" // Adjust route if necessary
                className="hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => setActivePage('DMCA')}
              >
                DMCA
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 dark:hover:text-blue-400"
                onClick={handleContactUsClick}
              >
                CONTACT US
              </a>
            </li>
            <li>
              <Link
                to="/Terms" // Adjust route if necessary
                className="hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => setActivePage('Terms')}
              >
                TERMS AND CONDITIONS
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-gray-300 dark:border-gray-700 pt-4">
        © {new Date().getFullYear()} Ward21. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
