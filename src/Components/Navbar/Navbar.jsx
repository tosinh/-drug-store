import React, { useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { GiJumpingDog } from "react-icons/gi";
import './Navbar.css'


export const Navbar = () =>
{
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemName) =>
    {
        setActiveItem(itemName === activeItem ? null : itemName);
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
                                <li className={activeItem === 'Activity 1' ? 'active' : ''}
                                    onClick={() => handleItemClick('Activity 1')} to="/">Trang chủ</li>
                                <li className={activeItem === 'Activity 1' ? 'active' : ''}
                                    onClick={() => handleItemClick('Activity 1')} to="/">Giới thiệu</li>
                                <li className={activeItem === 'Activity 2' ? 'active' : ''}
                                    onClick={() => handleItemClick('Activity 2')} to="/">Sản phẩm</li>
                                <li className={activeItem === 'Activity 2' ? 'active' : ''}
                                    onClick={() => handleItemClick('Activity 2')} to="/">Liên hệ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}
