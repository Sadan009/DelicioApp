import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../assets/data/FoodData";

const FoodItems = () => {
  return (
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
          />
        );
      })}
    </div>
  );
};

export default FoodItems;
