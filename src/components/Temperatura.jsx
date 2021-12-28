import React, { Fragment, useState } from "react";

const Temperatura = (props) => {
  const [temp, setTemp] = useState(19);

  const subir = () => {
    setTemp(temp + 1);
  };

  const bajar = () => {
    setTemp(temp - 1);
  };

  return (
    <Fragment>
      <h1 className="container" >Temperatura = {temp}</h1>
      <h3>{temp > 21 ? "Hace Calor" : "Esta Fresquito"}</h3>
      <button className="btn btn-success" onClick={subir}>
        Subir
      </button>
      <button className="btn btn-success m-3" onClick={bajar}>
        Bajar
      </button>
    </Fragment>
  );
};

export default Temperatura;
