import React from 'react';

function Lista(props) {
  return (
    <ul className={props.className}>
      {props.elementos.map(function (item, index) {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default Lista;
