import React from "react";

const CategoryMenu = () => {
  return (
    <div className="lg:px-4 p-2">
      <h1 className="my-4 font-semibold">Find the best Food</h1>
      <div className="lg:my-5 flex lg:gap-x-2 gap-x-1">
        <button className="lg:px-3 px-3 py-1 lg:py-2 cursor-pointer bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white">
          All
        </button>
        <button className="lg:px-3 px-3 py-1 lg:py-2 cursor-pointer bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white">
          Lunch
        </button>
        <button className="lg:px-3 px-3 py-1 lg:py-2 cursor-pointer bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white">
          Breakfast
        </button>
        <button className="lg:px-3 px-3 py-1 lg:py-2 cursor-pointer bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white">
          Dinner
        </button>
        <button className="lg:px-3 px-3 py-1 lg:py-2 cursor-pointer bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white">
          Snacks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
