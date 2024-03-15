import React from 'react';
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto mt-3">
  <div className="flex-1 items-center">
    <a className="btn btn-ghost text-2xl font-semibold">Recipe Calories</a>


    <div className="md:ml-28">
      <ul className="flex gap-4 text-lg">
        <li><a href="">Home</a></li>
        <li><a href="">Recipes</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Search</a></li>
      </ul>
  </div>
  </div>

  
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
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