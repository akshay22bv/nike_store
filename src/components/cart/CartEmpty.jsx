/* eslint-disable react/prop-types */
// import React from "react";
import emptybag from "../../assets/emptybag.png";
import { BiArrowBack } from "react-icons/bi";
const CartEmpty = ({ onCartToggle }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen px-11 text-center gap-7">
        <img
          src={emptybag}
          alt=""
          className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
        ></img>
        <button
          onClick={onCartToggle}
          type=""
          className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-orange-500 flex items-center justify-center py-2 gap-3 text-sm font-semibold active:scale-110"
        >
          <BiArrowBack className="w-5 h-5 text-slate-900 " />
          <span>Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
