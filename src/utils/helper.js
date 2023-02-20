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

export const callApi = (filterdRestaurants,setFilterdRestaurants) => {
    const [data , setData] = useState(null)
    useEffect(()=> {
        getRestaurant();
    },[]);
    async function getRestaurant(){
        const data =  await fetch(RESTORENTS_LiNK);
        const json  = await data.json();
        setFilterdRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setData(json);
    }
    return data;
} 