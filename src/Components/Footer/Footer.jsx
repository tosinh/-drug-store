import React from 'react'
import logo from '../Assest/logo.svg';
import './Footer.css'

import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { GiJumpingDog } from "react-icons/gi";
import { Link } from 'react-router-dom';

export const Footer = () =>
{
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* <div className="col">
                        <GiJumpingDog style={{ fill: '#000', fontSize: '44px' }} />
                    </div> */}
                    <div className="col logo" to="/">
                        <img src={logo} alt="logo" />
                        <span>Drug Store</span>
                    </div>
                    <div className="col">
                        <ul className='footer-top-list'>
                            <li>
                                <Link to="/" className="footer-link">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/products" className="footer-link">Sản phẩm</Link>
                            </li>
                            <li>
                                <Link to="/cart" className="footer-link">Giỏ hàng</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className='footer-top-list'>
                            <li>Địa chỉ: Tp. Đà Lạt</li>
                            <li>Điện thoại: 0386.**.**.**</li>
                            <li>Email: 211****@edu.vn</li>
                            <li>Fanpage: fb.com/</li>
                        </ul>
                    </div>
                </div>

                <div className="row footer-row">
                    <div className="col">No Copyright © 2024</div>
                    <div className="col">
                        <ul className='footer-bot-list'>
                            <li><FaFacebook /></li>
                            <li><AiFillGoogleCircle /></li>
                            <li><FaYoutube /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
