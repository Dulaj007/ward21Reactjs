
import { Fade } from 'react-awesome-reveal';
import DownloadSection from './DownloadSection';

export const DownloadInfo = () => {
  return (
    <div className='  bg-[var(--white-bg)] dark:bg-black '>
      <Fade direction="up" duration={1000}>
          <h1 className="relative pt-10 font-montserrat uppercase tracking-[0.1em] text-3xl text-black dark:text-white font-semibold text-center">
                      Click the download button to begin
          </h1>
        </Fade>
            <DownloadSection/>
        <Fade direction="up" duration={1000}>
                   <p className='relative ont-montserrat text-black dark:text-white font-semibold text-center md:text-2xl pt-4 px-20'>
                   Step 01</p>
                   <p className='relative ont-montserrat text-black dark:text-white  text-center md:text-2xl pt-2 px-20'>
                   Type your name & email then click continue</p>
                   <p className='relative ont-montserrat text-black dark:text-white font-semibold text-center md:text-2xl pt-4 px-20'>
                   Step 02</p>
                   <p className='relative ont-montserrat text-black dark:text-white  text-center md:text-2xl pt-2 px-20'>
                   Share your thoughts about our project by typing a comment here then click continue</p>
                   <p className='relative ont-montserrat text-black dark:text-white font-semibold text-center md:text-2xl pt-4 px-20'>
                   Step 03</p>
                   <p className='relative ont-montserrat text-black dark:text-white  text-center md:text-2xl pt-2 px-20'>
                   Support the developer by simply exploring their GitHub and LinkedIn <br></br>
                   Agree to terms and conditions then click Download 
                   </p>
          </Fade>
    </div>
  )
}
