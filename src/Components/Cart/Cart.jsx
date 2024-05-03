import React, { useContext } from "react";
import { ShopContext } from "../../Contexts/Cart.jsx";
import data from '../Product/Product.js';
import { CartItem } from "./CartItem.jsx";
import { useNavigate } from "react-router-dom";
import emptyCartImage from '../Assest/cart-empty.png'

import "./Cart.css";

export const Cart = () =>
{
    const { products = [] } = data;
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    // const totalAmount = getTotalCartAmount();
    // console.log(totalAmount);

    const navigate = useNavigate();
    const itemCount = Object.values(cartItems).reduce((acc, count) => acc + count, 0);

    return (
        <div className="cart">
            {itemCount === 0 ? (
                <div className="empty-cart">
                    <img src={emptyCartImage} alt="Empty Cart" />
                    {/* <button onClick={() => navigate("/product")}>Tiếp tục mua sắm</button> */}
                </div>
            ) : (
                <div className="cart">
                    {products.map((product) =>
                    {
                        if (cartItems[product.id] !== 0)
                        {
                            return <CartItem data={product} />;
                        }
                    })}
                </div>
            )}
            {itemCount > 0 && (
                <div className="checkout">
                    <p> Subtotal: ${getTotalCartAmount()} </p>
                    <button onClick={() => navigate("/product")}> Tiếp tục mua sắm </button>
                    <button
                        onClick={() =>
                        {
                            checkout();
                            navigate("/checkout");
                        }}
                    >
                        {" "}
                        Thanh toán{" "}
                    </button>
                </div>
            )}
        </div>
    );
};