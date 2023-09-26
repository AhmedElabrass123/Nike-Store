import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Clip = ({ img, clip }) => {
  return (
    <>
      <div
        className="relative mb-[10px] w-[50px] h-[50px] rounded-[5px] overflow-hidden
       group transition-all duration-300 cursor-pointer sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] 
       lg:w-[100px] lg:h-[100px]"
      >
        <img
          src={img}
          alt="clipImage"
          className="w-full h-full object-cover rounded-[5px] absolute left-0 top-0 right-0 z-[10] transition-opacity duration-500"
        />
        <div
          className="w-full h-full object-cover opacity-100 flex justify-center items-center
         absolute left-0 top-0 right-0 z-[100] transition-all duration-300 group-hover:z-0 group-hover:opacity-0 "
        >
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="text-gray-200 w-[20px] h-[20px] rounded-[50%]"
          />
        </div>
        <video
          loop={true}
          autoPlay={true}
          muted={true}
          playsInline={true}
          className="absolute left-0 top-0 right-0 w-full h-full object-cover rounded-[5px] z-[0] opacity-0
           group-hover:opacity-100 group-hover:z-[20]"
        >
          <source src={clip} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Clip;
