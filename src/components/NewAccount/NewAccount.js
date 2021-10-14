import React from "react";

import classes from "./NewAccount.module.css";
import AccountForm from "./AccountForm";

function NewAccount() {
  return (
    <div className={classes["new-account"]}>
      <AccountForm />
    </div>
  );
}

export default NewAccount;
