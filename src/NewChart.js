import React from "react";
import DropdownMenu from "./components/Dropdown";

const NewChart = () => {
  return (
    <div style={{ gap: "20px", display: "flex" }}>
      <div className="center">
        <div className="b1"></div>
        <div className="b2"></div>
        <div className="b3"></div>
        <div className="b4"></div>
        <div className="dropdown-container">
          <DropdownMenu />
        </div>
      </div>
    </div>
  );
};

export default NewChart;
