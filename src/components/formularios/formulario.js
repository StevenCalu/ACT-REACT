import React from 'react';

function Formulario({ children, onSubmit, className = '' }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`needs-validation ${className}`}>
      {children}
    </form>
  );
}

export default Formulario;
