import React, { useState } from 'react';

const AreaCuadrada: React.FC = () => {
  const [lado, setLado] = useState<number>(0);
  const [area, setArea] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setLado(value);
    }
  };

  const calcularAreaCuadrado = () => {
    const areaCalculada = lado * lado;
    setArea(areaCalculada);
  };

  return (
    <div>
      <h2>ingrese el valor del area</h2>
      <textarea
        value={lado}
        onChange={handleInputChange}
        placeholder="Ingrese el valor del lado del cuadrado"
      />
      <br />
      <button onClick={calcularAreaCuadrado}>Calcular </button>
      <br />
      {area > 0 && <p>El area del cuadrado a sido: {area}</p>}
    </div>
  );
};

export default AreaCuadrada;




 

