import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import {RestorentData} from './constant';
import RestorentList from "./Components/common/RestorentList";
import {Footer} from "./Components/Footer";

const Container = () => {
return (
    <div className="container">
        <Header/>
        <RestorentList restorents={ RestorentData} />
        <Footer/>
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Container());
