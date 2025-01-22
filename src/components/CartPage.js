import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cart, calculateTotal, updateCart }) => {
  const { totalPrice, discount, finalPrice } = calculateTotal();
  const isEmpty = Object.keys(cart).length === 0;

  return (
    <div className="container mx-auto mt-5">
      <h2 className="mb-4 text-2xl font-bold">ตะกร้าสินค้า</h2>
      {isEmpty ? (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative text-center" role="alert">
          ไม่มีสินค้าในตะกร้า
        </div>
      ) : (
        <ul className="mb-4">
          {Object.entries(cart).map(([book, qty]) => (
            <li key={book} className="flex justify-between items-center border-b py-2">
              <span>{book}: {qty} เล่ม</span>
              <div>
                <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded" onClick={() => updateCart(book, qty + 1)}>+</button>
                <button className="bg-gray-300 text-gray-700 px-2 py-1 mx-2 rounded" onClick={() => updateCart(book, qty - 1)}>-</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => updateCart(book, 0)}>ลบ</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!isEmpty && (
        <>
          <h2 className="mb-4 text-2xl font-bold">สรุปยอดชำระ</h2>
          <p>ราคารวม: {totalPrice} บาท</p>
          <p>ส่วนลด: {discount} บาท</p>
          <p>ราคาสุทธิ: {finalPrice} บาท</p>
        </>
      )}
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded mt-3 inline-block">กลับไปเลือกหนังสือ</Link>
    </div>
  );
};

export default CartPage;