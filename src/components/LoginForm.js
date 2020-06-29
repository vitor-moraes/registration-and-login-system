// Imports
import React, { useState } from "react";

// Exports
export default function LoginForm() {
  // Hook's States
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // Submit button function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  // Return
  return (
    <>
      <div className="container text-left">
        <form method="POST">
          <div className="form-group mt-4">
            {/* Login's Line */}
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
            {/* Password's Line */}
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
            {/* Button's Line */}
            <div className="mt-3 text-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="basic-btn"
              >
                Entrar
              </button>
              {/* Registration's Line */}
              <div className="mt-3">
                <p>Você ainda não possui cadastro?</p>
                <a className="register-link" href="/cadastro">
                  Cadastre-se aqui.
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
