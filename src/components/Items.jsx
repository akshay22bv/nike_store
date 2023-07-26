/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
// import React from "react";
import { AiFillStar } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { setAddItemsToCart, setOpenCart } from "../app/CartSlice";

const Items = (props) => {
  const { id, btn, color, img, price, rating, shadow, text, title, ifExists } =
    props;

  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, title, text, img, price, shadow, color };
    dispatch(setAddItemsToCart(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
        ifExists ? "justify-items-start" : "justify-items-center"
      } rounded-xl py-4 px-5 transition-all duration-100 ease-in-out hover:scale-105 w-full`}
    >
      <div
        className={`grid items-center  ${
          ifExists ? "justify-items-start" : "justify-items-center"
        }`}
      >
        <h1 className="text-slate-100 text-base drop-shadow font-medium">
          {title}
        </h1>
        <p className="text-slate-100 font-medium">{text}</p>

        <div className="flex items-center justify-between w-28 my-2">
          <div className="bg-white px-1 rounded">
            <h1 className="text-black text-sm">{price}</h1>
          </div>
          <div className="flex items-center gap-3">
            <AiFillStar className="icon-style text-slate-900" />
            <h1>{rating}</h1>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <button onClick={onAddToCart} className="bg-white p-0.5 rounded ">
            <HiShoppingBag className="icon-style text-slate-900" />
          </button>
          <button
            onClick={() => {
              onAddToCart();
              onCartToggle();
            }}
            className="bg-white p-0.5 px-1 rounded  text-sm button-theme"
          >
            {btn}
          </button>
        </div>
      </div>
      <div className="">
        <img
          alt={`img/item-img/${id}`}
          src={img}
          className={`transitions-theme hover:-rotate-12 ${
            ifExists
              ? "h-auto lg:w-56 md:w-48 w-56 -rotate-[35deg] absolute top-5 right-1"
              : "justify-center h-36 w-64"
          }`}
        ></img>
      </div>
    </div>
  );
};

export default Items;
