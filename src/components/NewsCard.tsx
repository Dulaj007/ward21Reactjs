import React from 'react';
import { NewsItem } from '../constants/News';


interface NewsCardProps {
  news: NewsItem;
  isMain?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, isMain = false }) => {
  return (
   
    <div
      className={`${
        isMain ? 'flex flex-col md:flex-row' : 'flex flex-col'
      } bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg ease-in-out overflow-hidden transform duration-300 shadow-lg hover:scale-102`}
    > 
      <div className={`${isMain ? 'md:w-1/2' : 'w-full h-48'} flex-shrink-0 overflow-hidden`}>
        <img
          src={news.image}
          alt={news.title}
          className="object-cover w-full h-full transition-transform ease-in-out transform duration-300  hover:scale-102"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {news.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {new Date(news.date).toLocaleDateString()}
        </p>
        {isMain && (
          <>
            <h3 className="mt-2 text-xl text-gray-800 dark:text-gray-300">
              {news.subTitle}
            </h3>
            <p className="mt-4 text-gray-700 dark:text-gray-400">
              {news.description}
            </p>
          </>
        )}
        {!isMain && (
          <a
            href="#"
            className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
          >
            See more
          </a>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
