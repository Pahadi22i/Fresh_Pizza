import React, { useState } from 'react';
import ItemCart from './ItemCart';
import {IoMdClose} from 'react-icons/io';
import {useSelector} from 'react-redux';
import {MdShoppingCart} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';


export const Cart = () => {
  const [active,setActiveCart] = useState(false);
  const cartItems =useSelector((state)=>state.cart.cart);
  const totalItem =cartItems.reduce((totalQty ,item)=> totalQty + item.qty,0)
  const totalPrice =cartItems.reduce((total ,item)=> total + item.qty * item.price, 0)
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw]  bg-white h-full p-5 ${
          active ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => {
              setActiveCart(!active);
            }}
            className="border border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ?  cartItems.map((food) => {
            return (
              <ItemCart
                key={food.id}
                id={food.id}
                name={food.name}
                qty={food.qty}
                img={food.img}
                price={food.price}
              />
            );
          }): (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your Cart is empty
          </h2>
        )}

        <div className="absolute bottom-0 p-5 ">
          <h3 className="font-semibold text-gray-800">Item:{totalItem}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount:{totalPrice}
          </h3>
          <hr className="w-[90vw] lg:[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 py-2 font-bold rounded-lg lg:w-[18vw] w-[90vw] mb-5"
          >
            CheckOut
          </button>
        </div>
      </div>
      <MdShoppingCart
        onClick={() => setActiveCart(!active)}
        className={`bg-white rounded-full shadow-md text-5xl fixed bottom-4 right-4 p-3 ${
          totalItem > 0 && "animate-bounce delay-500 transition-all"
        } `}
      />
    </>
  );
}
