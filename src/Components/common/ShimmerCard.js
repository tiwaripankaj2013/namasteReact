import { GridView } from './GridView';
export const ShimmerCard = () => {
    return(
        <div data-testid="shimmer" className="col-span-6 sm:col-span-2 lg:col-span-1">
        <div className="card hovercard group p-2 md:p-3">
          <div className="relative overflow-hidden">
            <div className="fiximage transition-all duration-500 bg-gray-400 h-60 animate-pulse">
            </div>
          </div>
          <div className="mt-4">
            <h5 className="mb-1 text-xl font-semibold leading-6 bg-gray-400 h-5 animate-pulse"></h5>
            <p className='text-xs text-gray-300 leading-3 mb-1 bg-gray-400 animate-pulse h-3'></p>
            <p className='flex text-xs items-center justify-between mb-1'>
            <span className=' inline-block text-gray-200 bg-gray-400 h-3 w-16 animate-pulse'></span>
            <span className=' inline-block text-gray-200 bg-gray-400 h-3 w-16 animate-pulse'></span>
            <span className=' inline-block text-gray-200 bg-gray-400 h-3 w-16 animate-pulse'></span>
            </p>
            <p className=' text-orange-700 text-base bg-gray-400 h-4 animate-pulse'></p>
          </div>
        </div>
      </div>
    )
}
const ShimmerCards = ({data}) => {
return(
  <GridView>
    {Array(data).fill().map((e,index)=><ShimmerCard key={index}/>)}
  </GridView>
)
}
export default ShimmerCards;