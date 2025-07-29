import React, { useState } from 'react';
import Imagen from './components/basicos/imagen';
import Titulo from './components/basicos/titulo';
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

      </section>
    </div>
  );
}

export default App;
