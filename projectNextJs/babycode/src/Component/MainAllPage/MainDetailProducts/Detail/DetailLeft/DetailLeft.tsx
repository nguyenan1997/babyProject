'use client'
import React, { useEffect, useState } from "react";
import "@/styles/MainDetailProduct/Detail/DetailLeft/detailleft.css"
import { API } from "@/services/API";

const DetailLeft = ({data}: {data: any}) => {
    const [allSlide, setAllSlide] = useState([]);
    const [hotSaleProduct, setHotSaleProduct] = useState([])
    useEffect(() => {
        const slides: any = Object.values(API.groupProducts || {}).map(product => product.fileSlide);
        const product: any = Object.values(API.HotSellingProducts || {});
        const top3Products = product.slice(0, 3);
        setAllSlide(slides);
        setHotSaleProduct(top3Products);
    }, []);

    return (
        <div className="container-detail-left">
            <div className="directory">
                <h2 className="headline">DANH MỤC</h2>
                <ul className="list-directory">
                    {allSlide.map((value: any, index: number) => {
                        return (
                            <li key={index}>
                                {value.svg}
                                <a href="#">{value.title}</a>
                            </li>
                        )
                    })}

                </ul>
            </div>
            <div className="banner">
                {/* Phần này chưa hiểu yêu cầu, cần xem lại đoạn này có nên chạy slie ảnh hay ko */}
                <img src="../imgaes/mega-deal.png" alt="Ảnh Banner" />
            </div>
            <div className="TopSeller">
                {/* Đoạn này chỉ hiển thị 3 sản phẩm đầu tiên trong phần HotSaleProduct*/}
                <h2 className="headline-hotsale">Top bán chạy</h2>
                <ul className="list-topSeller">
                    {hotSaleProduct.map((value: any, index: number) => {
                        return (
                            <li key={index} className="product-hotsale">
                                <div className="image-product">
                                    <img src={value.img} alt="Ảnh sản phẩm" />
                                    <p className="discount-price">{value.discount}</p>
                                </div>
                                <div className="contanier-detail-product">
                                    <p className="name-product">{value.title}</p>
                                    <p className="price-product">{value.price}</p>
                                </div>
                            </li>
                        )
                    })}


                </ul>
            </div>
        </div>
    )
}
export default DetailLeft;