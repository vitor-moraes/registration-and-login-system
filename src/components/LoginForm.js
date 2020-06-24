import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <>
      <div className="container text-left">
        <form method="POST">
          <div className="form-group">
            {/* Login Line */}
            <div className="mt-3">
              <label htmlFor="login">E-mail:</label>
              <input
                type="text"
                required
                className="form-control"
                id="login"
                name="login"
                placeholder="Insira seu e-mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            {/* Password Line */}
            <div className="mt-3">
              <label htmlFor="password">Senha:</label>
              <input
                typr="text"
                required
                className="form-control"
                id="password"
                name="password"
                placeholder="Insira a sua senha"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
            {/* Button Line */}
            <div className="mt-3"></div>
          </div>
        </form>
      </div>
    </>
  );
}
