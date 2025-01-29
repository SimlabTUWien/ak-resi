import React from "react";
import QuantilChart from "./QuantilChart";
// import DecilChart from "./DecilChart";

const ExpenditureCharts = ({ mode }) => {
  return (
    <div className="expenditure-charts">
      {mode === "quantils" ? (
        <>
          <QuantilChart />
          <QuantilChart />
        </>
      ) : (
        <>
          <QuantilChart />
          <QuantilChart />
        </>
      )}
    </div>
  );
};

export default ExpenditureCharts;
