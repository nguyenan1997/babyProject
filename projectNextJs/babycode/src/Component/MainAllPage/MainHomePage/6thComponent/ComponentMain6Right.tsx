import ComponentCartProduct from "@/common/ComponentCardProduct/ComponentCartProduct";
import React from "react";


const ComponentMain6Right = ({APIdata}: any) => {
    const product = [];
    for(let key in APIdata){
        if(key !== "productHotLest"){
            product.push(APIdata[key])
        }
    }
    return (
        <div className="main-6-right ">
            {product.map((item,i) => {
                return (
                    <ComponentCartProduct key={i} data={item} index={i} flag="main6"/>
                )
            })}
        </div>
    )
}

export default ComponentMain6Right