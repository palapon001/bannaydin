import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cart, calculateTotal, updateCart, deleteCart }) => {
  const {totalPrice, discount, finalPrice} = calculateTotal
  const isEmpty = Object.keys(cart).length === 0;

  return (
    <div className="container mx-auto mt-5 ">
      <div className="bg-white shadow-md rounded-lg overflow-hidden p-5 mb-5">
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
      </div>
      <div className="mb-3 text-red-500 px-4 py-3 rounded relative" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "12px" }}>
        <p>*ซื้อหนังสือไม่ซ้ำกัน 2 เล่ม จะได้รับส่วนลด 10% ของ 2 เล่มนั้น</p>
        <p>*ซื้อหนังสือไม่ซ้ำกัน 3 เล่ม จะได้รับส่วนลด 20% ของ 3 เล่มนั้น</p>
        <p>*ซื้อหนังสือไม่ซ้ำกัน 4 เล่ม จะได้รับส่วนลด 30% ของ 4 เล่มนั้น</p>
        <p>*ซื้อหนังสือไม่ซ้ำกัน 5 เล่ม จะได้รับส่วนลด 40% ของ 5 เล่มนั้น</p>
        <p>*ซื้อหนังสือไม่ซ้ำกัน 6 เล่ม จะได้รับส่วนลด 50% ของ 6 เล่มนั้น</p>
        <p>*ซื้อหนังสือไม่ซ้ำกัน 7 เล่ม จะได้รับส่วนลด 60% ของ 7 เล่มนั้น</p>
      </div>
      {!isEmpty && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative text-center">
          <h2 className="mb-4 text-2xl font-bold">สรุปยอดชำระ</h2>
          <p>ราคารวม: {totalPrice} บาท</p>
          <p>ส่วนลด: {discount} บาท</p>
          <p>ราคาสุทธิ: {finalPrice} บาท</p>
        </div>
      )}
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded mt-3 inline-block">กลับไปเลือกหนังสือ</Link>
      {!isEmpty && (
        <button className="bg-green-500 text-white px-4 py-2 ml-5 rounded mt-3 inline-block" onClick={() => deleteCart()}>ซื้อ</button>
      )}
    </div>
  );
};

export default CartPage;