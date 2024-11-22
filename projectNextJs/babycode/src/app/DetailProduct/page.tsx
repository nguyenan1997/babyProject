import React from "react";
import "../../styles/MainDetailProduct/globalDetailProduct.css";
import Navigation from "@/Component/MainAllPage/MainDetailProducts/Navigation/Navigation";
import DetailLeft from "@/Component/MainAllPage/MainDetailProducts/Detail/DetailLeft/DetailLeft";
import DetailRight from "@/Component/MainAllPage/MainDetailProducts/Detail/DetailRight/DetailRight";

const MainDetailProduct = async ({searchParams}: {searchParams: { [key: string]: string }}) => {
    let product = null;
    try {
        product = searchParams.product ? JSON.parse(searchParams.product) : null;
    } catch (error) {
        console.error("Invalid product data:", error);
    }
    return (
        <div className="container-main">
            <Navigation />
            <div className="container-detail">
                <DetailLeft data = {product}/>
                <DetailRight data = {product}/>
            </div>
        </div>
    )
}

export default MainDetailProduct;