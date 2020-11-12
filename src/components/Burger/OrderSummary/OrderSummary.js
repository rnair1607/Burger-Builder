import React from "react";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((data) => {
    return (
      <li key={data}>
        <span style={{ textTransform: "capitalize" }}>{data}</span>:
        {props.ingredients[data]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your order</h3>
      <hr></hr>
      <p>A delicious burger with the following ingredieants:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </React.Fragment>
  );
};

export default orderSummary;
