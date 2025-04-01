import React from "react";
import { DEV_INFO, devINFO } from "../constants/dev";
import { Fade } from "react-awesome-reveal";

const DeveloperInfo: React.FC = () => {
  return (
    <div className=" font-montserrat max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-4">
    <div className="bg-white  dark:bg-black px-10 py-8 font-montserrat font-semibold flex flex-col items-start mt-10">
      <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
        OUR TEAM
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEV_INFO.map((dev: devINFO) => (  <Fade direction="down" duration={1000}>
          <div key={dev.id} className=" border-[var(--yellow)]/85  p-5 Gradient-button rounded-2xl shadow-lg border  hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">{dev.Name}</h3>
            <p className="text-gray-400 text-sm mt-1 ml-3">{dev.Position}</p>
          </div> </Fade>
        ))}
      </div>
     
    </div>
    </div>
  );
};

export default DeveloperInfo;
