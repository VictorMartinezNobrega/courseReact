import React from 'react';

const CarDetails = ({key, brand, hp, traction}) => {
  return (
    <div>
      <ul>
        <li>
          <h1>{brand}</h1>
          <p>hp: {hp}</p>
          <p>traction: {traction}</p>
        </li>
      </ul>
    </div>
  )
}

export default CarDetails;