import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto mt-3">
      <div className="flex-1 items-center">
        <a className="btn btn-ghost text-2xl font-semibold">Recipe Calories</a>

        <div className="md:ml-28 hidden">
          <ul className="flex gap-4 text-lg">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Recipes</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <label className="hidden lg:flex  h-10">
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-40 md:w-auto bg-base-200 rounded-l-lg pl-3"
            />
            <span className="h-10">
              <IoSearch className="text-[40px] bg-base-200 rounded-r-lg p-1 text-green-600" />
            </span>
          </label>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="">
              <FaCircleUser className="text-4xl text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
