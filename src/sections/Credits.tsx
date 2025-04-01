import React from 'react'
import { CREDITS_INFO, creditsINFO } from "../constants/Credits";
import { Fade } from 'react-awesome-reveal';

const Credits: React.FC = () => {
  return (
    <div className="bg-white px-10 dark:bg-black font-montserrat font-semibold">
      <h2 className="text-3xl pt-10 font-bold text-center text-black dark:text-white">
        CREDITS
      </h2>
 
      <div className="max-w-6xl mx-auto flex flex-col items-center overflow-hidden">
        {CREDITS_INFO.map((dev: creditsINFO) => (
           
          <div key={dev.id} className="w-full flex justify-between items-center py-2">
            {/* Name aligned to the right */}
            
            <div className="text-right flex-1 pr-2"><Fade direction="left" duration={1000}>
            <h3 className="text-md max-sm:text-md  font-bold text-black dark:text-white">{dev.Position}</h3></Fade>
            </div>
           
            {/* Position aligned to the left */}
            <div className="text-left flex-1 pl-2"> <Fade direction="right" duration={1000}>
              <p className="text-gray-500 dark:text-gray-400 text-md max-sm:text-sm">{dev.Name}</p></Fade>
            </div>
          </div>
        ))}
      </div>
      <div>
      <Fade direction="down" duration={1000}>
      <h2 className="text-3xl pt-10 font-bold text-center text-black dark:text-white">
      Special Thanks
      </h2>
      <Fade direction="down" duration={1000}>
              <p className="text-gray-500 dark:text-gray-400 text-md max-sm:text-sm text-center">
              We would like to extend our heartfelt gratitude to User1 Productions (YouTube) for inspiring and teaching us, 
              <br></br>enabling this project to come to life. Your guidance has been invaluable in our journey.  
                </p></Fade>

                <Fade direction="down" duration={1000}>
              <p className="text-gray-500 dark:text-gray-400 text-md max-sm:text-sm text-center py-2">
           
A special thanks to Lukas Bobor, Studio New Punch, and Tensori on the Unity Asset Store for providing free 3D models.
<br></br> Without their generosity and creativity, this project would not have been possible.  
                </p></Fade>

                <Fade direction="down" duration={1000}>
              <p className="text-gray-500 dark:text-gray-400 text-md max-sm:text-sm text-center py-2">
              We are deeply grateful to all the other 3D model designers whose work we used in this project. Your dedication and effort to share your creations online have made a significant impact. 
              <br></br>From the bottom of our hearts, we thank every 3D designer who contributed, even in the smallest way, to this game.  
                </p></Fade>

                <Fade direction="down" duration={1000}>
              <p className="text-gray-500 dark:text-gray-400 text-md max-sm:text-sm text-center py-2">
              There are so many talented designers whose 3D models have been used in this game. 
              <br></br>We have listed all the credits here. support these incredible artists.
 
                </p></Fade>

      </Fade>
      </div>
    </div>
  );
}

export default Credits;
