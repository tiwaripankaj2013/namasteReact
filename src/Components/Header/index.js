import React, { useState } from 'react';
import {UserIcon, BellIcon, MagnifyingGlassIcon,
  ShoppingBagIcon, ReceiptPercentIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo.png';

function filterData (searchText,restaurants){
  const filterData  = restaurants.filter((restaurant)=>{
    restaurant?.data?.name.toLowerCase()?.includes(searchText.toLowerCase());
  });
  return filterData;
}
export const Header = ({allRestaurants,setFilteredRestaurants}) => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <header className='flex py-2 sticky top-0 px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-800 justify-center'>
      <div className='w-1/4'>
        {/* <HomeIcon className='w-10 h-10 text-white' /> */}
        <img src={logo} title='Khana Khajana' className='w-16' />
      </div>
      <div className='w-3/6'>
        <div className='rounded-lg border-gray-400 relative shadow-lg w-4/5 mx-auto'>
          <input type="text" className='text-white bg-white/[0.20]  text-base w-full rounded-lg px-4 py-2 outline-none placeholder:text-white' 
          value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Find your favourite Restorent' />
          <button className=' absolute right-1 top-2 bg-transparent pr-1' onClick={()=>{
              const data = filterData(searchText,allRestaurants,);
              setFilteredRestaurants(data);
            }}>
            <MagnifyingGlassIcon className='text-white w-6 h-6' />
            
          </button>
        </div>

      </div>
      <div className='w-1/4 flex items-center flex-row-reverse'>
        <ul className='list-none text-right flex items-center'>
          <li className='px-1 inline-block' key="discount"><ReceiptPercentIcon className='w-5 h-5 text-white' /></li>
          <li className='px-1 inline-block' key="cart"><ShoppingBagIcon className='w-5 h-5 text-white' /></li>
          <li className='px-1 inline-block' key="notification"><BellIcon className='w-5 h-5 text-white' /></li>
         {!isLoggedIn ?(<li className='px-1 inline-block text-white cursor-pointer' onClick={()=>setIsLoggedIn(true)}>Sign In</li>): 
         (<li className='px-1 inline-block cursor-pointer group relative' key="user">
            <UserIcon className='w-5 h-5 text-white' />
            <ul className=' bg-violet-700 text-left list-none z-10 hidden group-hover:block absolute top-5 right-0 text-white'>
              <li className='px-3 py-1 hover:bg-purple-700' key="orders" >My Oorders</li>
              <li className='px-3 py-1 hover:bg-purple-700' key="setting" >Setting</li>
              <li className='px-3 py-1 cursor-pointer hover:bg-purple-700' key="logout" onClick={() =>setIsLoggedIn(false)}>Logout</li>
            </ul>
          </li>)}
         
        </ul>
      </div>
    </header>
  )
}

