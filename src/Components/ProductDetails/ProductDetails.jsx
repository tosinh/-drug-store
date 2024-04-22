import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from "../../Contexts/Cart.jsx";


import data from '../Product/Product';

import './ProductDetails.css';
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { TbCalendarTime } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";

export const ProductDetails = () =>
{
    const { products } = data;
    const { id } = useParams();
    // console.log({ id })
    const [productData, setProductData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    const cartItemCount = cartItems[id];

    useEffect(() =>
    {
        setIsLoading(true);
        setError(null);
        const findProduct = () =>
        {
            const foundProduct = products.find((product) => product.id === id);
            setProductData(foundProduct);
        };
        findProduct();
        setIsLoading(false);
    }, [id, products]);

    const handleAddToCart = () =>
    {
        addToCart(id);
    }

    return (
        <div className="details">
            <div className="container">
                {isLoading ? (
                    <div>Loading product details...</div>
                ) : error ? (
                    <div>Error fetching product details: {error.message}</div>
                ) : productData ? (
                    <div className='row'>
                        <div className="col-5">
                            <img src={productData.url} alt={productData.name} />
                        </div>
                        <div className="col-7">
                            <div className="details-content">
                                <h2>{productData.name}</h2>
                                <div className="details-evaluate">
                                    <div>5.0
                                        <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                                    </div>
                                    <div>20 Đánh giá</div>
                                    <div>20 Đã Bán</div>
                                </div>
                                <div className='details-price'>
                                    <span>{productData.price} đ</span>
                                </div>
                                <div className="details-move">
                                    <span>Vận Chuyển</span>

                                    <div>
                                        <p> <TbCalendarTime /> Hàng Đặt Trước (có hàng sau 15 ngày)</p>
                                        <p> <FaShippingFast /> Miễn phí vận chuyển</p>
                                        <p> <FaShippingFast style={{ fill: '#fff' }} /> Vận Chuyển Tới</p>
                                        <p> <FaShippingFast style={{ fill: '#fff' }} /> Phí Vận Chuyển: 0đ</p>
                                    </div>
                                </div>
                                <div className='details-quantity'>
                                    <span>Số lượng:</span>
                                    <div className="count">
                                        <button id="button-remove" onClick={() => removeFromCart(id)}> - </button>
                                        <input
                                            value={cartItems[id]}
                                            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                                        />
                                        <button id="button-add" onClick={() => addToCart(id)}> + </button>
                                    </div>
                                    {/* {cartItemCount > 0 && <> {cartItemCount}</>} */}
                                </div>
                                <div className="details-button">
                                    <div className="add-cart" onClick={handleAddToCart}>
                                        <MdAddShoppingCart />
                                        <span>Thêm vào giỏ hàng</span>
                                    </div>
                                    <div className="add-cart">
                                        <span>Mua Ngay</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div>Product with ID "{id}" not found.</div>
                )}
            </div>
        </div>
    );
};