import React from "react";
import { useCart } from "@/hooks/Context/CartContext"; 

interface ModalProps {
    product: Product;
    onConfirm: (product: Product, setCart: any, cart: any) => void;
    onClose: () => void;
}
interface Product {
    id: number;
    img: string;
    title: string;
    prevPrice: string;
    price: string;
    rate: number;
    countQuantity: number;
}
const Modal: React.FC<ModalProps> = ({ product, onConfirm, onClose }) => {
    const { cart, setCart } = useCart();
    return (
        <>
            <div className="background-overlay" onClick={onClose}></div>
            <div className="popup-box">
                <div className="popup-header">Thông báo</div>
                <p>Bạn có muốn thêm vật phẩm này vào giỏ hàng không?</p>
                <button className="popup-button confirm-button" onClick={() => onConfirm(product, setCart, cart)}>
                    Yes
                </button>
                <button className="popup-button cancel-button" onClick={onClose}>
                    No
                </button>
            </div>
        </>
    );
};

export default Modal