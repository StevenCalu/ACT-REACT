import React, { useState } from 'react';
import Imagen from './components/basicos/imagen';
import Titulo from './components/basicos/titulo';
import Parrafo from './components/basicos/parrafo';
import Enlace from './components/basicos/enlace';
import './lib/bootstrap-5.3.6-dist/css/bootstrap.min.css';

function App() {

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

        <Enlace
          href="https://www.mecanicoautomotriz.org/"
          texto="Conoce más sobre nuestros servicios"
          className="fw-bold"
          target="_blank"
        />
      </section>
    </div>
  );
}

export default App;
