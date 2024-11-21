
import React from "react";

const ComponentMain9 = ({ APIdata }: { APIdata: any }) => {
    return (
        <div className="main-9">
            <div className="main-9-container">
                {APIdata.suggest.map((value: any, index: number) => {
                    return (
                        <div className="main-9-container-tab" key={index} style={{ backgroundColor: `${value.backgroundColor}` }}>
                        <img src={value.img} />
                        <p>
                            {value.title}
                        </p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ComponentMain9