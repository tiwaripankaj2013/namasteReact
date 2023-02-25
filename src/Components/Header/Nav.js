import React,{useState} from 'react'
import { UserIcon, BellIcon, ShoppingBagIcon, ReceiptPercentIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);
+  console.log(cartItems);
    return (
        <ul className='list-none text-right flex items-center'>
            <li><Link to="/faq">FAQ</Link> </li>
            <li className='px-1 inline-block' key="about"><Link className=' text-white' to="/about">About Us</Link>
                <ul className='list-none hidden'>
                    <li>
                        <Link to="/about/details">Details</Link>
                    </li>
                </ul>
            </li>
            <li className='px-1 inline-block' key="discount"><ReceiptPercentIcon className='w-5 h-5 text-white' /></li>
            <li className='px-1 inline-block' key="cart"><Link to="/cart" data-testid="cart"><ShoppingBagIcon className='w-5 h-5 text-white' />{cartItems.length}</Link></li>
            <li className='px-1 inline-block' key="notification"><BellIcon className='w-5 h-5 text-white' /></li>
            {!isLoggedIn ? (<li className='px-1 inline-block text-white cursor-pointer'><Link to="/login">Sign In</Link></li>) :
                (<li className='px-1 inline-block cursor-pointer group relative' key="user">
                    <UserIcon className='w-5 h-5 text-white' />
                    <ul className=' bg-violet-700 text-left list-none z-10 hidden group-hover:block absolute top-5 right-0 text-white'>
                        <li className='px-3 py-1 hover:bg-purple-700' key="orders" >My Oorders</li>
                        <li className='px-3 py-1 hover:bg-purple-700' key="setting" >Setting</li>
                        <li className='px-3 py-1 cursor-pointer hover:bg-purple-700' key="logout" onClick={() => setIsLoggedIn(false)}>Logout</li>
                    </ul>
                </li>)}
            <li className='px-3 py-1 cursor-pointer hover:bg-purple-700' key="logout"><Link to="/contact">Contact</Link></li>
        </ul>
    )
}

export default Nav