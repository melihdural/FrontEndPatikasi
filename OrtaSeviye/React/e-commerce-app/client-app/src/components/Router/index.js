import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from "../Navbar";
import Content from "../Content";
import Signin from "../../pages/Auth/Signin";
import Signup from "../../pages/Auth/Signup";
import Products from "../../pages/Products";
import ProductDetail from "../../pages/ProductDetail";

function RouterManager(props) {
    return (
        <RouterProvider router={router}/>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Navbar/>
                <Products/>
            </div>
        ),
    },
    {
        path: "about",
        element:
            <div>
                <Navbar/>
                <Content header={"About"}></Content>
            </div>,
    },
    {
        path: "users",
        element:
            <div>
                <Navbar/>
                <Content header={"Users"}></Content>
            </div>,
    },
    {
        path: "signin",
        element:
            <div>
                <Navbar/>
                <Signin/>
            </div>,
    },
    {
        path: "signup" ,
        element:
            <div>
                <Navbar/>
                <Signup/>
            </div>,
    },
    {
        path: "/product/:product_id" ,
        element:
            <div>
                <Navbar/>
                <ProductDetail />
            </div>,
    },
]);

export default RouterManager;