import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";
import DarkMode from "./components/DarkMode";

const App = () => {
  return (
    <>
      <div className="mainDiv">
        <GeneralInfo />
        <RegistrationForm />
        <DarkMode />
      </div>
    </>
  );
};

export default App;
