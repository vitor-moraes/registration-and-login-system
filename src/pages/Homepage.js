// Imports
import React, { useEffect } from "react";

// Tests
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import StandardUserPage from "./StandardUserPage";

// Exports
export default function Homepage() {
  //
  useEffect(() => {
    // console.log(localStorage.getItem("acesso"));
    // if (!localStorage.getItem("acesso")) {
    //   window.location.href = "/login";
    // }
  }, []);
  //
  return (
    <>
      <StandardUserPage />
    </>
  );
}
