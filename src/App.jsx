import "./App.css";
import Contador from "./components/Contador";
import Temperatura from "./components/Temperatura";
import Formulario from "./components/Formulario";
import Base from "./components/Base";
import Usuarios from "./components/Usuarios";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Usuario from "./components/Usuario";


function App() {
  return (
    <Router>
      <Link to="/">Inicio | </Link>
      <Link to="/contador">Contador | </Link>
      <Link to="/temperatura">Temperatura | </Link>
      <Link to="/formulario">Formulario | </Link>
      <Link to="/usuarios">Usuarios</Link>
      

      <Routes>
        <Route exact path="/" element={<Base />} />

        <Route exact path="/usuarios" element={<Usuarios />} />
        <Route exact path="/usuario/:id" element={<Usuario />} />

        <Route path="/contador" element={<Contador />} />

        <Route path="/temperatura" element={<Temperatura />} />

        <Route path="/formulario/" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;
