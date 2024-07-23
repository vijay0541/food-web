import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";

//to create routes.
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
//import provider
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";




//Layout
const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
            <Header/>
            <Outlet />
            </div>
        </Provider>
        
    )
};

//create routing config
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restraunt/:resId",
                element: <RestrauntMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);