import React from 'react';
import {HomeIcon, UserIcon,BellIcon,MagnifyingGlassIcon} from '@heroicons/react/24/outline';
export const  Header = () =>{
  return (
    <header className='flex py-2 sticky top-0 px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-800 justify-center'>
        <div className='w-1/4'>
            <HomeIcon className='w-10 h-10 text-white' />
        </div>
        <div className='w-3/6'>
          <div className='rounded-lg border-gray-400 relative shadow-lg w-4/5 mx-auto'>
            <input type="text" className='text-white bg-white/[0.20]  text-base w-full rounded-lg px-4 py-2 outline-none placeholder:text-white' placeholder='Search for Products'/>
            <button className=' absolute right-1 top-2 bg-transparent pr-1'><MagnifyingGlassIcon className='text-white w-6 h-6'/></button>
          </div>

        </div>
        <div className='w-1/4 flex items-center flex-row-reverse'>
          <ul className='list-none text-right'>
            <li className='px-1 inline-block' key="notification"><BellIcon className='w-5 h-5 text-white'/></li>
            <li className='px-1 inline-block cursor-pointer group relative' key="user">
              <UserIcon className='w-5 h-5 text-white'/>
            <ul className=' bg-violet-700 text-left list-none hidden group-hover:block absolute top-5 right-0 text-white'>
              <li className='px-3 py-1 hover:bg-purple-700' key="login">Login</li>
              <li className='px-3 py-1 hover:bg-purple-700' key="setting" >Setting</li>
              <li className='px-3 py-1 hover:bg-purple-700' key="logout">Logout</li>
            </ul>
            </li>
          </ul>
        </div>
    </header>
  )
}

