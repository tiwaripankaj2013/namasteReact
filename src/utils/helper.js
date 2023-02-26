import { useEffect, useState } from "react"
import { RESTORENTS_LiNK, } from "../../constant";

export const useOnline = ()=>{
 const [isOnline,setIsOnline] = useState(true);

    useEffect(()=>{
        const handleOnline = ()=>{
            setIsOnline(true);
        }
        const handleOfline = ()=>{
            setIsOnline(false)
        }
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOfline);
        return () => {
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOfline);
        }
    },[]);
    return isOnline;
} ;

export const useAllRestaurents = () => {
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filterRestaurant,setFilterRestaurant] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null); 

    useEffect(() => {
      getRestaurantInfo();
    }, []);
  
  
    async function getRestaurantInfo() {
        try{
      const data = await fetch(RESTORENTS_LiNK);
      const res = await data.json();
    //   console.log(res);
      setAllRestaurant(res?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurant(res?.data?.cards[2]?.data?.data?.cards);
      setLoading(false);
      setError(null);
        }
        catch(err){
            setLoading(false);
            setError(err);
        }
    }
    return {allRestaurant,filterRestaurant,setFilterRestaurant,loading,error};
  }