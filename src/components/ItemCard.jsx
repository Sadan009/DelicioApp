import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";

const ItemCard = () => {
  return (
    <div className="flex gap-2 shadow-md rounded-lg px-2 py-3 relative mb-3">
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
        className="w-[70px] h-[50px]"
      />
      <div className="leading-5">
        <div className="flex">
          <h2 className="text-gray-800 font-semibold">Onion Pizza</h2>
          <AiFillDelete className="absolute text-lg right-2 text-red-500 hover:text-red-300 cursor-pointer " />
        </div>
        <div className="flex justify-between ">
          <span className="text-green-500 font-semibold">₹120</span>
          <div className="flex items-center gap-2 absolute right-2">
            <AiOutlinePlus
              className="border-2 border-gray-600 text-gray-600 hover:text-white
            hover:bg-green-500 hover:border-none rounded-md p-1
            text-xl transition-all ease-linear cursor-pointer"
            />
            <span>0</span>
            <AiOutlineMinus
              className="border-2 border-gray-600
            text-gray-600 hover:text-white hover:bg-green-500
            hover:border-none rounded-md p-1 text-xl  transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
