import React from 'react'
import './Home.css'
import data from './Home.js';
import { Banner } from '../Banner/Banner.jsx';

import Cat from '../Assest/cats.png'
import petshop2 from '../Assest/petshop2.png'
import petshop3 from '../Assest/petshop3.png'

export const Home = () =>
{
    const { intro, procedure } = data;
    return (
        <div>
            <Banner />
            <div className="intro-top">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <div className='intro-heading '>
                                <span className='heading'>VỀ THUỐC THÚ Y</span>
                                <p>Thuốc Thú Y Online là một cửa hàng mới thành lập đầu năm 2021. Với phương châm “Hiệu quả chăn nuôi của bạn là giá trị của chúng tôi”. Nên chúng tôi luôn luôn tìm kiếm các loại thuốc mới nhất, đạt chất lượng cao nhất cung cấp đến người nuôi nhằm mang đến những hiệu quả tốt nhất.</p>
                                <p>Các sản phẩm của Thuốc Thú Y Online đa dạng về chủng loại, qui cách và đường sử dụng đáp ứng đầy đủ các nhu cầu của người chăn nuôi trong: Phòng Ngừa – Tăng Trọng – Điều Trị – Khôi Phục – Phát Triển của nhiều đối tượng vật nuôi, gia súc gia cầm trong gia đình và sản xuất.</p>
                            </div>
                        </div>
                        <div className="col-5"><img src={petshop2} alt="cat" /></div>
                    </div>
                    <div className="row">
                        <div className="col-5"><img src={petshop3} alt="cat" /></div>
                        <div className="col-7">
                            <div className='intro-heading '>
                                <span className='heading'>ĐỐI TÁC & KHÁCH HÀNG</span>
                                <p>Hiện nay, Thuốc Thú Y Online đã cung cấp đến tay bà con nhiều loại sản phẩm khác nhau phục vụ ngành chăn nuôi cho các hộ gia đình và trang trại. Hầu hết các sản phẩm của cửa hàng là các chế phẩm hướng tới việc chăn nuôi không ô nhiễm – bảo vệ môi trường, hạn chế chi phí thức ăn và công lao động, hỗ trợ làm nông nghiệp bền vững.</p>
                                <p>Phương châm hoạt động của Cửa hàng Thuốc Thú Y Online là phải giữ vững niềm tin khách hàng dành cho chúng tôi và cam kết luôn cung cấp những sản phẩm chất lượng tốt nhất.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="procedure">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='intro-heading'>
                                <span className='heading'>QUY TRÌNH TƯ VẤN KỸ THUẬT</span>
                                <p>Đến với Thuốc Thú Y Online, các bạn không chỉ được tư vấn cách chăm sóc trang trại heo, gà mà còn hỗ trợ tư vấn cả quy trình từ A – Z. Chúng tôi luôn phấn đấu làm hài lòng khách hàng từ chất lượng giá cả cạnh tranh. Quy trình tư vấn chuyên nghiệp trong chăn nuôi từ các chuyên gia đầu ngành nhiều kinh nghiệm.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="procedure-list">
                                {procedure.map((item) => (
                                    <div key={item.id} className="procedure-item">
                                        <img src={item.src} alt={item.title} />
                                        <span className='heading'>{item.title}</span>
                                        <p>{item.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='intro-heading '>
                                <span className='heading'>
                                    TẠI SAO KHÁCH HÀNG CHỌN CHÚNG TÔI?
                                </span>
                                <p>
                                    Đến với Thuốc Thú Y Online khách hàng yên tâm về nguồn gốc, chất lượng hàng hóa và giá cả phù hợp. Đặc biệt hơn là hoàn toàn tin tưởng về chế độ hỗ trợ và tư vấn kỹ thuật sau bán hàng của cửa hàng chúng tôi.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="intro-list">
                                {intro.map((item) => (
                                    <div className='intro-item' key={item.id}>
                                        <div className="icon">
                                            {<item.icon style={{ fill: 'var(--primary-color)', fontSize: '70px' }} />}
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
