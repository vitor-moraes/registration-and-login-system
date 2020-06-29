// Imports
import React from "react";
import RegistrationLogo from "../components/RegistrationLogo";
import RegistrationForm from "../components/RegistrationForm";

// Exports
export default function Registrationpage() {
  // Return
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="row">
            {/*  */}
            <div className="col-6">
              <RegistrationLogo />
            </div>
            {/*  */}
            <div className="col-6">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
