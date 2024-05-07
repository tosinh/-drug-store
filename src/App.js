import React from 'react';
import { BrowserRouter, RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Product } from './Components/Product/Product.jsx';
import { ProductDetails } from './Components/ProductDetails/ProductDetails.jsx';
import { Contact } from './Components/Contact/Contact';
import { Home } from './Components/Home/Home.jsx';
import { Cart } from './Components/Cart/Cart.jsx'
import { ShopContext, ShopContextProvider } from "./Contexts/Cart.jsx";
import Login from './Components/Login/Login.js';


function App()
{
    const Layout = () => (
        <div className="main">
            <Navbar />
            <div className="container">
                <div className="contentContainer">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
    const router = createBrowserRouter([
        {
            path: "/",
            element:
                <ShopContextProvider>
                    <Layout />
                </ShopContextProvider>
            ,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/product",
                    element: <Product />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/cart", element:
                        <Cart />
                },
                {
                    path: "/product/:id",
                    element:
                        <ProductDetails />
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;