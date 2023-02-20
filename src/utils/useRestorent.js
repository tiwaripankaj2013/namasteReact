import { useEffect, useState } from "react";
import { FETCH_MENU, RESTORENTS_LiNK } from "../../constant";


// const useRestorents = () =>{
//   const [allRestaurants,setAllRestaurants]=useState([]);
//  async function getRestaurants(){
//   const data = await fetch(RESTORENTS_LiNK);
//   const json = await data.json();
//   setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//  }
// }
const useRestaurent = (retaurantId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);


  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU + retaurantId);
    const json = await data.json();
    setRestaurant(json.data);
  }
  return restaurant;
}


 const  filterData = (searchText, restaurants) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

export {useRestaurent,filterData, };