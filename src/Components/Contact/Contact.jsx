import React, { useState } from 'react'
import './Contact.css'

export const Contact = () =>
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleNameChange = (event) =>
    {
        setName(event.target.value);
    };

    const handleEmailChange = (event) =>
    {
        setEmail(event.target.value);
    };

    const handleTitleChange = (event) =>
    {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) =>
    {
        setContent(event.target.value);
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className='contact-info'>
                            <h2>LIÊN HỆ THUỐC THÚ Y ONLINE</h2>
                            <p>Thuốc Thú Y Online cung cấp sản phẩm chất lượng, phù hợp với nhu cầu sử dụng, đảm bảo sức khỏe chăn nuôi. Góp phần tăng năng suất, tiết kiệm chi phí cho người nuôi.</p>
                            <p>Bất cứ khi nào quý khách hàng có nhu cầu. Hãy liên hệ ngay với chúng tôi hoặc để lại thông tin để chúng tôi chủ động liên vệ và tư vấn giải pháp chăm sóc vật nuôi phù hợp nhất với nhu cầu của quý khách!</p>
                            <ul>
                                <li>Địa chỉ: Tp. Đà Lạt</li>
                                <li>Điện thoại: 0386.**.**.**</li>
                                <li>Email: 211****@edu.vn</li>
                                <li>Fanpage: fb.com/</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-5">
                        <form className="contact-form">
                            <label for="name">Họ và tên:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                            />
                            <br />
                            <label for="email">Địa chỉ email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <br />
                            <label for="title">Tiêu đề:</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                            />
                            <br />
                            <label for="content">Nội dung:</label>
                            <textarea
                                name="content"
                                id="content"
                                value={content}
                                onChange={handleContentChange}
                            />
                            <br />
                            <button className='button' type="submit">Gửi</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
