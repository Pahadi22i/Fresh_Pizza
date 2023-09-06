import { useState, useEffect } from "react";
import FoodData from "../data/FoodData";
import { useDispatch,useSelector } from "react-redux";
import { setCategory } from "../Redux/Slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategory = () => {
    const uniqueCategory = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategory);
    console.log(uniqueCategory);
  };

  useEffect(() => {
    listUniqueCategory();
  }, []);
   
   const dispatch = useDispatch();
   const selectedCategory =useSelector((state)=>state.category.category);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold"> Find the best food</h3>
      <div className="my-6 flex gap-3 overflow-x-scroll scoll-smooth">
        <button
          onClick={() => dispatch(setCategory("ALL"))}
          className={`px-3 py-2 text-center bg-gray-400 rounded-lg hover:bg-green-500 text-white  lg:overflow-x-hidden ${selectedCategory === "ALL" && "bg-green-500 text-white"}`}
        >
          ALL
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 text-center bg-gray-400 rounded-lg hover:bg-green-500 text-white  lg:overflow-x-hidden ${selectedCategory === category && "bg-green-500 text-white"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryMenu