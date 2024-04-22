import React, { useContext } from "react";
import { ShopContext } from "../../Contexts/Cart.jsx";

export const CartItem = (props) =>
{
    const { id, name, price, url } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={url} />
            <span>{name}</span>
            <div >{price} đ</div>
            <div className="count">
                <button id="button-remove" onClick={() => removeFromCart(id)}> - </button>
                <input
                    value={cartItems[id]}
                    onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                />
                <button id="button-add" onClick={() => addToCart(id)}> + </button>
            </div>
            <div >{price} đ</div>
            <div >Xóa</div>
        </div>
    );
};