/* eslint-disable react/prop-types */
// import React from "react";

import Items from "./Items";
import Title from "./Title";

const Sales = (props) => {
  const { endpoint, ifExists } = props;

  return (
    <div className="nike-container">
      <Title title={endpoint.title} />
      <div
        className={`grid items-center justify-items-center ${
          ifExists
            ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
            : "grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1"
        }  gap-7 mt-7`}
      >
        {endpoint?.items?.map((item, i) => (
          <Items {...item} key={i} ifExists={ifExists} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
