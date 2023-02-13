import { useEffect,useState } from "react";
import { FETCH_MENU } from "../../constant";
const useRestaurent = (retaurantId) =>{
    const [restaurant, setrestaurant] = useState(null);
useEffect(() => {
  getRestaurantInfo();
}, []);
async function getRestaurantInfo() {
  const data = await fetch(FETCH_MENU + retaurantId);
  const json = await data.json();
  setrestaurant(json.data);
}
return restaurant;
}
export {useRestaurent};

export const filterData = (searchText,restaurents)=>{
  const filterData = restaurents.filter((restaurant)=>{
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
  });
  return filterData;
}