import React from "react";
import classes from "./HeaderCartButton.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const incrementItemCtx = useContext(CartContext);
  const itemOnCart = incrementItemCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  const { items } = incrementItemCtx;

  const btnTimer = useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(btnTimer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span>Your Cart</span>
      <AiOutlineShoppingCart className={classes.icon} />
      <span className={classes.badge}>{itemOnCart}</span>
    </button>
  );
};

export default HeaderCartButton;
