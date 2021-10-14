import React, { useState, useContext } from "react";
import ModifyContext from "../../context/modify-context";

import classes from "./AccountForm.module.css";

function AccountForm() {
  const [enterdName, setEnterdName] = useState("");
  const [enterdWallet, setEnterdWallet] = useState("");
  const [enterdEmail, setEnterdEmail] = useState("");

  const ctx = useContext(ModifyContext);

  const nameChangeHandler = (event) => {
    setEnterdName(event.target.value);
  };
  const walletChangeHandler = (event) => {
    setEnterdWallet(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnterdEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const accountData = {
      name: enterdName,
      walletAddress: enterdWallet,
      email: enterdEmail,
      id: Math.random().toString(),
    };
    ctx.onAddAccount(accountData);
    // props.onSaveAccount(accountData);

    setEnterdName("");
    setEnterdWallet("");
    setEnterdEmail("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["new-account__controls"]}>
        <div className={classes["new-account__control"]}>
          <input
            type="text"
            placeholder="Name"
            value={enterdName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div className={classes["new-account__control"]}>
          <input
            type="text"
            placeholder="Wallet Address"
            value={enterdWallet}
            onChange={walletChangeHandler}
          ></input>
        </div>
        <div className={classes["new-account__control"]}>
          <input
            type="text"
            placeholder="Email"
            value={enterdEmail}
            onChange={emailChangeHandler}
          ></input>
        </div>
      </div>
      <div className={classes["new-account__actions"]}>
        <button type="submit">Add Account</button>
      </div>
    </form>
  );
}

export default AccountForm;
