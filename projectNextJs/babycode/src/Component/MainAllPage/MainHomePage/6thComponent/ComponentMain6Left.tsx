import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'; // Trái tim đầy
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons'; // Trái tim rỗng
import { buttonAddListItem } from "@/common/ComponentCardProduct/ComponentCartProduct";
import { useCart } from "@/hooks/Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS mặc định

const ComponentMain6Left = ({ APIdata }: any) => {
    const [liked, setLiked] = useState(false);
    const { cart, setCart } = useCart();
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
        setLiked(!liked); // Đảo ngược trạng thái yêu thích
    };
    return (
        <div className="main-6-left">
            <img src={APIdata.productHotLest.img} alt="Ảnh bên trái"/>
            <p className="heart-main3">
                    <div onClick={handleToggleHeart} style={{ cursor: 'pointer', fontSize: '28px' }}>
                        <FontAwesomeIcon
                            icon={liked ? faSolidHeart : faRegularHeart}
                            style={{ color: liked ? 'red' : 'gray' }}
                            data-product-id={0}
                        />
                    </div>
                </p>
            <div>
                <div className="main-6-left-bottom">
                    <p className="hotsale">
                        {APIdata.productHotLest.title}
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: 120,
                            alignItems: "center",
                            color: "#FFCE56"
                        }}
                    >
                        <span className="container-rate">
                            <div
                                className="rate-1-selector"
                                style={{
                                    width:
                                        `${APIdata.productHotLest.rate / 5 * 100}px`
                                }}
                            >
                                <img src="imgaes/1.png" className="rate-1" />
                            </div>
                            <img src="imgaes/2.png" className="rate-2" />
                        </span>
                        <span>4.7</span>
                    </div>
                </div>
                <div className="main-6-left-bottom-price">
                    <span
                        style={{ color: "#FF480E", fontSize: 34, fontFamily: "Montserrat" }}
                    >
                        {APIdata.productHotLest.price} VNĐ
                    </span>
                    <span
                        style={{
                            fontSize: 18,
                            fontFamily: "Montserrat",
                            color: "#BBBBBB",
                            textDecoration: "line-through"
                        }}
                    >
                        {APIdata.productHotLest.prevPrice} VNĐ
                    </span>
                    <button onClick={() => {buttonAddListItem(APIdata.productHotLest, setCart, cart); notify()}}>
                        <svg
                            width={27}
                            height={27}
                            viewBox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1_1399)">
                                <path
                                    d="M21.7172 20.4435C20.0444 20.4435 18.6825 21.8054 18.6825 23.4783C18.6825 25.1511 20.0443 26.5131 21.7172 26.5131C23.3902 26.5131 24.752 25.1512 24.752 23.4783C24.752 21.8054 23.3901 20.4435 21.7172 20.4435ZM21.7172 25.1392C20.8016 25.1392 20.0564 24.3939 20.0564 23.4783C20.0564 22.5627 20.8016 21.8174 21.7172 21.8174C22.6329 21.8174 23.3781 22.5627 23.3781 23.4783C23.3781 24.3939 22.6328 25.1392 21.7172 25.1392Z"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="0.2"
                                />
                                <path
                                    d="M9.97842 20.4435C8.30556 20.4435 6.94366 21.8054 6.94366 23.4783C6.94366 25.1511 8.30556 26.5131 9.97842 26.5131C11.6513 26.5131 13.0132 25.1512 13.0132 23.4783C13.0132 21.8055 11.6513 20.4435 9.97842 20.4435ZM9.97842 25.1392C9.06281 25.1392 8.31755 24.3939 8.31755 23.4783C8.31755 22.5627 9.06281 21.8174 9.97842 21.8174C10.894 21.8174 11.6393 22.5627 11.6393 23.4783C11.6393 24.3939 10.894 25.1392 9.97842 25.1392Z"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="0.2"
                                />
                                <path
                                    d="M4.78198 1.03924L4.78196 1.03916C4.71741 0.717875 4.43584 0.486945 4.10872 0.486945H0.586976C0.207747 0.486945 -0.1 0.794691 -0.1 1.17392C-0.1 1.55315 0.207747 1.8609 0.586976 1.8609H3.54541L6.39015 16.087L6.48821 16.0674L6.39015 16.087C6.78222 18.0472 8.5184 19.4696 10.5171 19.4696H24.0652C24.4445 19.4696 24.7522 19.1619 24.7522 18.7826C24.7522 18.4034 24.4445 18.0957 24.0652 18.0957H10.5171C9.17131 18.0957 8.00207 17.1374 7.73788 15.8165L4.78198 1.03924Z"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="0.2"
                                />
                                <path
                                    d="M26.9281 4.24071C26.7978 4.09395 26.6111 4.00873 26.4131 4.00873M26.9281 4.24071L26.8533 4.30711M26.9281 4.24071C26.9281 4.24071 26.9281 4.2407 26.9281 4.2407L26.8533 4.30711M26.9281 4.24071C27.059 4.38808 27.1193 4.58599 27.0946 4.78103M26.4131 4.00873L26.8533 4.30711M26.4131 4.00873H5.28265C4.90343 4.00873 4.59568 4.31648 4.59568 4.69571C4.59568 5.07495 4.90344 5.38263 5.28265 5.38263H25.6354L24.8148 11.945L24.914 11.9575L24.8148 11.9451M26.4131 4.00873L24.8148 11.9451M26.8533 4.30711C26.9649 4.43268 27.0165 4.60172 26.9954 4.76846M27.0946 4.78103L27.0946 4.78086L26.9954 4.76846M27.0946 4.78103L26.1778 12.1155C25.9884 13.6318 24.6932 14.774 23.1661 14.774H7.04353C6.6643 14.774 6.35655 14.4662 6.35655 14.087C6.35655 13.7078 6.6643 13.4 7.04353 13.4H23.1661C24.0019 13.4 24.7107 12.7743 24.8148 11.9451M27.0946 4.78103L26.9954 4.76846M26.9954 4.76846L24.8148 11.9451"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="0.2"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1399">
                                    <rect width={27} height={27} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Mua Ngay</span>
                    </button>
                </div>
            </div>
            <svg
                width={107}
                height={116}
                viewBox="0 0 107 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-1"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M110.926 -19.1936L108.364 115.472L0.760923 -16.0618L110.926 -19.1936Z"
                    fill="url(#paint0_linear_1_1372)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_1_1372"
                        x1="-24.8589"
                        y1="-116.278"
                        x2="-85.1494"
                        y2="41.5502"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#34C884" />
                        <stop offset={1} stopColor="#016B3A" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                width={19}
                height={35}
                viewBox="0 0 19 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-2"
            >
                <path
                    d="M18.0152 11.3496C17.8182 10.8998 17.4344 10.6188 17.0166 10.6188H11.7244L13.5768 2.69509C13.6742 2.27711 13.6062 1.82867 13.3922 1.48128C13.1782 1.13388 12.8431 0.93042 12.4876 0.93042H4.56186C4.05121 0.93042 3.60398 1.34841 3.46924 1.95047L0.0725024 17.1751C-0.0203417 17.5917 0.0509897 18.0374 0.264984 18.3792C0.480111 18.7211 0.811859 18.9232 1.16512 18.9232H6.60216L4.57997 32.516C4.48373 33.161 4.77132 33.8004 5.26951 34.0468C5.40878 34.116 5.55257 34.1478 5.6941 34.1478C6.06435 34.1478 6.42213 33.9264 6.63726 33.5319L17.9597 12.771C18.1907 12.3461 18.2122 11.8008 18.0152 11.3496Z"
                    fill="white"
                />
            </svg>
        </div>
    )
}

export default ComponentMain6Left