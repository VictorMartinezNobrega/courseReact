import React from 'react'

                    //props vem como um obj
const ShowUserName = (props) => {
  return (
    <div>
        <h2>
            Nome do cliente: {props.jedi}
        </h2>
        <h3>
            é pai de: {props.names[0].name} e {props.names[1].name} ambos são {props.names[0].cargo}
        </h3>
    </div>
  )
}

export default ShowUserName;