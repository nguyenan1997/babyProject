import React from "react";
import Countdown from "./ComponetCountDownTime";
import SwiperComponent from "@/common/swiper/SwiperComponet";

const ComponentMain3 = ({APIdata}: any) => {
    
    return (
        <div className="main-3">
            <div className="main3-flashsale">
                <div className="main3-flashsale-left">
                    <span>FLASH SALE</span>
                    <span>
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2352 6.27333C16.0902 6.0025 15.8077 5.83333 15.5002 5.83333H11.6052L12.9685 1.0625C13.0402 0.810833 12.9902 0.540833 12.8327 0.331667C12.6752 0.1225 12.4285 0 12.1669 0H6.33352C5.95768 0 5.62852 0.251667 5.52935 0.614167L3.02935 9.78083C2.96102 10.0317 3.01352 10.3 3.17102 10.5058C3.32935 10.7117 3.57352 10.8333 3.83352 10.8333H7.83518L6.34685 19.0175C6.27602 19.4058 6.48768 19.7908 6.85435 19.9392C6.95685 19.9808 7.06268 20 7.16685 20C7.43935 20 7.70268 19.8667 7.86102 19.6292L16.1944 7.12917C16.3644 6.87333 16.3802 6.545 16.2352 6.27333Z" fill="#FB4820" />
                        </svg>
                    </span>
                </div>
                <Countdown />
            </div>

            <SwiperComponent gap = {16.19} slidesPerView= {4} loop = {true} data= {APIdata.slidemain3} type={'slidemain3'}/>
        </div>
    )
}

export default ComponentMain3