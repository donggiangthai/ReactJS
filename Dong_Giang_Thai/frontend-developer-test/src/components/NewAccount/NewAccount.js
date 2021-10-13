import React from "react";

import "./NewAccount.css";
import AccountForm from "./AccountForm";

function NewAccount(props) {
  const saveAccountHandler = (enteredAccountData) => {
    const accountData = {
      ...enteredAccountData,
      id: Math.random().toString(),
    };
    props.onAddAccount(accountData);
  };

  return (
    <div className="new-account">
      <AccountForm onSaveAccount={saveAccountHandler} />
    </div>
  );
}

export default NewAccount;
