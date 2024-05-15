import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { Store } from "../store/Store";
const Header = () => {
  return (
    <header className="w-full h-[60px] bg-gray-800 flex justify-between text-white px-[140px] items-center">
      <section>
        <h2 className="text-[35px]">
          <NavLink to={"/"}>Blogs</NavLink>
        </h2>
      </section>
      <section className="flex items-center gap-6">
        <button>
          <NavLink to={"/"}>Home</NavLink>
        </button>
      </section>
    </header>
  );
};

export default Header;
