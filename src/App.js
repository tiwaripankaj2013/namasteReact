import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import {Footer} from "./Components/Footer";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";

const Container = () => {
    // RestorentData is static json data 

return (
    <div className="container">
        <Header/>
        {/* <RestorentList restorents={RestorentData} working But when pass date 
        useState allRestorent show error properties of null useState */}
        <Layout />
        <Footer/>
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Container());
