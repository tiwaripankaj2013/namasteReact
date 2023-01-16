import {IMG_CDN_URL} from '../../../constant';
import { Link } from 'react-router-dom';
import './Restorent.css';
export const Restorent = ({
   name, 
   cloudinaryImageId,avgRating,
   cuisines, aggregatedDiscountInfo,id,
   costForTwoString,deliveryTime }) => {
  return (
    <div className="col-span-6 sm:col-span-2 lg:col-span-1">
      <Link className="card hovercard group p-2 md:p-3 cursor-pointer block" to={'/restaurant/'+id}>
        <div className="relative overflow-hidden">
          <div className="fiximage blur-0 filter transition-all duration-500">
            <img
              alt={name}
              src={IMG_CDN_URL+cloudinaryImageId}
            />
          </div>
        </div>
        <div className="mt-4">
          <h5 className="mb-1 text-primary text-xl font-semibold leading-6">{name}</h5>
          <p className='text-xs text-gray-300 leading-3 mb-1'>{cuisines.slice(0,5).join(', ')}</p>
          <p className='flex text-xs items-center justify-between'>
          <span className={parseFloat(avgRating)>=4? 'bg-green-700 text-white px-1': 'bg-orange-800 text-white px-1'}>{avgRating}</span>
          <span className=' inline-block text-gray-200'>{deliveryTime}MINS</span>
          <span className=' inline-block text-gray-200'>{costForTwoString}</span></p>
          <p className=' text-orange-700 text-base'>{aggregatedDiscountInfo.shortDescriptionList[0].meta}</p>
        </div>
      </Link>
    </div>
  )
  }
