import React from "react";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseConitnued}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;
