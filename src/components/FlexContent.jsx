/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";

const FlexContent = (props) => {
  const { title, heading, text, img, btn, url, ifExists } = props.endpoint;

  return (
    <div
      className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${
        props.ifExists ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`w-full grid items-center justify-items-start md:justify-items-center`}
      >
        <h1 className="text-4xl sm:text-3xl text-gradient font-bold">
          {heading}
        </h1>
        <h1 className="text-5xl lg:text-3xl md:text-2xl sm:text-2xl text-black font-medium">
          {title}
        </h1>
        <p className="my-4">{text}</p>
        <a href={url} className="flex items-center">
          <button className="button-theme bg-slate-900 text-white py-1.5">
            {btn}
          </button>
        </a>
      </div>

      <div className={`my-2`}>
        <img
          alt=""
          src={img}
          className={`w-auto object-fill transitions-theme ${
            ifExists
              ? "h-60 lg:h-56 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12"
              : "h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-48 rotate-[19deg] hover:rotate-12"
          }`}
        ></img>
      </div>
    </div>
  );
};

export default FlexContent;
