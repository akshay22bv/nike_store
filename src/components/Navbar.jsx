/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTotalAmount,
  selectTotalQTY,
  selectedCartItems,
  setGetTotals,
  setOpenCart,
} from "../app/CartSlice";
const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const dispatch = useDispatch();

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const cartItems = useSelector(selectedCartItems);
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onNavScoll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScoll);

    return () => {
      window.removeEventListener("scroll", onNavScoll);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          navState
            ? "z-100  fixed top-0 left-0 right-0 h-[10vh] flex items-center justify-center opacity-100 z-[100] blur-effect-theme"
            : "z-50 absolute top-7 opacity-100 left-0 right-0"
        }`}
      >
        <nav className="flex items-center justify-between nike-container">
          <div>
            <img
              src={logo}
              className={`w-16 h-auto ${navState && "brightness-0 filter"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-4">
            <li className="grid items-center">
              <BsSearch
                className={`icon-style ${navState && "brightness-0 filter"}`}
              />
            </li>
            <li className="grid items-center">
              <AiOutlineHeart
                className={`icon-style ${navState && "brightness-0 filter"}`}
              />
            </li>
            <li className="grid items-center">
              <button
                type=""
                onClick={onCartToggle}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative "
              >
                <BsFillHandbagFill
                  className={`icon-style ${navState && "brightness-0 filter"}`}
                />
                <div className="absolute top-4 right-0 bg-white w-4 h-4 rounded-full flex items-center justify-center font-semibold leading-tight hover:scale-110">
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
