import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import LoginPage from "./Components/Login";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import RestaurantMenu from './Components/common/RestaurantMenu';
import { About } from "./Components/About";
import Details from "./Components/Details";
import ShimmerCards from "./Components/common/ShimmerCard";
import Faq from "./Components/Faq";
import { UserContext } from "./utils/UserContext";
import { FaqData } from "../constant";
const Contact = lazy(() => import("./Components/Contact"));
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./Components/Cart";
const DetailsServices = {
    title: 'Heading Details',
    services: "services"
}
const App = () => {
    const [user, setUser] = useState({
        name: "Rakesh",
        email: "rakesh@gmail.com"
    })
    // RestorentData is static json data 
    return (
        <Provider store={store}>
            <UserContext.Provider value={{
                user: user,
                FaqData,
                setUser
            }}>
                <div className="xl:container mx-auto">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
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
                path: "login",
                element: <LoginPage />
            },
            /* / consiodering from root localhost:1234/about */
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path: "details",
                        element: <Details services={DetailsServices} />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },

            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/cart",
                element:<Cart/>
            }

        ]
    },
    {
        path: 'hashRouter',
        element: <Suspense fallback={() => <ShimmerCards />}><LoginPage /></Suspense>
    }

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
