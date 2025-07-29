import React from 'react';
import { Button } from 'react-bootstrap';

function Boton(props) {
  const { texto, onClick, type = 'button', variant = 'primary', className } = props;

  return (
    <Button
      type={type}
      onClick={onClick}
      variant={variant}
      className={className}
    >
      {texto}
    </Button>
  );
}
export default Boton;
