import React, { useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { GiJumpingDog } from "react-icons/gi";
import logo from '../Assest/logo.svg'
import './Navbar.css'
import { Link } from 'react-router-dom';


export const Navbar = () =>
{
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemName) =>
    {
        setActiveItem(itemName === activeItem ? null : itemName);
    };

    const [isShown, setIsShown] = useState(false);

    const handleMouseEnter = () =>
    {
        setIsShown(true);
    };

    const handleMouseLeave = () =>
    {
        setIsShown(false);
    };

    return (
        <div className='wrap'>
            <header >
                <div className="container">
                    <div class="row">
                        <div className="col-2 header-logo" to="/">
                            <GiJumpingDog style={{ fill: '#000', fontSize: '44px' }} />
                        </div>

                        <div className="col-7">
                            <form className='header-search'>
                                <input type="text" placeholder="Tìm kiếm sản phẩm, thương hiệu, v.v. " />
                                <label htmlFor=""><CiSearch /></label>
                            </form>
                        </div>

                        <div className="col-3" style={{ paddingRight: 0 }}>
                            <div className='login-button'>
                                <a href="#">Đăng nhập / Đăng ký</a>
                                <FaRegUserCircle style={{ fill: '#000', fontSize: '24px' }} />
                                <MdAddShoppingCart style={{ fill: '#000', fontSize: '24px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='nav-menu'>
                            <ul >
                                <li className={activeItem === 'home' ? 'active' : ''}
                                    onClick={() => handleItemClick('home')} to="/">Trang chủ</li>
                                <li className={activeItem === 'intro' ? 'active' : ''}
                                    onClick={() => handleItemClick('intro')} to="/">Giới thiệu</li>
                                <li className={activeItem === 'product' ? 'active' : ''}
                                    onClick={() => handleItemClick('product')} to="/"
                                >
                                    Sản phẩm</li>

                                <li className={activeItem === 'info' ? 'active' : ''}
                                    onClick={() => handleItemClick('info')} to="/">Liên hệ</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}
