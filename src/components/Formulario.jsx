import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Formulario = () => {
  const [nombre, setNombre] = useState("Cargando...");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setNombre("Gonzalo");
    }, 2000);
  });

  const { name } = useParams();

  return (
    <div>
      <h1>{name}</h1>
      <h2>{nombre}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("apretaste el boton");
        }}
        className="form-group m-5"
      >
        <input
          placeholder="Introduce tu nombre"
          className="form-control mb-3 "
          type="text"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <input
          placeholder="Introduce tu email"
          className="form-control mb-3"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input className="btn btn-info btn-block" type="submit" />
      </form>
    </div>
  );
};
export default Formulario;
