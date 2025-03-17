import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../assets/data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  // to filter data first we use useSelector:
  const category = useSelector((state) => state.category.category);

  // search functionality:
  const search = useSelector((state) => state.search.search);

  const handleToast = (name) => toast.success(`${name} added to cart`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap  gap-8 justify-center">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => {
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
