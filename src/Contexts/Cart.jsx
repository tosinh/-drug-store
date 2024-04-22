import React, { createContext, useState } from "react";
import { data } from "../Components/Product/Product.js";

const { products } = data;

export const ShopContext = createContext(null);

const getDefaultCart = () =>
{
    let cart = {};
    for (const product of products)
    {
        cart[product.id] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) =>
{
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () =>
    {
        let totalAmount = 0;
        for (const itemId in cartItems)
        {
            if (cartItems[itemId] > 0)
            {
                const itemInfo = products.find((product) => product.id === parseInt(itemId));
                if (itemInfo)
                {
                    totalAmount += cartItems[itemId] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) =>
    {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) =>
    {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) =>
    {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const checkout = () =>
    {
        setCartItems(getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};