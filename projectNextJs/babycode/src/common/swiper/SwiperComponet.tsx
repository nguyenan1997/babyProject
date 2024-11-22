
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'; // Trái tim đầy
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons'; // Trái tim rỗng
import { SwiperOptions } from 'swiper/types';
import { useState } from 'react';
import { useCart } from '@/hooks/Context/CartContext';
import { buttonAddListItem } from '../ComponentCardProduct/ComponentCartProduct';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS mặc định

interface Product {
    id: number;
    img: string;
    title: string;
    prevPrice: string;
    price: string;
    rate: number;
    countQuantity: number;
}

interface SwiperComponentProps {
    gap?: number;
    slidesPerView?: number;
    loop?: boolean;
    data?: Array<any>;
    type?: 'groupProducts' | 'slidemain3' | 'imagesbanner';
    setSharedData?: any
}
const SwiperComponent: React.FC<SwiperComponentProps> = ({ gap = 0, slidesPerView = 6, loop = true, data = [], type, setSharedData = () => { } }) => {
    const { cart, setCart } = useCart();
    const [activeSlide, setActiveSlide] = useState<Number>(0);
    const [liked, setLiked] = useState(false);
    const notify = () => {
        toast.success("✨ Sản phẩm bạn chọn đã được thêm vào giỏ hàng 🎉", {
            position: "bottom-right", // Vị trí góc dưới bên phải
            autoClose: 3000, // Tự động đóng sau 3 giây
            hideProgressBar: false, // Hiển thị thanh tiến trình
            closeOnClick: true, // Đóng khi nhấn vào
            pauseOnHover: true, // Tạm dừng khi di chuột
            draggable: true, // Cho phép kéo toast
            progressStyle: { background: "#ff6f61" }, // Đổi màu progress bar
        });
    };
    const handleToggleHeart = () => {
        setLiked(!liked);
    };
    const breakpointsConfig: SwiperOptions['breakpoints'] = type === 'groupProducts'
        ? {
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            769: { slidesPerView: 3 },
            427: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
        }
        : type === 'slidemain3'
            ? {
                1024: { slidesPerView: 4 },
                769: { slidesPerView: 3 },
                480: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
            }
            : type === 'imagesbanner'
                ? {
                    769: { slidesPerView: 3 },
                    559: { slidesPerView: 2 },
                    0: { slidesPerView: 1 },
                }
                : {};

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            spaceBetween={gap}
            slidesPerView={slidesPerView}
            loop={loop}
            className={type === 'groupProducts' ? '' : type === 'slidemain3' ? 'wrapper2' : 'wrapper3'}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            onClick={(swiper) => setActiveSlide(swiper.clickedIndex)} // Cập nhật khi click
            breakpoints={breakpointsConfig}
        >
            {data?.map((item, index) => (
                <SwiperSlide key={index} className={type === 'groupProducts' ? 'slide' : ''} onClick={() => setSharedData(index)}>
                    {type === 'groupProducts' && (
                        <>
                            <div className="my-swiper-slide">
                                {item.svg}
                                <p>{item.title}</p>
                            </div>
                            <div className="arrow-down" style={{ display: activeSlide === index ? "block" : "none" }}></div>
                        </>
                    )}
                    {type === 'slidemain3' && (
                        <div className="slider-main3">
                            <div className="slider-main3-head">
                                <p className="discount-main3">
                                    {Math.round((convertCurrencyString(item.prevPrice) - convertCurrencyString(item.price)) / convertCurrencyString(item.prevPrice) * 100)}%
                                </p>
                                <p className="heart-main3">
                                    <div onClick={handleToggleHeart} style={{ cursor: 'pointer', fontSize: '28px' }}>
                                        <FontAwesomeIcon
                                            icon={liked ? faSolidHeart : faRegularHeart} // Chọn icon dựa trên trạng thái
                                            style={{ color: liked ? 'red' : 'gray' }} // Màu sắc thay đổi dựa trên trạng thái
                                            data-product-id={1} // ID sản phẩm (nếu cần dùng)
                                        />
                                    </div>
                                </p>
                                <div className="slider-main3-head-title">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="progress-bar-group">
                                    <div className="progress-bar-container">
                                        <div
                                            className="progress-bar"
                                            style={{ width: `${Math.round(item.QuantitySold / item.TotalNumberOfProducts * 100)}%` }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            marginTop: 10
                                        }}
                                        className="progress-bar-group-test"
                                    >
                                        <span>Đã bán</span>
                                        <span>
                                            {item.QuantitySold}/{item.TotalNumberOfProducts}
                                        </span>
                                    </div>
                                </div>
                                <button className="button-main3" onClick={() => { buttonAddListItem(item, setCart, cart); notify() }}>
                                    <svg
                                        width={27}
                                        height={27}
                                        viewBox="0 0 27 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1_767)">
                                            <path
                                                d="M21.7172 20.4435C20.0444 20.4435 18.6825 21.8054 18.6825 23.4783C18.6825 25.1511 20.0443 26.5131 21.7172 26.5131C23.3902 26.5131 24.752 25.1512 24.752 23.4783C24.752 21.8054 23.3901 20.4435 21.7172 20.4435ZM21.7172 25.1392C20.8016 25.1392 20.0564 24.3939 20.0564 23.4783C20.0564 22.5627 20.8016 21.8174 21.7172 21.8174C22.6329 21.8174 23.3781 22.5627 23.3781 23.4783C23.3781 24.3939 22.6328 25.1392 21.7172 25.1392Z"
                                                fill="white"
                                                stroke="white"
                                                strokeWidth="0.2"
                                            />
                                            <path
                                                d="M9.97844 20.4435C8.30557 20.4435 6.94367 21.8054 6.94367 23.4783C6.94367 25.1511 8.30557 26.5131 9.97844 26.5131C11.6513 26.5131 13.0132 25.1512 13.0132 23.4783C13.0132 21.8055 11.6514 20.4435 9.97844 20.4435ZM9.97844 25.1392C9.06282 25.1392 8.31757 24.3939 8.31757 23.4783C8.31757 22.5627 9.06282 21.8174 9.97844 21.8174C10.8941 21.8174 11.6393 22.5627 11.6393 23.4783C11.6393 24.3939 10.8941 25.1392 9.97844 25.1392Z"
                                                fill="white"
                                                stroke="white"
                                                strokeWidth="0.2"
                                            />
                                            <path
                                                d="M4.78198 1.03927L4.78196 1.03919C4.71741 0.717906 4.43584 0.486975 4.10872 0.486975H0.586976C0.207747 0.486975 -0.1 0.794722 -0.1 1.17395C-0.1 1.55318 0.207747 1.86093 0.586976 1.86093H3.54541L6.39015 16.087L6.48821 16.0674L6.39015 16.087C6.78222 18.0473 8.5184 19.4697 10.5171 19.4697H24.0652C24.4445 19.4697 24.7522 19.1619 24.7522 18.7827C24.7522 18.4034 24.4445 18.0957 24.0652 18.0957H10.5171C9.17131 18.0957 8.00207 17.1374 7.73788 15.8165L4.78198 1.03927Z"
                                                fill="white"
                                                stroke="white"
                                                strokeWidth="0.2"
                                            />
                                            <path
                                                d="M26.9281 4.24074C26.7978 4.09398 26.6111 4.00876 26.4131 4.00876M26.9281 4.24074L26.8533 4.30714M26.9281 4.24074C26.9281 4.24074 26.9281 4.24073 26.9281 4.24073L26.8533 4.30714M26.9281 4.24074C27.059 4.38811 27.1193 4.58602 27.0946 4.78106M26.4131 4.00876L26.8533 4.30714M26.4131 4.00876H5.28265C4.90343 4.00876 4.59568 4.31651 4.59568 4.69574C4.59568 5.07498 4.90344 5.38266 5.28265 5.38266H25.6354L24.8148 11.9451L24.914 11.9575L24.8148 11.9451M26.4131 4.00876L24.8148 11.9451M26.8533 4.30714C26.9649 4.43271 27.0165 4.60175 26.9954 4.76849M27.0946 4.78106L27.0946 4.78089L26.9954 4.76849M27.0946 4.78106L26.1778 12.1155C25.9884 13.6318 24.6932 14.774 23.1661 14.774H7.04353C6.6643 14.774 6.35655 14.4663 6.35655 14.087C6.35655 13.7078 6.6643 13.4 7.04353 13.4H23.1661C24.0019 13.4 24.7107 12.7744 24.8148 11.9451M27.0946 4.78106L26.9954 4.76849M26.9954 4.76849L24.8148 11.9451"
                                                fill="white"
                                                stroke="white"
                                                strokeWidth="0.2"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_767">
                                                <rect width={27} height={27} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Mua Ngay</span>
                                </button>
                            </div>
                            <div className="slider-main3-bottom">
                                <Link href="/DetailProduct">
                                    <p
                                        style={{ fontFamily: "Montserrat", fontWeight: 600, color: "#3E4095" }}
                                    >
                                        {item.title}
                                    </p>
                                </Link>
                                <p style={{ fontFamily: "Montserrat", color: "#3E4095", fontSize: 16 }}>
                                    {item.price} VNĐ
                                </p>
                                <p style={{ fontSize: 16, color: "#FF480E" }}>
                                    {item.price} VNĐ
                                    <span
                                        style={{
                                            fontSize: 14,
                                            color: "#BBBBBB",
                                            textDecoration: "line-through"
                                        }}
                                    >
                                        {item.prevPrice}
                                    </span>
                                </p>
                            </div>

                        </div>
                    )}
                    {type === 'imagesbanner' && (
                        <img src={item.images} />
                    )}
                </SwiperSlide>
            ))}

        </Swiper >
    );
};

export default SwiperComponent;


export function convertCurrencyString(str: any) {
    // Loại bỏ dấu chấm, dấu phẩy và chuỗi " VNĐ"
    let cleanedStr = str.replace(/[.,]/g, "").replace(" VNĐ", "");

    // Chuyển chuỗi thành số
    return parseInt(cleanedStr, 10);
}


