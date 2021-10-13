import React, { useState } from "react";

import "./AccountForm.css";

function AccountForm(props) {
  const [enterdName, setEnterdName] = useState("");
  const [enterdWallet, setEnterdWallet] = useState("");
  const [enterdEmail, setEnterdEmail] = useState("");

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
    };
    props.onSaveAccount(accountData);

    setEnterdName("");
    setEnterdWallet("");
    setEnterdEmail("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-account__controls">
        <div className="new-account__control">
          <input
            type="text"
            placeholder="Name"
            value={enterdName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div className="new-account__control">
          <input
            type="text"
            placeholder="Wallet Address"
            value={enterdWallet}
            onChange={walletChangeHandler}
          ></input>
        </div>
        <div className="new-account__control">
          <input
            type="text"
            placeholder="Email"
            value={enterdEmail}
            onChange={emailChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-account__actions">
        <button type="submit">Add Account</button>
      </div>
    </form>
  );
}

export default AccountForm;
