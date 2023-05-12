import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import Toast from "../UI/Toast";

const MealItemForm = (props) => {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
    setTimeout(() => {
      const toastEl = document.querySelector(".toast");
      toastEl.classList.add("fade");
    }, 1500);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={handleShowToast}>+ Add</button>
      {showToast && <Toast message="Item Added!" />}
    </form>
  );
};

export default MealItemForm;
