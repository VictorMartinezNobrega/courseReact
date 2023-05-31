import React, { useState } from 'react';
import "./MyComponents.css";

const MyComponents = () => {
    const n = 9;
    const [name] = useState("matheus");
    const [color, setColor] = useState("")
    const handleChange = (event) => setColor(event.target.value);


    return (
        <div>
            <div>
                <h1>Componente!!!</h1>
                <p className='pCompo'>P do componente</p>
                {/**CSS inline dinamico */}
                <h2 style={
                    n < 10 ? { color: "orange" } : { color: "blue" }
                }>Css dinamico
                </h2>
                <h2 style={
                    n > 10 ? { color: "orange" } : { color: "blue" }
                }>Css dinamico
                </h2>
            </div>
            <div>
                <p
                    style={
                        name === "matheus" ? { color: "red", background: "blue" } : { color: "blue", background: "red" }
                    }
                >
                    O brabo
                </p>
                <input placeholder='vermelho em japonês?' onChange={handleChange} />
                <p
                    style={color === "aka" ? {color: "green"} : {color: "red"}}
                >{color === "aka" ? "Tadashī" : "Furigana"}</p>
            </div>
        </div>
    )
}

export default MyComponents;