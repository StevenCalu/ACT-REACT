
import React from 'react';

function Titulo(props) {
  var nivel = props.nivel || 1;
  var HeadingTag = 'h' + nivel;
  return <HeadingTag className={props.className}>{props.texto}</HeadingTag>;
}

export default Titulo;
