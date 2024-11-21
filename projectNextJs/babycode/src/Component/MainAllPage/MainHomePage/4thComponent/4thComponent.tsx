import SwiperComponent from "@/common/swiper/SwiperComponet";
import React from "react";

const ComponentMain4 = ({APIdata} : any) => {
    return (
        <div className="main-4">
            <SwiperComponent gap={15} slidesPerView={3} loop={true} data={APIdata.imagesbanner} type={'imagesbanner'}/>
        </div>
    )
}
export default ComponentMain4