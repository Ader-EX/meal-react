import React from "react";
import classes from "./HeaderCartButton.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your Cart</span>
      <AiOutlineShoppingCart className={classes.icon} />
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
