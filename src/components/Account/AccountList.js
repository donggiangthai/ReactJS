import React from "react";

import AccountInfo from "./AccountInfo";

import classes from "./AccountList.module.css";

function AccountList(props) {
  return (
    <div className={classes["accounts-list"]}>
      {props.accounts.map((info) => (
        <AccountInfo
          key={info.id}
          name={info.name}
          walletAddress={info.walletAddress}
          email={info.email}
          id={info.id}
        />
      ))}
    </div>
  );
}

export default AccountList;
