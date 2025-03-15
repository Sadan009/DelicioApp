import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col w-[96%] border-none lg:flex-row lg:gap-0 gap-y-6 nav lg:justify-between lg:p-6 p-1">
      <div>
        <h1 className="lg:text-3xl md:text-2xl sm:text-3xl font-bold border-b-2 border-black inline ">
          Delicio -{" "}
          <span className="italic text-red-300 opacity-45 font-semibold">
            The Taste
          </span>
        </h1>
        <h3 className="opacity-45 font-semibold my-2">
          {new Date().toUTCString().slice(0, -13)}
        </h3>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center gap-2">
        <input
          type="search"
          placeholder="Search your dish...."
          name="search"
          id="search"
          autoComplete="off"
          className="input-search sm:w-[500px] md:w-[500px] lg:w-[500px]"
          //   onChange={}
        />
        {/* <button className="btn-search">Search</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
