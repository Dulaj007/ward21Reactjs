import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { REQ_INFO } from '../constants/Requirements';

const Requirements: React.FC = () => {
  const minimumReq = REQ_INFO.find((req) => req.Type === 'Minimum');
  const recommendedReq = REQ_INFO.find((req) => req.Type === 'Recommended');

  return (
    <div className="bg-[var(--white-bg)] dark:bg-black">
      <Fade direction="up" duration={1000}>
        <h1 className="relative pt-10 text-[20px] font-montserrat uppercase tracking-[0.1em] sm:text-[30px] text-4xl text-black dark:text-white font-bold text-center">
          System Requirements 
        </h1>
      </Fade>
      <div className="flex flex-col md:flex-row justify-center opacity-80 font-montserrat text-black dark:text-white">
        {minimumReq && (
          <Fade direction="left" duration={1000}>
            <div className="p-5 text-[30px]">
              <h2 className="text-xl font-bold text-right uppercase text-[30px]">Minimum</h2>
              <ul className="text-right">
                <li className='pt-3'>{minimumReq.Ram}</li>
                <li className='pt-3'>{minimumReq.Size}</li>
                <li className='pt-3'>{minimumReq.CPU}</li>
                <li className='pt-3'>{minimumReq.GPU}</li>
              </ul>
            </div>
          </Fade>
        )}
        <Fade >
          <div className="p-5 text-[30px] font-semibold max-md:hidden">
            <h2 className="text-xl font-bold text-center text-transparent">.</h2>
            <ul className="text-center">
              <li className='pt-3'>RAM</li>
              <li className='pt-3'>Size</li>
              <li className='pt-3'>CPU</li>
              <li className='pt-3'>GPU</li>
            </ul>
          </div>
        </Fade>
        {recommendedReq && (
          <Fade direction="right" duration={1000}>
            <div className="p-5 text-[30px]">
              <h2 className="text-xl font-bold text-left uppercase text-[30px]">Recommended</h2>
              <ul className="text-left">
                <li className='pt-3'>{recommendedReq.Ram}</li>
                <li className='pt-3'>{recommendedReq.Size}</li>
                <li className='pt-3'>{recommendedReq.CPU}</li>
                <li className='pt-3'>{recommendedReq.GPU}</li>
              </ul>
            </div>
          </Fade>
        )}
      </div>
      <Fade direction="down" duration={1000}>
      <div className="flex justify-center">
    
      </div></Fade>
    </div>
  );
};

export default Requirements;
