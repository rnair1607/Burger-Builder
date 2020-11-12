import React from "react";
import styles from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log(transformedIngredients);

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length === 0 ? (
        <p>Add some ingredient</p>
      ) : (
        transformedIngredients
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
