import React from 'react'
import Cat from '../Assest/cats.png'
import './Banner.css'

export const Banner = () =>
{
    return (
        <div className='banner'>
            <div className="container">
                <div className="row">
                    <div className='col-7'>
                        <div className='banner-intro'>
                            <span>Chăm sóc toàn diện - Chăn nuôi hiệu quả!</span>
                            <p>Đồng hành cùng nhà nông, kiến tạo thành công.</p>
                            <button>Xem sản phẩm</button>
                        </div>
                    </div>
                    <div className='col-5'>
                        <img src={Cat} alt="cat" />
                    </div>
                </div>
            </div>
        </div>
    )
}
