import React from 'react';

const CarDetails = ({brand, km, color, newCar}) => {
              //tem que ter essas chaves!!!!!!!!!!!!

  let statusCar
  if(km > 50000) {
    statusCar = "Usado";
  } if(km <= 50000) {
    statusCar = "Semi-Novo"
  } if(km === 0) {
    statusCar = "";
  }

  return (
    <div>
      <h2>Detalhes do carro</h2>
      {newCar && <p>NOVO!!!</p>}
      <ul>
        <li>
          Marca: {brand}
        </li>
        <li>
          KM: {km}
        </li>
        <li>
          Cor: {color}
        </li>
        {statusCar}
      </ul>
    </div>
  )
}

export default CarDetails;