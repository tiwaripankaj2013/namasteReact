import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../../constant";
import { addItem } from "../../utils/cartSlice";
import { useRestaurent } from "../../utils/useRestorent";

const RestaurantMenu = ({ }) => {
  const { retaurantId } = useParams();
  const restaurant = useRestaurent(retaurantId);
  const dispatch = useDispatch();
  const addFoodItem = (item) =>{
    dispatch(addItem(item));
  }


  return (!restaurant)?<p>Loading..</p>:(
    <div className="flex">
      <div>
        <h1>Restraunt id: {retaurantId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name} <button className="bg-orange-600 text-white px-1 py-2" onClick={()=>addFoodItem(item)}>Add</button></li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default RestaurantMenu;