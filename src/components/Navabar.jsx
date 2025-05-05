 import { Link, NavLink } from "react-router-dom";
// import { CiShoppingCart } from "react-icons/ci";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";

import Bazzaro from '../assets/Images/Bazzaro.png'
import { useState } from "react";
 const Navbar = () => {

      const quantity = useSelector((state) => state.cart.totalQuantity);
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <>
   <nav className="bg-white shadow-md">
      {/* Top Nav */}
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="w-1/2 md:w-auto">
          <Link to="/">
            <img src={Bazzaro} alt="Logo" className="h-30 w-auto" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="w-full md:flex-1 md:mx-4 mt-3 md:mt-0">
          <form>
            <input
              className="w-full border py-2 px-4 bg-gray-100 text-gray-700 rounded-sm text-base md:text-xl"
              type="search"
              placeholder="Type object name or word to Search"
            />
          </form>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 mt-3 md:mt-0">
          <NavLink to="/Cart" className="text-3xl">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingBasketIcon color="action" />
            </Badge>
          </NavLink>

          {/* Desktop Login Button */}
          <button className="hidden md:block shadow bg-blue-100 text-xl text-gray-800 px-6 py-1 hover:shadow-lg hover:rotate-2">
            <Link to="/Login">Login</Link>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden text-gray-700 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Bottom Nav Links */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } flex items-center justify-center space-y-4 md:space-y-0 md:space-x-10 py-4 text-sm font-bold flex-row`}
      >
        <NavLink
          to="/"
          className="font-mono font-light text-xl hover:underline text-gray-600"
        >
          Home
        </NavLink>
        <NavLink
          to="/Shop"
          className="font-mono font-light text-xl hover:underline text-gray-600"
        >
          Shop
        </NavLink>
        <NavLink
          to="/Contact"
          className="font-mono font-light text-xl hover:underline text-gray-600"
        >
          Contact
        </NavLink>
      </div>
    </nav>
    </>
  )
};

export default Navbar;