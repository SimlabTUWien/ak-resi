import React from "react";
import QuantilChart from "./QuantilChart";
// import DecilChart from "./DecilChart";

const ExpenditureCharts = ({ mode }) => {
  return (
    <div className="expenditure-charts">
      {mode === "quantils" ? (
        <>
          <QuantilChart index={1}/>
          <QuantilChart index={2}/>
        </>
      ) : (
        <>
          {/* <QuantilChart />
          <QuantilChart /> */}
        </>
      )}
    </div>
  );
};

export default ExpenditureCharts;
