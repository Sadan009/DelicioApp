import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
const Cart = () => {
  return (
    <>
      <div className="fixed right-0 top-0 lg:w-[24vw] w-full p-5 h-full bg-white">
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-semibold text-gray-800">My Order</span>
          <IoMdClose className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-full cursor-pointer hover:text-red-400 hover:border-red-400" />
        </div>

        <ItemCard />
        <ItemCard />
        <ItemCard />

        <div className="absolute bottom-0  border-t-2 border-gray-300 ">
          <h3 className="font-semibold text-gray-800">Items: </h3>
          <h3 className="font-semibold text-gray-800">Total Amount: </h3>
          <button className="bg-green-500 font-bold px-3 w-[90vw] lg:w-[18vw] text-white py-2 rounded-md mb-5 ">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
