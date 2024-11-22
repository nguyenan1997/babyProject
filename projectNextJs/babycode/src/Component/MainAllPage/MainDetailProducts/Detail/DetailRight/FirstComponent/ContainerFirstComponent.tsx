import React from "react";
import FirstComponentLeft from "./FirstComponentLeft";
import FirstComponentRight from "./FirstComponentRight";
const ContainerFirstComponent = () => {
    return (
        <div className="container-first-component">
            <FirstComponentLeft />
            <FirstComponentRight />
        </div>
    )
}

export default ContainerFirstComponent