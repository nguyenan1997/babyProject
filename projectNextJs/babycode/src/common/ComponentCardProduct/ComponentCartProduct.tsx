'use client'
import React, { useState } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'; // Solid heart icon
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons'; // Regular heart icon
import { convertCurrencyString } from "@/common/swiper/SwiperComponet";
import Modal from "../Modal/ModalConfirnAddProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS mặc định


// Define the type for the product data
interface Product {
    id: number;
    img: string;
    title: string;
    prevPrice: string;
    price: string;
    rate: number;
    countQuantity: number;
}

// Define the props for ComponentCartProduct
interface ComponentCartProductProps {
    data: Product;
    index: number;
    flag: string;
}

// Functional component for displaying a product
const ComponentCartProduct: React.FC<ComponentCartProductProps> = ({ data, index, flag }) => {
    const [liked, setLiked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const notify = () => {
        toast.success("✨ Sản phẩm bạn chọn đã được thêm vào giỏ hàng 🎉", {
            position: "bottom-right", // Vị trí góc dưới bên phải;
            autoClose: 3000, // Tự động đóng sau 3 giây
            hideProgressBar: false, // Hiển thị thanh tiến trình
            closeOnClick: true, // Đóng khi nhấn vào
            pauseOnHover: true, // Tạm dừng khi di chuột
            draggable: true, // Cho phép kéo toast
            progressStyle: { background: "#ff6f61" }, // Đổi màu progress bar
        });
    };

    const handleToggleHeart = () => {
        setLiked(!liked); // Toggle the liked state
    };

    const openPopup = () => {
        setShowModal(true);
    };

    const closePopup = () => setShowModal(false);

    const addToCart = (product: Product, setCart: any, cart: any) => {
        buttonAddListItem(product, setCart, cart);
        closePopup(); // Close the modal after adding the product
        notify()

    };
    const discountPercentage = () => {
        const prevPrice = convertCurrencyString(data.prevPrice);
        const currentPrice = convertCurrencyString(data.price);
        return Math.round(((currentPrice - prevPrice) / currentPrice) * 100);
    };

    return (
        <div className={flag === 'main2' ? "info-product" : "info-product main-6-right-slide"}>
            <div className="infor-product-head">
                <Link href={{
                    pathname: "/DetailProduct",
                    query: {product: JSON.stringify(data)},
                }}>
                    <img src={data.img} alt={data.title} />
                </Link>
                <div style={discountPercentage() === 0 ? { display: "none" } : { display: "block" }}>-{discountPercentage()}%</div>
                <p className="heart-main3">
                    <div onClick={handleToggleHeart} style={{ cursor: 'pointer', fontSize: '28px' }}>
                        <FontAwesomeIcon
                            icon={liked ? faSolidHeart : faRegularHeart}
                            style={{ color: liked ? 'red' : 'gray' }}
                            data-product-id={index}
                        />
                    </div>
                </p>
            </div>
            <div className="infor-product-bottom">
                <Link href="/DetailProduct">
                    <p>{data.title}</p>
                </Link>
                <div className="price-shop">
                    <div className="price-shop-rate">
                        <span className="container-rate">
                            <div
                                className="rate-1-selector"
                                style={{ width: `${Math.round((data.rate / 5) * 100)}px` }}
                            >
                                <img src="imgaes/1.png" className="rate-1" />
                            </div>
                            <img src="imgaes/2.png" className="rate-2" />
                        </span>
                        <span>{data.rate}</span>
                    </div>
                    <div className="price-shop-buy">
                        <span>{data.price}</span>
                        <svg
                            onClick={() => openPopup()}
                            width={37}
                            height={37}
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1_582)">
                                <path
                                    d="M29.7607 28.0522C27.4887 28.0522 25.639 29.902 25.639 32.1739C25.639 34.4459 27.4887 36.2957 29.7607 36.2957C32.0328 36.2957 33.8825 34.446 33.8825 32.1739C33.8825 29.9019 32.0327 28.0522 29.7607 28.0522ZM29.7607 34.487C28.4855 34.487 27.4477 33.4491 27.4477 32.1739C27.4477 30.8988 28.4855 29.8609 29.7607 29.8609C31.0359 29.8609 32.0738 30.8988 32.0738 32.1739C32.0738 33.4491 31.0359 34.487 29.7607 34.487Z"
                                    fill="#016B3A"
                                    stroke="#016B3A"
                                    strokeWidth="0.2"
                                />
                                <path
                                    d="M13.6741 28.0522C11.4021 28.0522 9.5524 29.902 9.5524 32.1739C9.5524 34.4459 11.4021 36.2957 13.6741 36.2957C15.9461 36.2957 17.7958 34.446 17.7958 32.174C17.7958 29.902 15.9462 28.0522 13.6741 28.0522ZM13.6741 34.487C12.3989 34.487 11.3611 33.4491 11.3611 32.1739C11.3611 30.8988 12.3989 29.8609 13.6741 29.8609C14.9493 29.8609 15.9872 30.8988 15.9872 32.1739C15.9872 33.4491 14.9493 34.487 13.6741 34.487Z"
                                    fill="#016B3A"
                                    stroke="#016B3A"
                                    strokeWidth="0.2"
                                />
                                <path
                                    d="M6.51676 1.4314L6.51675 1.43132C6.43175 1.0083 6.06106 0.704321 5.63047 0.704321H0.804374C0.305145 0.704321 -0.1 1.10947 -0.1 1.6087C-0.1 2.10792 0.305145 2.51307 0.804374 2.51307H4.88889L8.79319 22.0379C9.32701 24.7068 11.691 26.6435 14.4123 26.6435H32.9783C33.4775 26.6435 33.8827 26.2384 33.8827 25.7392C33.8827 25.2399 33.4775 24.8348 32.9783 24.8348H14.4123C12.5504 24.8348 10.9329 23.5091 10.5674 21.6817L6.51676 1.4314Z"
                                    fill="#016B3A"
                                    stroke="#016B3A"
                                    strokeWidth="0.2"
                                />
                                <path
                                    d="M36.8737 5.83594C36.7021 5.64265 36.4562 5.53049 36.1957 5.53049M36.8737 5.83594L36.799 5.90232L36.8737 5.83593C36.8737 5.83593 36.8737 5.83594 36.8737 5.83594ZM36.8737 5.83594C37.0459 6.02982 37.1253 6.29033 37.0928 6.54713M36.1957 5.53049L7.23913 7.23917C6.79513 7.23917 6.43475 6.87887 6.43475 6.43487C6.43475 5.99087 6.79513 5.63049 7.23913 5.63049H36.1957C36.4273 5.63049 36.6461 5.73018 36.799 5.90234C36.9518 6.07442 37.0225 6.30607 36.9936 6.53456M36.1957 5.53049H7.23913C6.7399 5.53049 6.33475 5.93564 6.33475 6.43487C6.33475 6.93411 6.73991 7.33917 7.23913 7.33917H35.1719M36.1957 5.53049L35.1719 7.33917M37.0928 6.54713L37.0928 6.54696L36.9936 6.53456M37.0928 6.54713L35.8364 16.5981C35.5792 18.6575 33.8201 20.2088 31.746 20.2088H9.65217C9.15295 20.2088 8.7478 19.8036 8.7478 19.3044C8.7478 18.8052 9.15295 18.4 9.65217 18.4H31.746C32.9101 18.4 33.8972 17.5287 34.0421 16.3738C34.0421 16.3738 34.0421 16.3738 34.0421 16.3738L35.1719 7.33917M37.0928 6.54713L36.9936 6.53456M36.9936 6.53456L35.1719 7.33917"
                                    fill="#016B3A"
                                    stroke="#016B3A"
                                    strokeWidth="0.2"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_582">
                                    <rect width={37} height={37} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            {showModal && (
                <Modal
                    product={data}
                    onConfirm={(product, setCart, cart) => addToCart(product, setCart, cart)}
                    onClose={closePopup}
                />
            )}
        </div>
    );
};



// Function to add product to cart in localStorage
export const buttonAddListItem = (product: Product, setCart: any, cart: any) => {
    const updatedCart = [...cart]; // Create a copy of the cart

    const productIndex = updatedCart.findIndex(item => item.id === product.id);

    if (productIndex !== -1) {
        updatedCart[productIndex].countQuantity += 1; // Increment quantity
    } else {
        updatedCart.push({ ...product, countQuantity: 1 }); // Add new product
    }

    // Update the cart in context and localStorage
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
};


export default ComponentCartProduct;



