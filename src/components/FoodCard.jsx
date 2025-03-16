import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, rating, foodImg }) => {
  

  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={foodImg}
        alt=""
        className="w-auto h-[150px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="flex justify-between  text-sm">
        <h2>{name}</h2>
        <span className="text-green-400 ">₹{price}</span>
      </div>
      <p className="text-sm font-normal ">{desc.slice(0, 50)}..</p>
      <div className="flex justify-between ">
        <span className="flex items-center gap-2">
          <AiFillStar className="text-yellow-400" /> {rating}
        </span>
        <button 
        onClick={() => {
          dispatch(addToCart({id, name, price, rating, qty: 1}))
        }}
        className="py-1 px-2 text-white text-sm bg-green-500 hover:bg-green-600 rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
