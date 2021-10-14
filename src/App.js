import React from "react";

import "./App.css";
import NewAccount from "./components/NewAccount/NewAccount";
import Account from "./components/Account/Account";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <NewAccount />
        <Account />
      </div>
    </React.Fragment>
  );
}

export default App;
