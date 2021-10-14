import React, { useState } from "react";

const DUMMY_DATA = [
  {
    id: "a1",
    name: "Alex",
    walletAddress: "0xD25b73c6E496F95bd7Ad841ce34944EAD6E9F35B",
    email: "Alex@gmail.com",
  },
  {
    id: "a2",
    name: "Peter",
    walletAddress: "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
    email: "Peter@gmail.com",
  },
  {
    id: "a3",
    name: "Alan",
    walletAddress: "0x0472ec0185ebb8202f3d4ddb0226998889663cf2",
    email: "Alan@gmail.com",
  },
  {
    id: "a4",
    name: "Angela",
    walletAddress: "0xef8d8B0790169bC7fdAf056CD32A2950CA5E0052",
    email: "Angela@gmail.com",
  },
];

const ModifyContext = React.createContext({
  onAddAccount: () => {},
  onDelete: () => {},
  accounts: [],
});

export const ModifyContextProvider = (props) => {
  const [accounts, setAccounts] = useState(DUMMY_DATA);

  const addNewAccountHandler = (accountData) => {
    setAccounts((prevAccounts) => {
      return [accountData, ...prevAccounts];
    });
  };

  const deleteAccountHandler = (id) => {
    const tempAccountList = accounts.filter((account) => {
      return account.id !== id;
    });
    setAccounts(tempAccountList);
  };
  console.log(accounts);

  return (
    <ModifyContext.Provider
      value={{
        onAddAccount: addNewAccountHandler,
        onDelete: deleteAccountHandler,
        accounts: accounts,
      }}
    >
      {props.children}
    </ModifyContext.Provider>
  );
};

export default ModifyContext;
