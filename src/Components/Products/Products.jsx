import React, { useState } from 'react';
import './Products.css'
export const Products = ({ title, items }) =>
{

    return (
        <div className='products'>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="category">

                            <span>THUỐC KHÁNG SINH</span>
                            <ul>
                                <li>Bột trộn thức ăn hoặc pha nước uống</li>
                                <li>Dung dịch uống, viên đặt, bôi, xịt</li>
                                <li>Bột pha tiêm</li>
                                <li>Dung dịch tiêm</li>
                                <li>Hỗn dịch tiêm</li>
                            </ul>
                            <span>THUỐC KÝ SINH TRÙNG</span>
                            <ul>
                                <li>Dạng bôi, nhỏ</li>
                                <li>Dạng viên, bột uống, trộn thức ăn</li>
                                <li>Dạng tắm, phun sương, xịt ngoài da</li>
                                <li>Dạng uống</li>
                                <li>Dạng tiêm</li>
                            </ul>
                            <span>VẮC XIN</span>
                            <ul>
                                <li>Vắc xin cho cá</li>
                                <li>Vắc xin cho Chó, mèo</li>
                                <li>Vắc xin cho gia cầm</li>
                                <li>Vắc xin cho lợn (heo)</li>
                            </ul>
                            <span>CHẾ PHẨM SINH HỌC</span>
                            <ul>
                                <li>Vi sinh vật có lợi (probiotic)</li>
                                <li>Kháng thể</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="products">
                            <div className="row">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
