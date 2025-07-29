import React from 'react';
import '../../lib/bootstrap-5.3.6-dist/css/bootstrap.min.css';

function Imagen (props) {
  return (
    <img
      src={props.src} 
      alt={props.alt} 
      width={props.width} 
      height={props.height} 
      className={"img-fluid " + (props.className ? props.className : "")}
    />
  );
};

export default Imagen;
