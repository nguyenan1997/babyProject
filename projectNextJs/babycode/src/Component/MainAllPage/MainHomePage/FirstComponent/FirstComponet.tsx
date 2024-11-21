import React from "react";
import SwiperComponent from "@/common/swiper/SwiperComponet";

const FirstComponent = ({APIdata, setSharedData}: any) => {
    let allSlide = [];
    for (let slide in APIdata?.groupProducts) {
        allSlide.push(APIdata?.groupProducts[slide].fileSlide);
    };
    return (
            <div className="main-1">
                <img src="imgaes/birtday.png" alt="Ảnh Quảng Cáo" style={{ width: '100%', height: 'auto' }} />
                <SwiperComponent gap={0} slidesPerView={6} loop={false} data={allSlide} type={'groupProducts'} setSharedData={setSharedData}/>
            </div>
            )
}

export default FirstComponent