/* eslint-disable no-unused-vars */

import Title from "./Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AiFillHeart } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import "@splidejs/react-splide/css";
import { truncate } from "lodash";

/* eslint-disable react/prop-types */
const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="nike-container mb-11">
      <Title title={title} />
      <div className="mt-7">
        <Splide options={splideOptions}>
          {news?.map((item, i) => (
            <SplideSlide key={i}>
              <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow w-full">
                <div className="flex items-center justify-center">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-auto object-cover shadow-md rounded-tl-lg rounded-tr-lg"
                  ></img>
                </div>

                <div className="flex items-center justify-between w-full px-4">
                  <div className="flex items-center ">
                    <AiFillHeart className="icon-style text-red-600 w-5 h-5" />
                    <span className="text-xs font-bold">{item.like}</span>
                  </div>
                  <div className="flex items-center gap-0.5 ">
                    <AiFillClockCircle className="icon-style w-4 h-4 text-black" />
                    <span className="text-xs font-bold">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <FaHashtag className="icon-style text-blue-600" />
                    <span className="text-xs">{item.by}</span>
                  </div>
                </div>

                <div className="grid items-center justify-items-start px-4">
                  <h1 className="text-base font-semibold">{item.title}</h1>
                  <p className="text-sm text-justify lg:text-xs">
                    {truncate(item.text, { length: 200 })}
                  </p>
                </div>

                <div className="flex items-center justify-center px-4 w-full">
                  <a
                    className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100"
                    href={item.url}
                  >
                    {item.btn}
                  </a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Stories;
