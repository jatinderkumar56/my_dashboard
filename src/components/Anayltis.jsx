import React from "react";
import Chart from "./chart/Chart";
import { userData } from "../dummyData";

const Analytics=()=>{
    return(
     <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    )
}
export default Analytics