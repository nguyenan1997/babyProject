'use client'
import React, { useEffect, useState } from "react";
import { useCart } from "@/hooks/Context/CartContext";
import { FaCheckCircle } from "react-icons/fa"; // Biểu tượng từ FontAwesome

const ComponentCartListItem = ({ setQuantity }: { setQuantity: any }) => {
  const { cart, setCart, switchesListItem, setSwitchesListItem, handleShowCart } = useCart();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false);
  const [showDeleteConfirmationAll, setShowDeleteConfirmationAll] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Hiển thị thông báo thành công

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalQuantity = cart.reduce((accumulator, product) => accumulator + product.countQuantity, 0);

  // Gọi setQuantity để truyền tổng số lượng vào
  useEffect(() => {
    setQuantity(totalQuantity);
  }, [cart, setQuantity]);

  // Tính tổng giá
  const totalPrice = cart.reduce((accumulator, product) => {
    const priceNumber = parseFloat(product.price.replace(/\./g, ""));
    return accumulator + priceNumber * product.countQuantity;
  }, 0);

  const handleQuantityChange = (index: number, delta: number) => {
    const newCart = [...cart];
    const newQuantity = newCart[index].countQuantity + delta;

    if (newQuantity > 0) {
      newCart[index].countQuantity = newQuantity;
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      handleDeleteProduct(index);
    }
  };

  const handleDeleteProduct = (index: number) => {
    setProductToDelete(index);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    if (productToDelete !== null) {
      const newCart = cart.filter((_, index) => index !== productToDelete);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setShowDeleteConfirmation(false);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };



  // Hàm cập nhật giỏ hàng trong localStorage khi cart thay đổi
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật giá trị mới cho key 'cart'
  }, [cart]); // Mỗi khi cart thay đổi, sẽ cập nhật lại localStorage

  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div className={switchesListItem === 'header' ? "shoppingCart show" : "shoppingCart hide"} onClick={handleCartClick}>
        <p>🛒 Giỏ Hàng Của Bé 🧸</p>
        <div className="container-shoppingCart">
          <div className="arrow-up" />
          <ul className="list-item-added">
            <table>
              <thead
                className="tableHead"
                style={cart.length !== 0 ? { display: "table-header-group" } : { display: "none" }}
              >
                <tr>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {cart.length === 0 ? (
                  <>
                    <img src="imgaes/emptyCart.webp" alt="Giỏ hàng trống" />
                    <p style={{ color: "red", fontSize: "21px" }}>Chưa có sản phẩm</p>
                  </>
                ) : (
                  cart.map((value, index) => (
                    <tr key={index}>
                      <td>
                        <div className="product-info">
                          <img src={value.img} alt={value.title} className="product-image" />
                          <span className="text-ellipsis">Xe ô tô điện trẻ em</span>
                        </div>
                      </td>
                      <td>
                        <div className="quantity-control">
                          <button
                            className="btn-decrease"
                            onClick={() => handleQuantityChange(index, -1)}
                            disabled={value.countQuantity === 0}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="quantity-input"
                            value={value.countQuantity}
                            min={1}
                          />
                          <button
                            className="btn-increase"
                            onClick={() => handleQuantityChange(index, 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <span>
                          {"₫" +
                            new Intl.NumberFormat("vi-VN").format(
                              parseFloat(value.price.replace(/\./g, "")) * value.countQuantity
                            )}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn-delete"
                          onClick={() => handleDeleteProduct(index)}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <p
              className="payment-total"
              style={cart.length === 0 ? { display: "none" } : { display: "block" }}
            >
              <span>Tổng cộng: {totalPrice.toLocaleString("vi-VN")}</span>{" "}
              <button className="button-payment">Thanh Toán</button>
            </p>
          </ul>
        </div>
        <button
          className="buttonDeleteAllItem"
          onClick={() => { setShowDeleteConfirmationAll(!showDeleteConfirmationAll) }}
          style={cart.length === 0 ? { display: "none" } : { display: "block" }}
        >
          🗑️ Xoá Tất Cả Trong Giỏ Hàng
        </button>
      </div>

      {(showDeleteConfirmation || showDeleteConfirmationAll) && <div id="overlay" className="overlay" />}
      <div
        id="confirmPopup"
        className="confirmation-modal"
        style={showDeleteConfirmation ? { display: "block" } : { display: "none" }}
      >
        <div className="exclamation-mark">!</div>
        <p>Bạn có chắc chắn muốn xóa sản phẩm này không?</p>
        <button onClick={confirmDelete} id="confirmYes">
          Có
        </button>
        <button onClick={cancelDelete} id="confirmNo">
          Không
        </button>
      </div>

      <div id="confirmPopup" className="confirm-popup" style={showDeleteConfirmationAll ? { display: "block" } : { display: "none" }}>
        <p>⚠️ Bạn có chắc chắn muốn xóa tất cả sản phẩm này không?</p>
        <button id="confirmYesBtn" onClick={() => {
          setCart([]); setShowDeleteConfirmationAll(!showDeleteConfirmationAll); setShowSuccessMessage(true); // Hiển thị thông báo thành công
          // Tự động ẩn thông báo sau 2 giây
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 2000);
        }}>Yes</button>
        <button id="confirmNoBtn" onClick={() => setShowDeleteConfirmationAll(!showDeleteConfirmationAll)}>No</button>
      </div>

      <div id="successMessage" className="success-message" style={showSuccessMessage ? { display: "block" } : { display: "none" }}>
        <FaCheckCircle style={{ color: "green", fontSize: "24px" }} />
        <p>Đã xóa tất cả sản phẩm trong giỏ hàng</p>
      </div>
    </div>
  );
};

export default ComponentCartListItem;
