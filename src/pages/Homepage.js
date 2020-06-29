// Imports
import React, { useEffect } from "react";
import Loginpage from "./Loginpage";
import Registrationpage from "./Registrationpage";

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
      <Registrationpage />
    </>
  );
}
