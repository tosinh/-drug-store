import React, { useState } from 'react';
import data from './Products.js'
import './Products.css'



export const Products = () =>
{
    const { products, danh_muc } = data;

    return (
        <div className='products'>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="category">
                            {data.danh_muc.map((danhMuc) => (
                                <div key={danhMuc.ten} className="danh-muc">
                                    <h6>{danhMuc.ten}</h6>
                                    <ul>
                                        {danhMuc.loai.map((loai) => (
                                            <li key={loai}>{loai}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="product-list">
                            {products.map((product) => (
                                <div key={product.id} className="product-item">
                                    <img src={product.url} alt={product.name} />
                                    <span>{product.name}</span>
                                    <p>{product.price} VND</p>
                                    <button>Xem sản phẩm</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
