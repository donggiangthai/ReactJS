import React, { useState, useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./AccountInfo.module.css";
import ModifyContext from "../../context/modify-context";

const AccountInfo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [enterdName, setEnterdName] = useState(props.name);
  const [tempName, setTempName] = useState(enterdName);
  const [enterdWallet, setEnterdWallet] = useState(props.walletAddress);
  const [tempWallet, setTempWallet] = useState(enterdWallet);
  const [enterdEmail, setEnterdEmail] = useState(props.email);
  const [tempEmail, setTempEmail] = useState(enterdEmail);

  const nameChangeHandler = (event) => {
    setEnterdName(event.target.value);
  };
  const walletChangeHandler = (event) => {
    setEnterdWallet(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnterdEmail(event.target.value);
  };

  const updateHandler = () => {
    setIsEditing(true);
  };

  const cancelHandler = () => {
    setEnterdName(tempName);
    setEnterdWallet(tempWallet);
    setEnterdEmail(tempEmail);
    setIsEditing(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setTempName(enterdName);
    setTempWallet(enterdWallet);
    setTempEmail(enterdEmail);
    setIsEditing(false);
  };

  const ctx = useContext(ModifyContext);

  const deleteHandler = () => {
    ctx.onDelete(props.id);
  };

  return (
    <div>
      {!isEditing && (
        <Card className={classes["account-item"]}>
          <div>{enterdName}</div>
          <div>{enterdWallet}</div>
          <div>{enterdEmail}</div>
          <div className={classes["account__actions"]}>
            <Button onClick={updateHandler}>Update</Button>
            <Button onClick={deleteHandler}>Delete</Button>
          </div>
        </Card>
      )}
      {isEditing && (
        <Card className={classes["account-item"]}>
          <form onSubmit={submitHandler}>
            <div className={classes["account__controls"]}>
              <div className={classes["account__control"]}>
                <input
                  type="text"
                  value={enterdName}
                  onChange={nameChangeHandler}
                ></input>
              </div>
              <div className={classes["account__control"]}>
                <input
                  type="text"
                  value={enterdWallet}
                  onChange={walletChangeHandler}
                ></input>
              </div>
              <div className={classes["account__control"]}>
                <input
                  type="text"
                  value={enterdEmail}
                  onChange={emailChangeHandler}
                ></input>
              </div>
            </div>
            <div className={classes["account__actions"]}>
              <Button onClick={cancelHandler}>Cancel</Button>
              <Button type="submit">Update</Button>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
};

export default AccountInfo;
