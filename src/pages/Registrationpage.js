// Imports
import React from "react";
import RegistrationLogo from "../components/RegistrationLogo";
import RegistrationForm from "../components/RegistrationForm";

// Exports
export default function RegistrationPage() {
  // Return
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="row">
            {/*  */}
            <div className="col-5">
              <RegistrationLogo />
            </div>
            <div className="vertical-line" />
            {/*  */}
            <div className="col-5">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
