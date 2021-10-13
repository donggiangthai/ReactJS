import React from "react";
import Card from "../UI/Card";
import AccountList from "./AccountList";

import "./Account.css";

const Account = (props) => {
  return (
    <Card className="accounts">
      <AccountList accounts={props.items} />
    </Card>
  );
};

export default Account;
