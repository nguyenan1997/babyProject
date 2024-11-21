import React, { useEffect } from "react";
import ComponentCartProduct from "./ComponentCartProduct";

const ComponentCartProductAll = ({currentData}: {currentData: Array<any>}) => {
    
    return (
        <div className="main-2-right">
            {currentData?.map((value:any,index: number) => {
                return (
                    <ComponentCartProduct key={index} data={value} index={index} flag="main2"/>
                )
            })}
        </div>
    )
}
export default ComponentCartProductAll