/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 w-full max-w-2xl m-auto md:max-w-none md:gap-5">
            {titles?.map((item, i) => (
              <div
                key={i}
                className="text-lg lg:text-base md:text-sm uppercase font-semibold"
              >
                <h1>{item.title}</h1>
              </div>
            ))}
            {links?.map((list, i) => (
              <ul key={i} className="grid items-center gap-1">
                {list?.map((link, i) => (
                  <li key={i}>{link.link}</li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              CopyRight&nbsp;
              <sup>&copy;</sup>&nbsp; All Resereved Rights 2022&nbsp;
              <span className="font-semibold">JSSTACK DEVELOPERS</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
