import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs'; // Import Bootstrap icon

const NavigationBar = ({ cartItemCount }) => {
  return (
    <nav className="bg-gray-100 p-5 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold">ร้านหนังสือ "บ้านนายดิน"</Link>
      <div className="flex items-center">
        <Link to="/cart" className="flex items-center text-lg text-gray-700 hover:text-gray-900">
          <BsCart className="mr-2" /> ตะกร้าสินค้า
          {cartItemCount > 0 && (
            <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;