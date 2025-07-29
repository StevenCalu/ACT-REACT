import React, { useState } from 'react';
import Imagen from './components/basicos/imagen';
import Titulo from './components/basicos/titulo';
import Parrafo from './components/basicos/parrafo';
import Enlace from './components/basicos/enlace';
import Lista from './components/listas-tablas/lista';
import Tabla from './components/listas-tablas/tabla';
import Formulario from './components/formularios/formulario';
import Boton from './components/formularios/boton';
import Input from './components/formularios/input';
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

  return (
    <div className="container mt-5">
      <section className="mb-5">

        <Titulo
          texto="Mecánica Automotriz Multimarca GM"
          nivel={1}
          className="text-primary mb-3"
        />

        <Imagen
          src="mecanica.jpg"
          alt="Taller de mecánica"
          width="150"
          height="150"
          className="d-block mb-3"
        />

        <Titulo
          texto="Nos especializamos en: KIA - HYUNDAI - CHEVROLET - SUZUKI - TOYOTA - CHERY - OTROS"
          nivel={3}
          className="text-secondary mb-4"
        />

        <Parrafo
          texto="Ofrecemos servicios completos e integrales de mecánica automotriz, orientados a mantener y optimizar el funcionamiento de su vehículo, sin importar la marca o el modelo..."
          className="text-muted fst-italic mb-4"
        />

        <Titulo
          texto="Servicios que ofrecemos:"
          nivel={4}
          className="fw-semibold mb-2"
        />
        <Lista elementos={servicios} className="list-group mb-4" />

        <Enlace
          href="https://www.mecanicoautomotriz.org/"
          texto="Conoce más sobre nuestros servicios"
          className="fw-bold"
          target="_blank"
        />

        <Titulo
          texto="Contáctanos"
          nivel={4}
          className="fw-semibold mt-5 mb-3"
        />

        <div className="card shadow-sm mb-5">
          <div className="card-body">
            <Formulario onSubmit={manejarEnvio}>

              <Input
                type="text"
                id="nombre"
                label="Nombre completo:"
                className="form-control"
                placeholder="Escribe tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                minLength={2}
              />

              <Input
                type="email"
                id="correo"
                label="Correo electrónico:"
                className="form-control"
                placeholder="ejemplo@correo.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />

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
                className="w-100"
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
