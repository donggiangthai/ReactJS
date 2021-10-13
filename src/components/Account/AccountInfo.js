import React, { useState } from "react";

import Card from "../UI/Card";
import "./AccountInfo.css";

let tempname, tempwallet, tempemail;

function AccountInfo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [enterdName, setEnterdName] = useState(props.name);
  const [enterdWallet, setEnterdWallet] = useState(props.walletAddress);
  const [enterdEmail, setEnterdEmail] = useState(props.email);

  tempname = enterdName;
  tempwallet = enterdWallet;
  tempemail = enterdEmail;

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
    setEnterdName(tempname);
    setEnterdWallet(tempwallet);
    setEnterdEmail(tempemail);
    setIsEditing(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    tempname = enterdName;
    tempwallet = enterdWallet;
    tempemail = enterdEmail;
    setIsEditing(false);
  };

  const deleteHandler = () => {
    console.log(props.name, props.id);
  };

  return (
    <div>
      {!isEditing && (
        <Card className="account-item">
          <div className="account-item__description">{enterdName}</div>
          <div>{enterdWallet}</div>
          <div>{enterdEmail}</div>
          <div className="account__actions">
            <button type="button" onClick={updateHandler}>
              Update
            </button>
            <button type="button" onClick={deleteHandler}>
              Delete
            </button>
          </div>
        </Card>
      )}
      {isEditing && (
        <Card className="account-item">
          <form onSubmit={submitHandler}>
            <div className="account__controls">
              <div className="account__control">
                <input
                  type="text"
                  value={enterdName}
                  onChange={nameChangeHandler}
                ></input>
              </div>
              <div className="account__control">
                <input
                  type="text"
                  value={enterdWallet}
                  onChange={walletChangeHandler}
                ></input>
              </div>
              <div className="account__control">
                <input
                  type="text"
                  value={enterdEmail}
                  onChange={emailChangeHandler}
                ></input>
              </div>
            </div>
            <div className="account__actions">
              <button type="button" onClick={cancelHandler}>
                Cancel
              </button>
              <button type="submit">Update</button>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
}

export default AccountInfo;
