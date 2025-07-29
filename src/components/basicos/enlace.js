import React from 'react';

function Enlace(props) {
  return (
    <a
      href={props.href}
      className={`btn btn-link ${props.className ? props.className : ''}`}
      target={props.target ? props.target : '_self'}
    >
      {props.texto}
    </a>
  );
}

export default Enlace;
