import classes from "./Header.module.css";
import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import img from "../../Assets/meals.jpg";

const Header = (props) => {
  return (
    <div className="app">
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={img} alt="food"></img>
      </div>
    </div>
  );
};

export default Header;
