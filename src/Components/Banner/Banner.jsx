import React from 'react'
import Cat from '../Assest/cats.png'
import './Banner.css'
import petshop1 from '../Assest/petshop1.png'

export const Banner = () =>
{
    return (
        <div className='banner'>
            <div className="container">
                <div className="row">
                    <div className='col-6'>
                        <div className='banner-intro'>
                            <span>Chăm sóc toàn diện - Chăn nuôi hiệu quả!</span>
                            <p>Đồng hành cùng nhà nông, kiến tạo thành công.</p>
                            <button>Xem sản phẩm</button>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img src={petshop1} alt="cat" />
                    </div>
                </div>
            </div>
        </div>
    )
}
