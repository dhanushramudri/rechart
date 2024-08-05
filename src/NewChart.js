import React from "react";
import ChartImg from "./images/chartImg.jpg";
import DropdownMenu from "./components/Dropdown";

const NewChart = () => {
  return (
    <div style={{ gap: "20px", display: "flex" }}>
      {/* <img src={ChartImg} width={700} alt="Chart" /> */}
      <div className="center">
        <div className="b1"></div>
        <div className="b2"></div>
        <div className="b3"></div>
        <div className="b4"></div>
      </div>
      <DropdownMenu />
    </div>
  );
};

export default NewChart;
