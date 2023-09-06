import React from 'react'
import NavBar from '../Component/NavBar'
import CategoryMenu from '../Component/CategoryMenu';
import FoodItems from '../Component/FoodItems';
import { Cart } from '../Component/Cart';

const Home = () => {
  return (
    <div>
      <NavBar />
      <CategoryMenu/>
      <FoodItems/>
      <Cart/>
    </div>
  );
}

export default Home