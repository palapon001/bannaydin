import '@testing-library/jest-dom';
import { calculateTotal } from './App';

const books = [
  { name: "แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์", price: 100 },
  { name: "แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ", price: 100 },
  { name: "แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน", price: 100 },
  { name: "แฮร์รี่ พอตเตอร์กับถ้วยอัคนี", price: 100 },
  { name: "แฮร์รี่ พอตเตอร์กับภาคีนกฟีนิกซ์", price: 100 },
  { name: "แฮร์รี่ พอตเตอร์กับเจ้าชายเลือดผสม", price: 100 },
  { name: "แฮร์รี่ พอตเตอร์กับเครื่องรางยมทูต", price: 100 },
];

const discounts = {
  2: 0.1,
  3: 0.2,
  4: 0.3,
  5: 0.4,
  6: 0.5,
  7: 0.6,
};

test('calculate total for 2 different books with 10% discount', () => {
  const cart = {
    "แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์": 1,
    "แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ": 1,
  };
  const { totalPrice, discount, finalPrice } = calculateTotal(cart, books, discounts);

  expect(totalPrice).toBe(200);
  expect(discount).toBe(20); 
  expect(finalPrice).toBe(180); 
});

test('calculate total for 3 different books with 20% discount', () => {
    const cart = {
        "แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์": 1,
        "แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ": 1,
        "แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน": 1,
      };
  const { totalPrice, discount, finalPrice } = calculateTotal(cart, books, discounts);

  expect(totalPrice).toBe(300); // 100 + 100 + 100
  expect(discount).toBe(60); // 20% of 300
  expect(finalPrice).toBe(240); // 300 - 60
});

test('calculate total for 4 different books with 30% discount', () => {
    const cart = {
      "แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์": 1,
      "แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ": 1,
      "แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน": 1,
      "แฮร์รี่ พอตเตอร์กับถ้วยอัคนี": 1,
    };
    const { totalPrice, discount, finalPrice } = calculateTotal(cart, books, discounts);
  
  expect(totalPrice).toBe(400); // 100 * 4
  expect(discount).toBe(120); // 30% of 400
  expect(finalPrice).toBe(280); // 400 - 120
  });

  test('calculate total for 5 different books with 40% discount', () => {
    const cart = {
      "แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์": 1,
      "แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ": 1,
      "แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน": 1,
      "แฮร์รี่ พอตเตอร์กับถ้วยอัคนี": 1,
      "แฮร์รี่ พอตเตอร์กับภาคีนกฟีนิกซ์": 1,
    };
    const { totalPrice, discount, finalPrice } = calculateTotal(cart, books, discounts);
  
    expect(totalPrice).toBe(500); // 100 * 5
    expect(discount).toBe(200); // 40% of 500
    expect(finalPrice).toBe(300); // 500 - 200
  });

  test('calculate total for 6 different books with 50% discount', () => {
    const cart = {
      "แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์": 1,
      "แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ": 1,
      "แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน": 1,
      "แฮร์รี่ พอตเตอร์กับถ้วยอัคนี": 1,
      "แฮร์รี่ พอตเตอร์กับภาคีนกฟีนิกซ์": 1,
      "แฮร์รี่ พอตเตอร์กับเจ้าชายเลือดผสม": 1,
    };
    const { totalPrice, discount, finalPrice } = calculateTotal(cart, books, discounts);
  
    expect(totalPrice).toBe(600); // 100 * 6
    expect(discount).toBe(300); // 50% of 600
    expect(finalPrice).toBe(300); // 600 - 300
  });

  test('calculate total for 7 different books with 60% discount', () => {
    const cart = {
      "แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์": 1,
      "แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ": 1,
      "แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน": 1,
      "แฮร์รี่ พอตเตอร์กับถ้วยอัคนี": 1,
      "แฮร์รี่ พอตเตอร์กับภาคีนกฟีนิกซ์": 1,
      "แฮร์รี่ พอตเตอร์กับเจ้าชายเลือดผสม": 1,
      "แฮร์รี่ พอตเตอร์กับเครื่องรางยมทูต": 1,
    };
    const { totalPrice, discount, finalPrice } = calculateTotal(cart, books, discounts);
  
    expect(totalPrice).toBe(700); // 100 * 7
    expect(discount).toBe(420); // 60% of 700
    expect(finalPrice).toBe(280); // 700 - 420
  });

