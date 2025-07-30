import React, { useState } from 'react';
import Imagen from './components/basicos/imagen';
import Titulo from './components/basicos/titulo';
import Parrafo from './components/basicos/parrafo';
import Enlace from './components/basicos/enlace';
import Lista from './components/listas-tablas/lista';
import Tabla from './components/listas-tablas/tabla';
import Formulario from './components/formularios/formulario';
import Boton from './components/formularios/boton';
import InputText from './components/inputs-especiales/input-text';
import InputEmail from './components/inputs-especiales/input-email';
import InputPassword from './components/inputs-especiales/input-password';
import InputSearch from './components/inputs-especiales/input-search';
import InputTel from './components/inputs-especiales/input-tel';
import InputURL from './components/inputs-especiales/input-url';

import 'bootstrap/dist/css/bootstrap.min.css';
import './lib/bootstrap-5.3.6-dist/css/bootstrap.min.css';

function App() {
  const servicios = [
    "Cambio de aceite",
    "Revisión de frenos",
    "Alineación y balanceo",
    "Diagnóstico computarizado",
    "Servicio de suspensión",
    "Revisión eléctrica"
  ];

  const cabecera = ["Servicio", "Duración", "Precio aproximado"];
  const datos = [
    ["Cambio de aceite", "30 minutos", "$25"],
    ["Revisión de frenos", "45 minutos", "$35"],
    ["Alineación y balanceo", "1 hora", "$40"],
    ["Diagnóstico computarizado", "1 hora", "$50"]
  ];

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Gracias por contactarnos, ${nombre}. Pronto responderemos a tu correo: ${correo}`);
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <div className="container my-5">
      <section className="mb-5 bg-light p-4 p-md-5 rounded-3 shadow">

        <Titulo
          texto="Mecánica Automotriz Multimarca GM"
          nivel={1}
          className="text-center text-primary display-5 mb-4"
        />

        <div className="text-center mb-4">
          <Imagen
            src="mecanica.jpg"
            alt="Taller de mecánica"
            className="img-fluid rounded shadow w-50"
          />
        </div>

        <Titulo
          texto="Nos especializamos en: KIA - HYUNDAI - CHEVROLET - SUZUKI - TOYOTA - CHERY - OTROS"
          nivel={3}
          className="text-center text-secondary fw-semibold mb-4"
        />

        <Parrafo
          texto="Ofrecemos servicios completos e integrales de mecánica automotriz, orientados a mantener y optimizar el funcionamiento de su vehículo, sin importar la marca o el modelo..."
          className="text-muted fst-italic text-center mb-5"
        />

        <Titulo
          texto="Servicios que ofrecemos:"
          nivel={4}
          className="fw-bold mb-3"
        />
        <Lista elementos={servicios} className="list-group list-group-flush mb-4" />

        <Titulo
          texto="Detalles de servicios"
          nivel={4}
          className="fw-bold mb-3"
        />
        <Tabla cabecera={cabecera} datos={datos} className="table table-striped mb-4" />

        <div className="text-center mb-5">
          <Enlace
            href="https://www.mecanicoautomotriz.org/"
            texto="Conoce más sobre nuestros servicios"
            className="btn btn-outline-primary fw-bold"
            target="_blank"
          />
        </div>

        <Titulo
          texto="Contáctanos"
          nivel={4}
          className="fw-bold mb-3"
        />

        <div className="card shadow rounded-3 p-4 mb-5">
          <div className="card-body">
            <Formulario onSubmit={manejarEnvio}>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre completo:</label>
                  <InputText
                    id="nombre"
                    className="form-control"
                    placeholder="Escribe tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    minLength={2}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="correo" className="form-label">Correo electrónico:</label>
                  <InputEmail
                    id="correo"
                    className="form-control"
                    placeholder="ejemplo@correo.com"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="clave" className="form-label">Contraseña:</label>
                  <InputPassword
                    id="clave"
                    className="form-control"
                    placeholder="Escribe tu contraseña"
                    required
                    minLength={6}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono:</label>
                  <InputTel
                    id="telefono"
                    className="form-control"
                    placeholder="0999999999"
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="website" className="form-label">Sitio web:</label>
                  <InputURL
                    id="website"
                    className="form-control"
                    placeholder="https://tusitio.com"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="busqueda" className="form-label">¿Qué servicio buscas?</label>
                  <InputSearch
                    id="busqueda"
                    className="form-control"
                    placeholder="Ej. alineación"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje:</label>
                <textarea
                  id="mensaje"
                  className="form-control"
                  rows="4"
                  placeholder="Escribe tu mensaje aquí..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                  minLength={5}
                ></textarea>
              </div>

              <Boton
                type="submit"
                variant="success"
                className="btn btn-success btn-lg w-100 mt-3"
                texto="Enviar mensaje"
              />
            </Formulario>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
