/* eslint-disable react/prop-types */
// import React from "react";

const Title = (props) => {
  return (
    <div className="grid items-center ">
      <div className="text-5xl lg:text-4xl md:text-3xl font-bold filter drop-shadow ">
        {props.title}
      </div>
    </div>
  );
};

export default Title;
