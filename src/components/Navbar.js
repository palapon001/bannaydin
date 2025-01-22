import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs'; // Import Bootstrap icon

const NavigationBar = () => {
  return (
    <nav className="bg-gray-100 p-5 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold">ร้านหนังสือ "บ้านนายดิน"</Link>
      <div className="flex items-center">
        <Link to="/cart" className="flex items-center text-lg text-gray-700 hover:text-gray-900">
          <BsCart className="mr-2" /> ตะกร้าสินค้า
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;