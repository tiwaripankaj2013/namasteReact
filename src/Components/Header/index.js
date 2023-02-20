import React, { useState, useContext } from 'react';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useOnline } from '../../utils/helper';
import { UserContext } from '../../utils/UserContext';
import Nav from './Nav';

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) => {
    restaurant?.data?.name.toLowerCase()?.includes(searchText.toLowerCase());
  });
  return filterData;
}
export const Header = ({ allRestaurants, setFilteredRestaurants }) => {

  const [searchText, setSearchText] = useState('');
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

 


  return (
    <header className='flex py-2 sticky top-0 px-5 bg-gradient-to-r z-50 from-indigo-500 via-purple-500 to-purple-800 justify-center'>
      <div className='w-2/12'>
        <Link to='/'>
          <img src={logo} title='Khana Khajana' className='w-16' />
        </Link>
        {
          !isOnline ? <span className=' inline-block h-1 w-1 p-2 rounded-full bg-red-700'></span> : <span className='p-2 inline-block h-1 w-1 rounded-full bg-green-700'></span>
        }
      </div>
      <div className='w-5/12'>
        <div className='rounded-lg border-gray-400 relative shadow-lg w-4/5 mx-auto'>
          <input type="text" className='text-white bg-white/[0.20]  text-base w-full rounded-lg px-4 py-2 outline-none placeholder:text-white'
            value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Find your favourite Restorent' />
          <button className=' absolute right-1 top-2 bg-transparent pr-1' onClick={() => {
            const data = filterData(searchText, allRestaurants,);
            setFilteredRestaurants(data);
          }}>
            <MagnifyingGlassIcon className='text-white w-6 h-6' />

          </button>
        </div>
        <p className=' text-orange-600'>{user.name}</p>
      </div>
      <div className='w-5/12 flex items-center flex-row-reverse'>
        <Nav/>
      </div>
    </header>
  )
}

