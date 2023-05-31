import React from 'react';

const UserDatails = ({key, name, age, work}) => {

    

  return (
    <div>
        <ul>
            <li>
                Nome: {name}
            </li>
            <li>
                Idade: {age}
            </li>
            <li>
                Profissão: {work}
            </li>
            <p>Pode tirar carta? {age >= 18 ? "sim" : "não"}</p>
            <p>--------------------</p>
        </ul>
    </div>
  )
}

export default UserDatails;