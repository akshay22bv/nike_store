import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";

const Clips = ({ clip, imgsrc }) => {
  return (
    <>
      <div className="relative group h-28 w-32 rounded-xl overflow-hidden lg:h-20 md:h-16 sm:h-12 xsm:h-8 lg:w-20 md:w-16 sm:w-12 xsm:w-8 flex items-center justify-center">
        <img
          alt=""
          src={imgsrc}
          className="inset-0 flex h-full object-cover absolute top-0 left-0 rounded-xl z-10 opacity-100 transition-opacity duration-500"
        ></img>

        <div className="absolute opacity-100 z-[100]">
          <BsPlayCircleFill className="icon-style" />
        </div>

        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-20 cursor-pointer"
        >
          <source alt="" src={clip} className="h-full"></source>
        </video>
      </div>
    </>
  );
};

export default Clips;
