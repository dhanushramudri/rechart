// DropdownMenu.js
import React from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 30px;
  margin-left: 130px;
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: #2a2a2a; /* Dark background */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  padding: 12px 16px;
  z-index: 1;
  width: 200px;

  ${DropdownContainer}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.div`
  color: white;
  padding: 8px 12px;
  text-decoration: none;
  display: flex; /* Use flexbox */
  justify-content: space-between; /* Distribute space between elements */
  align-items: center; /* Align items in the center vertically */
  cursor: pointer;
  background-color: #2a2a2a; /* Dark background for items */
  border-radius: 5px;
  margin-bottom: 4px;

  &:hover {
    background-color: #0077b6;
  }

  .item-label {
    display: flex; /* Use flexbox for the label */
    align-items: center; /* Center items vertically */
  }

  .mini-box {
    width: 16px;
    height: 16px;
    border-radius: 3px;
    display: inline-block;
    margin-right: 10px; /* Adjusted spacing */
    background-color: ${({ color }) => color || "transparent"};
  }

  .item-value {
    margin-left: auto; /* Push value to the right */
  }
`;

const items = [
  { label: "Updraw", color: "#084e58", value: "x" },
  { label: "In. Take Profit", value: "x" },
  { label: "Entry Close", value: "1.0567", color: "#268b9f" },
  { label: "Partial 2", value: "1.0567", color: "#268b9f" },
  { label: "Partial 1", color: "#1a9289", value: "x" },
  { label: "Drawdown", color: "#141d26", value: "x" },
  { label: "In. Stop Loss", color: "#141d26", value: "x" },
  { label: "Entry and exit", type: "header" },
  { label: "In. Entry Price", value: "1.0560", color: "#8579e2" },
  { label: "Entry Price", value: "1.0562", color: "#8579e2" },
  { label: "In. Exit Price", value: "1.0570", color: "#8579e2" },
  { label: "Exit Price", value: "1.0572", color: "#8579e2" },
];

const DropdownMenu = () => {
  return (
    <DropdownContainer>
      .{" "}
      <DropdownContent>
        {items.map((item, index) => (
          <DropdownItem key={index} color={item.color}>
            <div className="item-label">
              {item.color && (
                <div
                  className="mini-box"
                  style={{ backgroundColor: item.color }}
                ></div>
              )}
              {item.label}
            </div>
            {item.value && <div className="item-value">{item.value}</div>}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default DropdownMenu;
