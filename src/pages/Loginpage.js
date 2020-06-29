// Imports
import React from "react";
import LoginForm from "../components/LoginForm";
import LoginLogo from "../components/LoginLogo";

// Exports
export default function Loginpage() {
  return (
    <>
      <div className="container mt-5">
        <div className="card col-10 centralize-card">
          <div className="row">
            <div className="col-6 text-center">
              <LoginLogo />
            </div>
            <div className="vertical-line" />
            <div className="col-5 text-center">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
