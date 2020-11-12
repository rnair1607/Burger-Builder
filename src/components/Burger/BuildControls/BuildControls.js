import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map((buildControl) => {
        return (
          <BuildControl
            key={buildControl.label}
            added={() => props.ingredientAdded(buildControl.type)}
            removed={() => props.ingredientRemoved(buildControl.type)}
            label={buildControl.label}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
