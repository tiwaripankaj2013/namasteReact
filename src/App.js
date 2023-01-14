import React, {useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import {RestorentData} from '../constant';
import RestorentList from "./Components/common/RestorentList";
import {Footer} from "./Components/Footer";

const Container = () => {
    // RestorentData is static json data 
    const [allRestorent,setAllRestorent] = useState(RestorentData);

return (
    <div className="container">
        <Header/>
        {/* <RestorentList restorents={RestorentData} working But when pass date 
        useState allRestorent show error properties of null useState */}
        <RestorentList restorents={allRestorent} />
        <Footer/>
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Container());
