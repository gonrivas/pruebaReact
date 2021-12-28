import React, { Fragment, useState } from "react";

const Contador = () => {
  const [number, setNumber] = useState(0);
  const subir = () => {
    setNumber(number + 1);
  };
  const bajar = () => {
    setNumber(number - 1);
  };

  return (
    <Fragment>
      <h1 className="container mt-5 ">Contador = {number}</h1>
      <button className="btn btn-warning m-3" onClick={subir}>
        Subir
      </button>
      <button className="btn btn-warning m-3" onClick={bajar}>
        Bajar
      </button>
    </Fragment>
  );
};

export default Contador;
