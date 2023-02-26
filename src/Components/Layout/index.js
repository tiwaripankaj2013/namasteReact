import { useState, } from 'react';
import ShimmerCards from '../common/ShimmerCard';
import { Restorent } from '../common/Restorent';
import { GridView } from '../common/GridView';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Banner } from '../Banner/Index';
import { IMG_CDN_URL, CrausalData } from '../../../constant';
import { filterData } from '../../utils/useRestorent';
import { useAllRestaurents } from '../../utils/helper';
const Layout = () => {
  const [crausalData, setCrausalData] = useState(CrausalData.data.data.cards);
  const [searchText, setSearchText] = useState('');
 

  const { allRestaurant, error, loading, filterRestaurant, setFilterRestaurant } = useAllRestaurents();
  if (error) {
    return (
      <h2 className=' text-red-700'>{error.message}</h2>
    )
  }


  /* data fatching from api show loader */
  return loading?(<ShimmerCards data={12} />):(
    <>
      <div className='rounded-lg border-gray-400 relative shadow-lg w-4/5 mx-auto bg-indigo-500'>
        <input type="text" data-testid="search-input" className='text-white bg-white/[0.20]  text-base w-full rounded-lg px-4 py-2 outline-none placeholder:text-white'
          value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Find your favourite Restorent' />
        <button data-testid="search-btn" className='absolute right-1 top-2 bg-transparent pr-1' onClick={() => { 
          const data = filterData(searchText, allRestaurant);
          // update the state - restaurants
          setFilterRestaurant(data);
        }}>
          <MagnifyingGlassIcon className='text-white w-6 h-6' />
        </button>
      </div>
      <Banner staticPath={IMG_CDN_URL} crausalData={crausalData} />
      <GridView >
        {filterRestaurant.map((restaurant) => <Restorent key={restaurant?.data?.id} {...restaurant.data} /> )}
      </GridView>
    </>
  )
}
export default Layout;