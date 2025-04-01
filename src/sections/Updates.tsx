
import UpdateCard from '../components/UpdateCard';
import { NEWS_INFO } from '../constants/News';

const Updates = () => {

  // Sort news items by id in descending order
  const sortedNews = [...NEWS_INFO].sort((a, b) => b.id - a.id);

  return (     
 
    <div className="relative justify-items-center mx-auto py-10 sm:p-20 bg-[var(--white-bg)] dark:bg-black overflow-hidden">
 
      <div className=" justify-items-center min-[1500px]:grid hidden min-[1500px]:grid-cols-3 w-[80%]
      ">
        {sortedNews.slice(0, 3).map((newsItem) => (
          <UpdateCard key={newsItem.id} news={newsItem} />
        ))}
      </div>
      <div className="justify-items-center min-[900px]:grid min-[1500px]:hidden hidden min-[900px]:grid-cols-2 w-[80%] ">
      {sortedNews.slice(0,2).map((newsItem) => (
          <UpdateCard key={newsItem.id} news={newsItem} />
        ))}
      </div>
      <div className=" justify-items-center grid grid-cols-1 min-[900px]:hidden w-[80%] ">
      {sortedNews.slice(0,1).map((newsItem) => (
          <UpdateCard key={newsItem.id} news={newsItem} />
        ))}
      </div>
      
    </div>
  );
};

export default Updates