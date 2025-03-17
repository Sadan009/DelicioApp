import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalItems = cartItems.reduce(
    (totalQty, item) => totalQty + item.qty,
    0
  );
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );

  return (
    <>
      <div
        className={`fixed right-0 top-0 lg:w-[24vw] w-full p-5 h-full bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 ease-in-out `}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-semibold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-full cursor-pointer hover:text-red-400 hover:border-red-400"
          />
        </div>

        {cartItems.length ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-semibold text-gray-800">
            Your Cart is Empty
          </h2>
        )}

        <div className="absolute bottom-0  border-t-2 border-gray-300 ">
          <h3 className="font-semibold text-gray-800">Items: {totalItems}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: {totalPrice}
          </h3>
          <button className="bg-green-500 font-bold px-3 w-[90vw] lg:w-[18vw] text-white py-2 rounded-md mb-5 ">
            Buy Now
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full p-3 bg-white shadow-md 
          text-5xl fixed bottom-5 right-5 cursor-pointer ${
            totalItems > 0 && "animate-bounce delay-500 transition-all"
          } `}
      />
    </>
  );
};

export default Cart;
