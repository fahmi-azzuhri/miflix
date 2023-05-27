import React, { useState } from "react";
import "../loginpage.css";
import { Login } from ".././pages/Login";
import { Register } from ".././pages/Register";

function LoginPage() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="LoginPage">
      <div className="main">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
