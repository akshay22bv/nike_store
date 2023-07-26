/* eslint-disable react/prop-types */
// import React from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Cartcount = ({ onCartToggle, onClearCartItems, totalQTY }) => {
  return (
    <>
      <div className="bg-white flex items-center justify-between px-3 sticky w-full py-1">
        <div className="flex items-center gap-3 py-1">
          <div
            className="grid item-center cursor-pointer"
            onClick={onCartToggle}
          >
            <AiOutlineDoubleLeft className="text-slate-900 w-5 h-5 hover:text-orange-500" />
          </div>
          <div>
            <h1 className="text-base font-normal text-slate-900">
              Your Cart &nbsp;
              <span className="bg-theme-cart text-sm  rounded px-1 py-0.5 text-slate-100 ">
                ({totalQTY})
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={onClearCartItems}
            className="bg-theme-cart active:scale-90 p-0.5 rounded text-white"
          >
            <RxCross2 />
          </button>
        </div>
      </div>
    </>
  );
};

export default Cartcount;
