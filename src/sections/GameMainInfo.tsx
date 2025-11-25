
import { Fade } from 'react-awesome-reveal';
import Trailer from '../assets/Videos/Ward21Trailer.mp4';
import { useEffect, useRef } from 'react';

const GameMainInfo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!video) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {}); 
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  return (
    <div className="bg-[var(--white-bg)] dark:bg-black py-1 sm:py-10 px-10 md:px-50 font-montserrat ">
        
    {/* Video Trailer */}
      <div className="flex justify-center items-center w-full py-5">
        <video
          ref={videoRef}
          src={Trailer}
          controls
          controlsList="nodownload"
          className="w-[80vw] max-w-[1280px] rounded-2xl shadow-xl"
          preload="none"
        />
      </div>
        
        <Fade direction="up" duration={1000}>
            <h1 className="relative sm:my-5 pt-10 my-1 uppercase tracking-[0.1em] max-[900px]:text-[30px] text-4xl text-black dark:text-white font-bold text-center">
              WARD 21
            </h1>
        </Fade>

            <Fade direction="up" duration={1000}>
            <p className='relative text-black dark:text-white text-sm  text-center md:text-md lg:text-2xl leading-normal'>
            WARD 21 is a gripping single-player indie horror game set in an abandoned hospital in Sri Lanka after the catastrophic spread of the VX-21 virus. 
            Players step into the shoes of a secret agent who receives a distress call from a woman named Emily, pleading for help. 
            Determined to rescue her, he ventures into the eerie remains of the hospital, only to face the horrors lurking within.
            </p>
            </Fade>

            <Fade direction="up" duration={1000}>
            <h3 className='relative text-black dark:text-white font-semibold text-center  md:text-3xl pt-4 '>STORY LINE</h3>
            </Fade>

            <Fade direction="up" duration={1000}>
            <p className='relative text-black dark:text-white  text-center md:text-md lg:text-2xl p-0 text-sm leading-normal'>
            As the player delves deeper into the hospital, he encounters horrifying creatures mutated victims of the VX-21 virus.
            Armed with limited resources, he must fight his way through the derelict corridors, unlocking rooms, solving puzzles, 
            and uncovering dark secrets hidden within the walls of WARD 21. <br></br>
            </p></Fade>

            <Fade direction="up" duration={1000}>
            <p className='relative text-black dark:text-white  text-center md:text-md lg:text-2xl p-0 text-sm leading-normal'>
            As he progresses, he gradually pieces together the tragic events that led to the outbreak, 
            discovering the unethical experiments and the horrifying truth behind the virus.<br></br>As the game unfolds, 
            players will experience a psychological horror journey where the past and present collide in unexpecte
            However, maybe reality is not what it seems. The deeper he goes, the more the lines between truth and delusion begin to blur.   
            </p></Fade>

            <Fade direction="up" duration={1000}>
            <p className='relative text-black  dark:text-white font-semibold text-center md:text-2xl pt-5 p-0 md:px-25 leading-normal'>
            Who is Emily? <br></br>Why does he feel a strange connection to this place?  <br></br>How did all of this start?  <br></br>Where does it end?  <br></br>Is anything truly as it seems?
            </p>
            </Fade>
    </div>
  )
}

export default GameMainInfo