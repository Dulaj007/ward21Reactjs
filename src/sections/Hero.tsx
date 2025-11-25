import React from "react";
import BackgroundImg from "../assets/Images/hero.png";
import { Fade } from 'react-awesome-reveal';
import LogoRed from "../assets/images/ward21logoRed2.png";
import LogoWhite from "../assets/images/ward21logoWhite1.png";
import Lottie from "lottie-react";
import SwipeDownDark from "../assets/Animations/SwipeDownDark.json";
import SwipeDownWhite from "../assets/Animations/SwipeDownWhite.json";

const Hero = ({ downloadRef }: { downloadRef: React.RefObject<HTMLDivElement> }) => {
  const handleScrollToDownload = () => {
    if (downloadRef.current) {
      downloadRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen gap-1 max-[900px]:gap-0"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-[var(--white-bg)]  to-transparent pointer-events-none dark:hidden"></div>
      
      {/* Overlay for Dark Mode & Opacity Effect */}
      <div className="absolute inset-0 bg-[var(--white-bg)] dark:bg-black opacity-30 dark:opacity-10"></div>
     <Fade direction="up" duration={1000}>
      <a href="/" className="relative z-5">
        <img
          className="pt-1 dark:hidden w-50 sm:w-60 md:w-80 lg:w-120"
          src={LogoRed}
          alt="Logo"
        />
        <img
          className="pt-1 hidden dark:block w-50 sm:w-60 md:w-80 lg:w-120"
          src={LogoWhite}
          alt="Logo"
        />
      </a>
      </Fade>

      {/* Hero Text */}
      <Fade direction="up" duration={1500}>
      <h1 className="relative text-[10px] sm:text-[12px] md:text-[15px] lg:text-[20px] font-montserrat uppercase tracking-[0.1em] text-black dark:text-white font-semibold">
        Zombie-infested indie first-person shooter
      </h1>
      </Fade>
      <Fade direction="up" duration={1000}>
      <h1 className="relative pb-2 md:pb-4 text-[25px] sm:text-[20px] md:text-[35px] lg:text-[40px] font-montserrat uppercase tracking-[0.1em] text-[var(--yellow)]/80 font-semibold">
        Play free now
      </h1>
      </Fade>

      {/* Download Button */}
      <Fade direction="up" duration={1000}>
      <button
        className="z-5 shadow-2xl border-[var(--yellow)] Gradient-button border-2 text-[var(--white-OP-1)] md:px-10 md:py-5 font-semibold hover:text-[var(--yellow)] rounded-full duration-200 transition-transform transform hover:scale-105 text-[10px] sm:text-[12px] px-5 py-2 md:text-[20px] lg:text-[20px]"
        onClick={handleScrollToDownload}
      >
        DOWNLOAD NOW
      </button></Fade>

      {/* Scroll Animation */}
      <Lottie
        animationData={SwipeDownDark}
        loop={true}
        className="absolute w-30 bottom-10 block dark:hidden"
      />
      <Lottie
        animationData={SwipeDownWhite}
        loop={true}
        className="absolute w-30 bottom-10 hidden dark:block"
      />
    </div>
  );
};

export default Hero;
