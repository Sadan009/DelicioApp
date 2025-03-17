import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../assets/data/FoodData";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {
  const handleToast = (name) => toast.success(`${name} added to cart`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap  gap-8 justify-center">
        {FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItems;
