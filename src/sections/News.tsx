
import NewsSection from '../components/NewsSection';

const News = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black dark:text-black p-35 max-[900px]:p-5">
      <h1 className="relative font-montserrat uppercase tracking-[0.1em] max-[900px]:text-[30px] text-4xl text-black dark:text-white font-semibold text-right pr-2 max-[900px]:text-center"> News</h1>
        <NewsSection/>
    </div>
    
  )
}

export default News