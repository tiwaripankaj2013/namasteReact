import {IMG_CDN_URL} from '../../../constant';

export const FoodCard = ({name,cloudinaryImageId,avgRating,price,description}) => {
  return (
    <div className="col-span-6 sm:col-span-2 lg:col-span-1">
  
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
          <p className='flex text-xs items-center justify-between'>
          <span className={parseFloat(avgRating)>=4? 'bg-green-700 text-white px-1': 'bg-orange-800 text-white px-1'}>{avgRating}</span>
          </p>
          <p>{description}</p>
          <p>₹:{price}/100</p>
        </div>
    </div>
  )
  }
