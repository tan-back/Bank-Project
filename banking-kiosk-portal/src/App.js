import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import './App.css';

// Importing Styles
import './style/Home.css';
import './style/Accinfo.css';
import './style/Loans.css';
import './style/Bank-services.css';
import './style/Atm.css';
import './style/Chkbook.css';
import './style/Locker.css';
import './style/Digital.css';
import './style/custsupport.css';
import './style/LocateUs.css';
import './style/Rules.css';
import './style/Updates.css';
import './style/SavingAcc.css';
import './style/Recurring.css';
import './style/Fixed.css';
import './style/Salary.css';
import './style/Current.css';
import './style/Eduloan.css';
import './style/Homeloan.css';
import './style/Goldloan.css';
import './style/Perloan.css';
import './style/Vehloan.css';
import './style/Busiloan.css';
import './style/ChatPopup.css';

import InactivityHandler from "./components/InactivityHandler"; // ✅ Kept from the second version
import Login from './components/Login';

function App() {
  const [validUser, setValidUser] = useState(false); // ✅ Fixed to ensure default state

  const getValidUser = (user) => {
    const isValid = Boolean(user);
    sessionStorage.setItem("ValidUser", isValid);
    setValidUser(isValid);
  };

  useEffect(() => {
    const isValidUser = sessionStorage.getItem("ValidUser") === "true";
    setValidUser(isValidUser);
  }, []); // ✅ Fixed dependency to run only once

  return (
    <React.Fragment>
      {validUser ? <Home /> : <Login getValidUser={getValidUser} />}
      <InactivityHandler timeout={60000} /> {/* ✅ Kept from the second version */}
    </React.Fragment>
  );
}

export default App;
