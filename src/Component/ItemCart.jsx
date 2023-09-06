import React from 'react'
import { useDispatch } from 'react-redux';
import { AiOutlinePlus, AiOutlineMinus,AiFillDelete } from "react-icons/ai";
import {removeFromCart ,incrementQty,decrementQty} from '../Redux/Slices/CartSlices';
import { toast } from 'react-hot-toast';


const ItemCart = ({id,name,price,qty,img}) => {
  const dispatch =useDispatch();
  return (
    <div className="flex gap-2 shadow-md p-5 mb-6 rounded-lg">
      <AiFillDelete
        onClick={() =>{
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(` ${name} Removed`, {
            icon: "👋",
          }); 
        }} 
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div>
        <h2 className="font-bold text-gray-800">{name}</h2>

        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-1 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({id})):(qty=0)}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => 
                qty >= 1?
                dispatch(incrementQty({id})):(qty=0)}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart 