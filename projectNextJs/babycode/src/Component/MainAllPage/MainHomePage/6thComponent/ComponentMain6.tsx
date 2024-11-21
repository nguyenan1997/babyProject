import React from "react";
import ComponentMain6Left from "./ComponentMain6Left";
import ComponentMain6Right from "./ComponentMain6Right";

const ComponentMain6 = ({APIdata}: any) => {
    return (
        <div className="main-6">
          <ComponentMain6Left APIdata = {APIdata}/>
          <ComponentMain6Right APIdata = {APIdata}/>
        </div>
    )
}

export default ComponentMain6