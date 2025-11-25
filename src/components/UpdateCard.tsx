import React from 'react';
import { NewsItem } from '../constants/News';
import { Fade } from 'react-awesome-reveal';
import Lottie from "lottie-react";
import SwipeRight from "../assets/Animations/swipeRight.json";
import { Link } from 'react-router-dom';

interface NewsCardProps {
  news: NewsItem;
}
const UpdateCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Fade direction="up" duration={1000}>
      <div className="scale-65 sm:scale-80 md:scale-90 lg:scale-100">
      <Link to="/news">
      <div  
      className="relative -skew-x-10 w-85 h-40 backdrop-blur-2xl border-black dark:border-white border-2 bg-opacity-80 dark:bg-opacity-80 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg">
        {/* Background Image */}
        <img
          src={news.image}
          alt={news.title}
          className="absolute inset-0 w-full h-full ml-5 mt-5 "
        />
      <div className="ml-65 absolute p-2 mt-7 w-20 rounded-3xl h-10 inset-0 border-2 border-white bg-black/50 backdrop-blur-3xl flex flex-col justify-end ">
        <p className="text-sm text-white uppercase font-montserrat font-semibold">UPDATE</p>
      </div>

        {/* Blur Overlay */}
        <div className='ml-75 absolute mt-54 z-12'>
          <button className="absolute w-15 bottom-10">
          <Lottie animationData={SwipeRight} loop={true} />
          </button>
        </div>

        <div className="ml-10 absolute mt-30 w-85 h-20 inset-0 border-2 border-white bg-black/50 backdrop-blur-3xl flex flex-col justify-end p-4 ">
          <h2 className="text-xl font-bold text-[var(--yellow)] uppercase font-montserrat mt-5">
            {news.title}
          </h2>
          <p className="text-sm text-white/90 font-semibold uppercase font-montserrat">
            {new Date(news.date).toLocaleDateString()}
          </p>

        </div>
      </div>
      </Link>
      </div>
    </Fade>
  );
};

export default UpdateCard;