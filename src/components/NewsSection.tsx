import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { NEWS_INFO } from '../constants/News';
import NewsCard from './NewsCard';

const NewsSection: React.FC = () => {
  // Sort news items by id in descending order
  const sortedNews = [...NEWS_INFO].sort((a, b) => b.id - a.id);
  const mainNews = sortedNews[0];
  const otherNews = sortedNews.slice(1);

  return (
    <div className="space-y-6 p-10">
      {/* Main News Card */}
      <NewsCard news={mainNews} isMain />

      {/* Carousel for Other News */}
      <Swiper 
        className="p-10"
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {otherNews.map((newsItem) => (
          <SwiperSlide key={newsItem.id} className="p-1">
            <NewsCard news={newsItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSection;
