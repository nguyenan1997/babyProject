'use client';
import React, { createContext, useContext, useState } from "react";

interface CartItem {
    id: number;
    img: string;
    title: string;
    price: string;
    countQuantity: number;
}

interface CartContextType {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    switchesListItem: null | string;
    setSwitchesListItem: React.Dispatch<React.SetStateAction<null | string>>;
    handleShowCart: (cartName: any) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        // Chỉ truy cập localStorage nếu đang chạy trong trình duyệt
        if (typeof window !== "undefined") {
            const storedCart = localStorage.getItem("cart");
            return storedCart ? JSON.parse(storedCart) : [];
        }
        return []; // Trả về giá trị mặc định nếu không ở trong trình duyệt
    });

    const [switchesListItem, setSwitchesListItem] = useState<null | string>(null);

    const handleShowCart = (cartName: any) => {
        setSwitchesListItem((prev) => (prev === cartName ? null : cartName)); // Toggle trạng thái
      };

    return (
        <CartContext.Provider value={{ cart, setCart, switchesListItem, setSwitchesListItem, handleShowCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
