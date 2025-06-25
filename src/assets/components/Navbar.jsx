import React, { useState } from "react";
import { FaApple, FaSearch, FaShoppingBag } from "react-icons/fa";

function Navbar() {
  const [showShopMenu, setShowShopMenu] = useState(false);

  return (
    <>
      
      <nav className="relative bg-slate-50 shadow">
        <div className="flex justify-center items-center gap-6 p-3 text-sm font-medium">
          <a href="#"><FaApple /></a>
          <button
            onClick={() => setShowShopMenu(!showShopMenu)}
            onMouseEnter={() => setShowShopMenu(true)}
            onMouseLeave={() => setShowShopMenu(false)}
            className="relative"
          >
            Store
          </button>
             <button
            onClick={() => setShowShopmacMenu(!showShopMenu)}
            onMouseEnter={() => setShowShopMenu(true)}
            onMouseLeave={() => setShowShopMenu(false)}
            className="relative"
          >
            Mac
          </button>
           <button
            onClick={() => setShowShopmacMenu(!showShopMenu)}
            onMouseEnter={() => setShowShopMenu(true)}
            onMouseLeave={() => setShowShopMenu(false)}
            className="relative"
          >
            iPad
          </button>
           <button
            onClick={() => setShowShopmacMenu(!showShopMenu)}
            onMouseEnter={() => setShowShopMenu(true)}
            onMouseLeave={() => setShowShopMenu(false)}
            className="relative"
          >
            iPhone
          </button>
          <button
            onClick={() => setShowShopmacMenu(!showShopMenu)}
            onMouseEnter={() => setShowShopMenu(true)}
            onMouseLeave={() => setShowShopMenu(false)}
            className="relative"
          >
            Watch
          </button>
          <button
            onClick={() => setShowShopmacMenu(!showShopMenu)}
            onMouseEnter={() => setShowShopMenu(true)}
            onMouseLeave={() => setShowShopMenu(false)}
            className="relative"
          >
            AirPods
          </button>
          <button
            onClick={() => setShowShopmacMenu(!showShopMenu)}
            onMouseEnter={() => setShowShopMenu(true)}
            onMouseLeave={() => setShowShopMenu(false)}
            className="relative"
          >
            TV & Home
          </button>
           <button
            onClick={() => setShowShopmacMenu(!showShopMenu)}
            onMouseEnter={() => setShowShopMenu(true)}
            onMouseLeave={() => setShowShopMenu(false)}
            className="relative"
          >
           Entertainment
          </button>
           <button
            onClick={() => setShowShopmacMenu(!showShopMenu)}
            onMouseEnter={() => setShowShopMenu(true)}
            onMouseLeave={() => setShowShopMenu(false)}
            className="relative"
          >
           Accessories
          </button>
           <button
            onClick={() => setShowShopmacMenu(!showShopMenu)}
            onMouseEnter={() => setShowShopMenu(true)}
            onMouseLeave={() => setShowShopMenu(false)}
            className="relative"
          >
           Support
          </button>
          
          <a href="#"><FaSearch /></a>
          <a href="#"><FaShoppingBag /></a>
        </div>

        {showShopMenu && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-md border-t z-50 p-6 grid grid-cols-3 gap-6 text-sm text-gray-800"
            onMouseEnter={() => setShowShopMenu(true)}
            onMouseLeave={() => setShowShopMenu(false)}
          >
            <div>
              <p className="text-gray-500 font-semibold mb-2">Shop</p>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline font-bold">Shop the Latest</a></li>
                <li><a href="#" className="hover:underline font-bold">Mac</a></li>
                <li><a href="#" className="hover:underline font-bold">iPad</a></li>
                <li><a href="#" className="hover:underline font-bold">iPhone</a></li>
                <li><a href="#" className="hover:underline font-bold">Apple Watch</a></li>
                <li><a href="#" className="hover:underline font-bold">Accessories</a></li>
              </ul>
            </div>
            <div>
              <p className="text-gray-500 font-semibold mb-2">Quick Links</p>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Find a Store</a></li>
                <li><a href="#" className="hover:underline">Order Status</a></li>
                <li><a href="#" className="hover:underline">Ways to Buy</a></li>
                <li><a href="#" className="hover:underline">Personal Setup</a></li>
                <li><a href="#" className="hover:underline">College Student Offer</a></li>
              </ul>
            </div>
            <div>
              <p className="text-gray-500 font-semibold mb-2">Shop Special Stores</p>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Education</a></li>
                <li><a href="#" className="hover:underline">Business</a></li>
              </ul>
            </div>
          </div>
        )}
      </nav>
      

      <p className="text-center p-4 bg-gray-50 text-sm">
        Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards.
        <button
          onClick={() => setShowShopMenu(true)}
          className="text-blue-600 hover:underline ml-1"
        >
          Shop
        </button>
      </p>
    </>
  );
}

export default Navbar;
