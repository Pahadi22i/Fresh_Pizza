import React from "react";
import { useDispatch } from "react-redux";
import {addToCart} from '../Redux/Slices/CartSlices'
import { AiFillStar } from "react-icons/ai";


const FoodCart = ({id,name,price,rating,img,desc,handleToast}) => {
  const dispatch =useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="flex text-sm justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="font-normal text-sm">
        {desc}
      </p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button onClick={()=>{
          dispatch(addToCart({
            id,name,price,rating,qty:1,img
          }));
          handleToast(name);
        }} className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
