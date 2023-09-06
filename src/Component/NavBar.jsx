import React from 'react'
import { useDispatch } from 'react-redux';
import {setSearch} from "../Redux/Slices/SearchSlice"

const NavBar = () => {
  const dispatch =useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 mb-5 mt-3">
      <div>
        <h3 className="text-3xl font-bold">{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className="font-bold text-2xl">
            Fresh Pizza
        </h1>
      </div>
      <div> 
        <input type="search" placeholder='Search here'
        autoComplete='off'
        id=''
        name='search'
        onChange={(e)=>dispatch(setSearch(e.target.value))}
        className="p-3 w-full border border-gray-400 text-sm rounded-sm outline-none lg:w-[25vw]"
        />
      </div>
    </nav>
  );
}

export default NavBar