// App.js
import React, { useState } from "react";
import NavigationBar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import CartPage from './components/CartPage';

const books = [
  { name: "แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์", image: "https://dh.lnwfile.com/_/dh/_raw/cq/u1/sk.jpg", price: 100 },
  { name: "แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ", image: "https://dh.lnwfile.com/_/dh/_raw/ll/sd/qx.jpg", price: 100 },
  { name: "แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน", image: "/h3.jpg", price: 100 },
  { name: "แฮร์รี่ พอตเตอร์กับถ้วยอัคนี", image: "https://dh.lnwfile.com/_/dh/_raw/zy/ac/jx.jpg", price: 100 },
  { name: "แฮร์รี่ พอตเตอร์กับภาคีนกฟีนิกซ์", image: "https://dh.lnwfile.com/_/dh/_raw/jn/kf/7g.jpg", price: 100 },
  { name: "แฮร์รี่ พอตเตอร์กับเจ้าชายเลือดผสม", image: "https://dh.lnwfile.com/_/dh/_raw/p4/6j/5o.jpg", price: 100 },
  { name: "แฮร์รี่ พอตเตอร์กับเครื่องรางยมทูต", image: "https://dh.lnwfile.com/_/dh/_raw/ua/lr/9g.jpg", price: 100 },
];

const discounts = {
  2: 0.1, // 10%
  3: 0.2, // 20%
  4: 0.3, // 30%
  5: 0.4, // 40%
  6: 0.5, // 50%
  7: 0.6, // 60%
};

function App() {
  const [cart, setCart] = useState({});
  const [alert, setAlert] = useState(null);

  const deleteCart = () => {
    setCart({});
    setAlert("ซื้อสำเร็จ!");
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const addToCart = (book, quantity, navigate, buy = false) => {
    setCart((prevCart) => ({
      ...prevCart,
      [book]: (prevCart[book] || 0) + quantity,
    }));
    if (buy) {
      navigate('/cart');
    }
    else {
      setAlert(`เพิ่ม ${book} ลงในตะกร้าแล้ว!`);
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    }
  };

  const updateCart = (book, qty) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (qty <= 0) {
        delete updatedCart[book];
      } else {
        updatedCart[book] = qty;
      }
      return updatedCart;
    });
  };

  const resultCalculateTotal = calculateTotal(cart, books, discounts);
  const totalItemsInCart = Object.values(cart).reduce((total, qty) => total + qty, 0);

  return (
    <Router>
      <NavigationBar cartItemCount={totalItemsInCart} />

      <div className="container mx-auto p-4" style={{ fontFamily: "'Kanit', sans-serif" }}>
        {alert && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">{alert}</div>}
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} calculateTotal={resultCalculateTotal} updateCart={updateCart} deleteCart={deleteCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

const HomePage = ({ addToCart }) => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState(books.reduce((index, book) => {
    index[book.name] = 0;
    return index;
  }, {}));

  const addQuantity = (bookName) => {
    setQuantities({
      ...quantities,
      [bookName]: quantities[bookName] + 1
    });
  };

  const removeQuantity = (bookName) => {
    setQuantities({
      ...quantities,
      [bookName]: Math.max(0, quantities[bookName] - 1)
    });
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-center mb-4 text-2xl font-bold">โปรโมชั่นหนังสือ Harry Potter</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        {books.map((book) => (
          <div key={book.name} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={book.image} className="w-full h-52 object-cover" alt={book.name} />
            <div className="p-4">
              <h5 className="text-lg font-bold">{book.name}</h5>
              <p className="text-gray-700 my-2">
                หนังสือชุด Harry Potter เหมาะสำหรับแฟนๆ ที่ชื่นชอบเรื่องราวแห่งเวทมนตร์
              </p>
              <div className="row flex justify-center">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => removeQuantity(book.name)}
                >
                  -
                </button>
                <p className="text-gray-700 mx-4 my-2">
                  {quantities[book.name]}
                </p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => addQuantity(book.name)}
                >
                  +
                </button>
              </div>

              <div className="row flex justify-center">
                <button
                  className={`px-4 py-2 mt-3 rounded w-auto ${quantities[book.name] === 0 ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
                  onClick={() => {
                    addToCart(book.name, quantities[book.name], navigate, false);
                    setQuantities({ ...quantities, [book.name]: 0 });
                  }}
                  disabled={quantities[book.name] === 0}
                >
                  เพิ่มลงในตะกร้า
                </button>
                <button
                  className={`px-4 py-2 mt-3 ml-2 rounded w-auto ${quantities[book.name] === 0 ? 'bg-gray-200' : 'bg-green-500 text-white'}`}
                  onClick={() => {
                    addToCart(book.name, quantities[book.name], navigate, true);
                    setQuantities({ ...quantities, [book.name]: 0 });
                  }}
                  disabled={quantities[book.name] === 0}
                >
                  ซิ้อสินค้า {book.price * quantities[book.name]} บาท
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

export const calculateTotal = (cart, books, discounts) => {
  let updatedCart = { ...cart }; // Make a copy of the cart to work with
  let totalPrice = 0;
  let discount = 0;

  while (Object.keys(updatedCart).length > 0) {
    const uniqueBooks = Object.keys(updatedCart).filter((book) => updatedCart[book] > 0);
    const groupSize = Math.min(uniqueBooks.length, 7);
    const groupDiscount = discounts[groupSize] || 0;

    uniqueBooks.forEach((book) => {
      const bookPrice = books.find((b) => b.name === book).price;
      totalPrice += bookPrice;
      discount += bookPrice * groupDiscount;

      updatedCart[book] -= 1;
      if (updatedCart[book] === 0) {
        delete updatedCart[book];
      }
    });
  }

  return { totalPrice, discount, finalPrice: totalPrice - discount };
};