import React from 'react'
import FoodCart from './FoodCart'
import FoodData from '../data/FoodData'
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from 'react-redux/';


const FoodItems = () => {
  const category =useSelector((state)=>state.category.category)
  const search = useSelector((state)=> state.search.search)
  const handleToast = (name) => toast.success(`Added ${name}`); 

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "ALL") {
            return food.name.toLowerCase().includes(search.toLowerCase())
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCart
            key={food.id}
            name={food.name}
            price={food.price}
            rating={food.rating}
            img={food.img}
            desc={food.desc}
            id={food.id}
            handleToast={handleToast}
          />
        ))}
        
      </div>
    </>
  );
}

export default FoodItems