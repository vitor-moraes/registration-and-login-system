// Imports
import React, { useState } from "react";
// import api from "../services/api";
import InputMask from "react-input-mask";

// Exports
export default function RegistrationForm() {
  // useStates
  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [file, setFile] = useState(null);
  const data = new FormData(); // Always need when uses files requests

  // Registration form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    data.append("name", name);
    data.append("cpf", cpf);
    data.append("email", email);
    data.append("password", password);
    data.append(
      "fileImage",
      new File([file], Date.now() + ".jpg", { type: "image/jpg" })
    );
    // try {
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // Return
  return (
    <>
      <div className="container text-left">
        {/* Registration's Column */}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            {/* Name's Line */}
            <div>
              <label className="" htmlFor="name">
                Nome Completo
              </label>
              <div>
                <input
                  type="name"
                  required
                  className=""
                  id="name"
                  name="name"
                  placeholder="insira seu nome completo"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* CPF's Line */}
            <div>
              <label className="" htmlFor="cpf">
                CPF
              </label>
              <div>
                <InputMask
                  type="text"
                  name="cpf"
                  mask="999.999.999-99"
                  pattern="\d{3}\.\d{3}\.\d{3}\-\d{2}"
                  required
                  className=""
                  id="cpf"
                  placeHolder="xxx.xxx.xxx-xx"
                  onChange={(e) => {
                    setCpf(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* Email's Line */}
            <div>
              <label className="" htmlFor="email">
                E-mail
              </label>
              <div>
                <input
                  type="email"
                  required
                  className=""
                  id="email"
                  name="email"
                  placeholder="Insira seu e-mail aqui"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* Password's Line */}
            <div>
              <label className="" htmlFor="password">
                Senha
              </label>
              <div>
                <input
                  type="password"
                  required
                  className=""
                  id="password"
                  name="password"
                  placeholder="Insira sua senha aqui"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* File's Line */}
            <div>
              <label className="" htmlFor="file">
                Foto de perfil
              </label>
              <div>
                <input
                  type="file"
                  required
                  className=""
                  accept=".jpg"
                  id="file"
                  name="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </div>
            </div>
            {/* Registration Button */}
            <div className="">
              <button className="basic-btn" type="submit">
                Cadastre-se!
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
