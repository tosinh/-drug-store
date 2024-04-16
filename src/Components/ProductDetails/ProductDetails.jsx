import React from 'react'
import data from '../Product/Product'
import './ProductDetails.css'

export const ProductDetails = () =>
{
    const { products } = data;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div style={{ height: '100%' }}>
                            ProductDetails
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
