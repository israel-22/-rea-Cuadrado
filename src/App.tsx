import React from 'react';
import AreaCuadrada from './typescrip/areaCuadrada';
// Asegúrate de que la ruta del archivo sea correcta

const App: React.FC = () => {
  const ladoDelCuadrado = 5; // Define el valor del lado del cuadrado

  return (
    <div>
      <h1>Area del Cuadrado</h1>
      <AreaCuadrada /> 
    </div>
  );
};

export default App;
