// Imports
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

// Import: Pages
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";

// Exports
export default function routes() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
