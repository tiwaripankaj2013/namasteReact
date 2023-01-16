import { useState } from 'react';
import {RestorentData} from '../../../constant';
import RestorentList from "../common/RestorentList";

const Layout = () => {
    const [restaurants,setRestorents] = useState(RestorentData);
    async function getRestorent(){
        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json  = await data.json();
    } 
    return(
        <div>
            <RestorentList restorents={restaurants} />
        </div>
    )
}
export default Layout;