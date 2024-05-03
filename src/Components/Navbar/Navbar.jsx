import React, { useState, useContext } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { GiJumpingDog } from "react-icons/gi";
import logo from '../Assest/logo.svg';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from "../../Contexts/Cart.jsx";
import data from '../Product/Product.js'


export const Navbar = () =>
{
    const [activeItem, setActiveItem] = useState(null);
    const { cartItems } = useContext(ShopContext);
    const totalItems = Object.values(cartItems).reduce((acc, count) => acc + count, 0);
    const [searchQuery, setSearchQuery] = useState('');

    const handleItemClick = (itemName) =>
    {
        setActiveItem(itemName === activeItem ? null : itemName);
    };
    const filteredProducts = data.products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchInputChange = (e) =>
    {
        setSearchQuery(e.target.value);
    };
    const clearSearchQuery = () =>
    {
        setSearchQuery('');
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
                        <div className="col-2">
                            <Link to="/" className="logo-link">
                                <div className="logo">
                                    <img src={logo} alt="logo" />
                                    <span>Drug Store</span>
                                </div>
                            </Link>
                        </div>

                        <div className="col-7">
                            <div className='search'>
                                <form className='header-search'>
                                    <input
                                        type="text"
                                        placeholder="Tìm kiếm sản phẩm, thương hiệu, v.v. "
                                        value={searchQuery}
                                        onChange={handleSearchInputChange}
                                    />
                                    <label htmlFor=""><CiSearch /></label>
                                </form>
                                {searchQuery && filteredProducts.length > 0 && (
                                    <div className='search-results'>
                                        {filteredProducts.map(product => (
                                            <Link
                                                to={`/product/${product.id}`}
                                                key={product.id}
                                                className='search-results-item'
                                                onClick={clearSearchQuery}
                                            >
                                                <img src={product.url} alt="" />
                                                <div>{product.name}</div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-3" style={{ paddingRight: 0 }}>
                            <div className='login-button'>
                                {/* <a href="/login">Đăng nhập / Đăng ký</a> */}
                                <Link to='/login'>Đăng nhập / Đăng ký</Link>
                                <FaRegUserCircle style={{ fill: '#000', fontSize: '24px' }} />
                                <Link to='/cart' className='cart-icon'>
                                    <MdAddShoppingCart style={{ fill: '#000', fontSize: '24px' }} />
                                    <span>{totalItems}</span>
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
