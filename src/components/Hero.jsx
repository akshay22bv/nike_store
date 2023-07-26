/* eslint-disable react/prop-types */
// import React from "react";

import Clips from "./Clips";
import SocialLinks from "./SocialLinks";

const Hero = (props) => {
  const { title, btntext, img, sociallinks, subtitle, videos } = props.heroapi;

  return (
    <>
      <div className="w-full relative h-auto m-auto flex flex-col">
        {/* background */}
        <div className="sm:h-[60vh] md:h-[65vh] h-[85vh] w-auto= bg-theme clip-path lg:h-[75vh] absolute z-10 w-full"></div>

        {/* above */}
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          {/* text */}
          <div className="grid items-center justify-items-center mt-28 md:mt-24 ">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold drop-shadow-sm text-slate-200 filter">
              {title}
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold drop-shadow-sm text-slate-200 filter">
              {subtitle}
            </h1>
            <button className="button-theme bg-slate-200 my-5 ">
              {btntext}
            </button>
            {/* videos links */}
            <div className="grid items-center gap-3 absolute top-[35vh] left-0">
              {videos?.map((item, i) => (
                <Clips key={i} imgsrc={item.imgsrc} clip={item.clip} />
              ))}
            </div>

            {/* social links */}
            <div className="grid items-center absolute right-0 top-[35vh] gap-5">
              {sociallinks?.map((item, i) => (
                <SocialLinks key={i} icon={item.icon} />
              ))}
            </div>
          </div>
          {/* image */}
          <div className="">
            <img
              alt=""
              src={img}
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] -rotate-[25deg] hover:rotate-0 cursor-pointer duration-300"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
