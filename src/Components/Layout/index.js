import { useEffect, useState } from 'react';
import ShimmerCards from '../common/ShimmerCard';
import { Restorent } from '../common/Restorent';
import { GridView } from '../common/GridView';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Banner } from '../Banner/Index';
import {IMG_CDN_URL,CrausalData} from '../../../constant';
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}
const Layout = () => {
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filterdRestaurants,setFilterdRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [crausalData,setCrausalData] = useState(CrausalData.data.data.cards);
    console.log(crausalData);
    // console.log(allRestaurants);
    useEffect(()=> {
        getRestaurant();
    },[]);
    async function getRestaurant(){
        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json  = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilterdRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        // setCrausalData(json?.data?.cards[1]?.data?.data?.cards);
    } 
    return (allRestaurants.length<=0)?<ShimmerCards data={12} />:(
        <>
        <div className='rounded-lg border-gray-400 relative shadow-lg w-4/5 mx-auto bg-indigo-500'>
          <input type="text" className='text-white bg-white/[0.20]  text-base w-full rounded-lg px-4 py-2 outline-none placeholder:text-white' 
          value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Find your favourite Restorent' />
          <button className=' absolute right-1 top-2 bg-transparent pr-1' onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants,);
            // update the state - restaurants
            setFilterdRestaurants(data);
          }}
          >
            <MagnifyingGlassIcon className='text-white w-6 h-6' />
            
          </button>
        </div>
        <Banner staticPath={IMG_CDN_URL} crausalData={crausalData} />
        <GridView>
        {filterdRestaurants.map((restaurant) => <Restorent key={restaurant.data.id} {...restaurant.data} />)}
      </GridView>
      </>
    )
}
export default Layout;