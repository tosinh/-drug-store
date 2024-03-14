import { FaShoppingCart } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

import procedure1 from '../Assest/procedure1.png'
import procedure2 from '../Assest/procedure2.png'
import procedure3 from '../Assest/procedure3.png'
import procedure4 from '../Assest/procedure4.png'

export const data = {
    "intro": [
        {
            "id": '1',
            "icon": FaShoppingCart,
            "title": 'Sản phẩm đa dạng',
            "content": 'Đa dạng sản phẩm từ thuốc dạng bột đến dạng chai'
        },
        {
            "id": '2',
            "icon": FaInfoCircle,
            "title": 'Thông tin minh bạch',
            "content": 'Nguồn gốc sản phẩm rõ ràng, thuộc hàng nội bộ công ty'
        },
        {
            "id": '3',
            "icon": FaArrowsRotate,
            "title": 'Quy trình đơn giản',
            "content": 'Đơn giản, nhanh chóng, không cần mất thời gian và công sức'
        },
        {
            "id": '4',
            "icon": BiLike,
            "title": 'Thương hiệu uy tín',
            "content": 'Sản phẩm chính hãng của các công ty lớn tại Việt Nam'
        },
        {
            "id": '5',
            "icon": FaPhoneVolume,
            "title": 'Tư vấn chuyên nghiệp',
            "content": 'Nhân viên sẽ tư vấn tận tình từ A-Z cho quý khách hàng'
        },
        {
            "id": '6',
            "icon": TbTruckDelivery,
            "title": 'Giao hàng tận nơi',
            "content": 'Đóng gói cẩn thận, giao hàng tận nơi từ khoảng 2 - 3 ngày'
        },
    ],
    "procedure": [
        {
            "id": '1',
            "src": procedure1,
            "title": 'Chọn Con Giống Tốt',
            "content": 'Làm sao để chọn con giống tốt, khỏe mạnh, mang lại hiệu quả kinh tế cao.'
        },
        {
            "id": '2',
            "src": procedure2,
            "title": 'Thức Ăn Chăn Nuôi',
            "content": 'Những loại thức ăn chăn nuôi nào phù hợp với trang trại của bạn'
        },
        {
            "id": '3',
            "src": procedure3,
            "title": 'Vệ Sinh Chuồng Trại',
            "content": 'Vệ sinh như nào là đúng cách. Các bước vệ sinh chuồng trại sạch sẽ.'
        },
        {
            "id": '4',
            "src": procedure4,
            "title": 'Phòng Dịch Bệnh',
            "content": 'Tìm hiểu về các dịch bệnh. Làm thế nào để phòng và tránh các dịch bệnh.'
        },
    ]
}


export default data;