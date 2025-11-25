import React from "react";
import { NEWS_INFO, NewsItem } from "../constants/News"; 

const NewsMain: React.FC = () => {
  return (
    <div className=" bg-white dark:bg-black">
    <section className="font-montserrat max-w-5xl mx-auto px-4 py-8 bg-white dark:bg-black">
      <h2 className="text-3xl font-bold text-center mb-6 text-black dark:text-white">
        LATEST NEWS
      </h2>

      <div className="space-y-8">
        {NEWS_INFO.map((news: NewsItem) => (
          <div
            key={news.id}
            className="flex flex-col md:flex-row bg-gray-100 dark:bg-black border-1 border-white/30 overflow-hidden
            rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Left Side: Image */}
            <div className="w-full md:w-1/3">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full md:w-2/3 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {news.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {news.date}
              </p>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mt-2">
                {news.subTitle}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {news.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default NewsMain;
