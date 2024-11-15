import React from 'react';

const Confirm = () => {
  return (
    <div className="confirmation-container">
      <h1>¡Tu registro ha sido exitoso!</h1>
      <button onClick={() => window.location.href = '/'}>Ir al inicio</button>
    </div>
  );
};

export default Confirm;