import React, { useState, useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountToNumber = +enteredAmount;

    if (
      enteredAmountToNumber < 0 ||
      enteredAmountToNumber > 5 ||
      enteredAmount.trim().length === 0
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountToNumber);
    handleShowToast();
  };

  const handleShowToast = () => {
    toast.success("Item Added!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
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
      <button type="submit">+ Add</button>
      {!isAmountValid && <p>Form Not Valid!" </p>}
    </form>
  );
};

export default MealItemForm;
