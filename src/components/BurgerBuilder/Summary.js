import React from "react";

const Summary = ({ ingredients }) => {
  const ingredientSummary = ingredients.map((item) => {
    return (
      <li key={item.type}>
        <span style={{ textTransform: "capitalize" }}>{item.type}</span>{" "}
        {item.amount}
      </li>
    );
  });
  return (
    <div>
      <ul>{ingredientSummary}</ul>
    </div>
  );
};

export default Summary;
