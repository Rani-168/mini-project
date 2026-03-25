import './Header.css';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="bg-white px-20 py-4">

      
      <div className="flex items-center justify-between">

       
        <div className="flex items-center gap-10">
          
         
          <a href="/" className="text-2xl font-bold">
            SHOP.CO
          </a>

          
          <div className="hidden md:flex gap-8 text-gray-700">
           <div 
  className="relative"
  onClick={() => setShowDropdown(!showDropdown)}
>
  <div className="flex items-center gap-1 cursor-pointer">
    Shop <IconChevronDown />
  </div>

  {showDropdown && (
    <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-4 w-40">
  <Link to="/shop?category=tshirts" className="block p-2 hover:bg-gray-100">T-Shirts</Link>
  <Link to="/shop?category=shirts" className="block p-2 hover:bg-gray-100">Shirts</Link>
  <Link to="/shop?category=jeans" className="block p-2 hover:bg-gray-100">Jeans</Link>
  <Link to="/shop?category=dresses" className="block p-2 hover:bg-gray-100">Dresses</Link>
</div>
  )}
</div>
            <a href="/" className="hover:text-black">On Sale</a>
            <a href="/" className="hover:text-black">New Arrivals</a>
            <a href="/" className="hover:text-black">Brands</a>
          </div>
        </div>

       
        <div className="flex items-center gap-14">

          
          <input
            type="text"
            placeholder="Search for products..."
            className="hidden md:block bg-gray-200 px-4 py-2 rounded-full w-164 outline-none"
          />

          
          <Link to="/cart" className="relative">
  <FaShoppingCart className="text-xl cursor-pointer" />

  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
      {cartCount}
    </span>
  )}
</Link>
          <FaUser className="text-xl cursor-pointer" />

         
          <div className="md:hidden text-xl cursor-pointer">
            {menuOpen ? (
              <FaTimes onClick={() => setMenuOpen(false)} />
            ) : (
              <FaBars onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </div>

      
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-2 md:hidden text-gray-700">
          <a href="/" className="flex items-center gap-1">
            Shop <IconChevronDown />
          </a>
          <a href="/">On Sale</a>
          <a href="/">New Arrivals</a>
          <a href="/">Brands</a>

          
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 px-4 py-2 rounded-full outline-none"
          />
        </div>
        

      )}
    

    </div>
  );
}

export default Navbar;