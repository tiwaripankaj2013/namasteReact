import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import RestaurantMenu from './Components/common/RestaurantMenu';
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
        ]
    },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
