import React from 'react';

function Tabla(props) {

  return (
    <table
      className={
        "table table-striped table-bordered table-hover table-responsive " +
        props.className
      }
    >
      <thead>
        <tr>
          {}
          {props.cabecera.map((titulo, i) => {
            return <th key={i}>{titulo}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {}
        {props.datos.map((fila, filaIndex) => {
          return (
            <tr key={filaIndex}>
              {fila.map((celda, celdaIndex) => {
                return <td key={celdaIndex}>{celda}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Tabla;
