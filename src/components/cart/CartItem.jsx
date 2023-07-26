/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQty,
  setIncreaseItemQty,
  setRemoveItemfromCart,
} from "../../app/CartSlice";
const CartItem = ({
  item: { id, title, img, text, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch();
  const onRemoveItem = () => {
    dispatch(
      setRemoveItemfromCart({
        id,
        title,
        img,
        text,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  const onIncreseItem = () => {
    dispatch(
      setIncreaseItemQty({
        id,
        title,
        img,
        text,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  const onDecreseItem = () => {
    dispatch(
      setDecreaseItemQty({
        id,
        title,
        img,
        text,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
              ${price}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                onClick={onDecreseItem}
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 items-center flex justify-center active:scale-90"
              >
                <AiOutlineMinus className="w-5 h-5 lg:w-4 lg:h-5 text-white" />
              </button>
              <div className="bg-theme-cart rounded text-white w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">
                {cartQuantity}
              </div>
              <button
                onClick={onIncreseItem}
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 items-center flex justify-center active:scale-90"
              >
                <AiOutlinePlus className="w-5 h-5 lg:w-4 lg:h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5 ">
          <div className="grid items-center justify-center">
            <h1 className="text-lg">${price * cartQuantity}</h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              onClick={onRemoveItem}
              className="cursor-pointer text-white bg-theme-cart rounded items-center flex justify-center active:scale-90 p-1"
            >
              <BsTrashFill className="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
