import React, { useEffect, useState } from "react";
import FoodData from "../assets/data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const selectedCategory = useSelector((state) => state.category.category);

  // get distict values:
  const uniqueCategoiesList = () => {
    const listUniqueCategory = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(listUniqueCategory);
    console.log(listUniqueCategory);
  };

  useEffect(() => {
    uniqueCategoiesList();
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="lg:px-4 p-2">
      <h1 className="my-4 font-semibold">Find the best Food</h1>
      <div className="lg:my-5 flex lg:gap-x-2 gap-x-1">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`lg:px-3 px-3 py-1 lg:py-2 
            cursor-pointer bg-gray-200 font-semibold 
            rounded-lg hover:bg-green-500 hover:text-white
${selectedCategory === "All" && "bg-green-500 text-white"}
            `}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`lg:px-3 px-3 py-1 lg:py-2 cursor-pointer
                 bg-gray-200 font-semibold rounded-lg
                  hover:bg-green-500  hover:text-white
                  ${selectedCategory === category && "bg-green-500 text-white"}
                  `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
