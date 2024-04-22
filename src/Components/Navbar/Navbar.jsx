import React, { useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { GiJumpingDog } from "react-icons/gi";
import logo from '../Assest/logo.svg';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Banner } from '../Banner/Banner.jsx'


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
                        {/* <div className="col-2 header-logo" to="/">
                            <img src="logo.svg" alt="logo" />
                            <GiJumpingDog style={{ fill: '#000', fontSize: '44px' }} 
                        </div> */}
                        <div className="col-2 logo" to="/">
                            <img src={logo} alt="logo" />
                            <span>Drug Store</span>
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
                                <Link to='/cart' className='cart-icon'>
                                    <MdAddShoppingCart style={{ fill: '#000', fontSize: '24px' }} />
                                    <span>0</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header >

            <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='nav-menu'>
                            <ul >
                                <li className={activeItem === 'home' ? 'active' : ''}
                                    onClick={() => handleItemClick('home')} >
                                    <Link to='/' className='nav-link'>Trang chủ</Link></li>
                                <li className={activeItem === 'product' ? 'active' : ''}
                                    onClick={() => handleItemClick('product')} >
                                    <Link to='/product' className='nav-link'>Sản phẩm</Link></li>
                                <li className={activeItem === 'contact' ? 'active' : ''}
                                    onClick={() => handleItemClick('contact')} >
                                    <Link to='/contact' className='nav-link'>Liên hệ</Link></li>
                            </ul>

                        </div>
                    </div >
                </div >
            </nav >
        </div >
    )
}
