import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import LoginPage from "./Components/Login";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import RestaurantMenu from './Components/common/RestaurantMenu';
import { About } from "./Components/About";
import Details from "./Components/Details";
import Contact from "./Components/Contact";
const DetailsServices = {
    title:'Heading Details',
    services:"services"
}
const App = () => {
    // RestorentData is static json data 
    return (
        <div className="container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: 'Not found',
        children: [
            {
                path: '/',
                element: <Layout />,
            },
            {
                path: "/restaurant/:retaurantId",
                element: <RestaurantMenu />,
            },
            {
                path:"login",
                element:<LoginPage />
            },
            /* / consiodering from root localhost:1234/about */
            {
                path:'/about',
                element:<About/>,
                children:[
                    {
                        path:"details",
                        element:<Details services={DetailsServices}/>
                    }
                ]
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    },
    {
        path :'hashRouter',
        element:<LoginPage/>
    }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
