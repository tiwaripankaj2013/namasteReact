import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
// const Header = () => <h1>Namaste React </h1>
const heading1 = (<h1>Heading1 </h1>);//element
const Heading2 = () => <h2>Heaading2 Welcome to the  </h2> ;
const SubTitle = () => (
    <div className="text-red">
        <p>Welcome to the SubTitle</p>
    </div>
)
const Container = () => {
return (
    <div className="container">
        <Header/>
        {heading1}
        {SubTitle()}
        <Heading2/>
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Container());
