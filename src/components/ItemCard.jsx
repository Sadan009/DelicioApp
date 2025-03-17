import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decrementQty,
  incrementQty,
} from "../redux/slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  const handleDeleteToast = (name) => {
    toast(`${name} Removed!`, {
      icon: "👋🏻",
    });
  };

  return (
    <div className="flex gap-2 shadow-md rounded-lg px-2 py-3 relative mb-3">
      <AiFillDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          handleDeleteToast(name);
        }}
        className="absolute text-lg right-2 text-red-500 hover:text-red-300 cursor-pointer "
      />
      <img src={img} alt="" className="w-[70px] h-[50px]" />
      <div className="leading-5">
        <div className="flex">
          <h2 className="text-gray-800 font-semibold">{name}</h2>
        </div>
        <div className="flex justify-between ">
          <span className="text-green-500 font-semibold">₹{price}</span>
          <div className="flex items-center gap-2 absolute right-2">
            <AiOutlineMinus
              onClick={() => qty > 1 && dispatch(decrementQty({ id }))}
              className={`border-2 border-gray-600 ${
                qty > 1
                  ? "text-gray-600 cursor-pointer hover:bg-green-500 hover:border-none hover:text-white "
                  : "text-white bg-gray-200 border-none"
              }
               rounded-md p-1 text-xl  transition-all ease-linear `}
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white
            hover:bg-green-500 hover:border-none rounded-md p-1
            text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
