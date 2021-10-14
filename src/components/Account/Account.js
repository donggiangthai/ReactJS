import React, { useContext } from "react";
import Card from "../UI/Card/Card";
import AccountList from "./AccountList";

import classes from "./Account.module.css";
import ModifyContext from "../../context/modify-context";

const Account = () => {
  const ctx = useContext(ModifyContext);

  return (
    <Card className={classes["accounts"]}>
      <AccountList accounts={ctx.accounts} />
    </Card>
  );
};

export default Account;
