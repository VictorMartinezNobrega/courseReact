const MyComponent = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Audacioso");
    }

    const renderJSX = (x) => {
        if(x) {
            return <h1>Retornando JSX pelo funcao js</h1>
        } else {
            return <h2>Cara isso é incrivel</h2>
        }
    }

    //se algo nao estiver funcionando, pode ser falta do return
    
    return (
        <div>
            <h2>Estou sendo reaproveitado, uuuui</h2>
            <button onClick={handleMyEvent} >Clique aqui!!!</button> {/*Funcao chamada sem parenteses pq nao queremos que ela ja chegue rodando */}
            <button onClick={() => console.log("Quando é simples pode")} >Clique aqui, pff</button>
            <button onClick={() => {
                if(true) {
                    console.log("Deste jeito não é recomendado, por ja ser 'complicado demais' deveria ter uma funcao com nome")
                }
            }} >Clique aqui, dnv</button>
            <div>
                {renderJSX(true)} {/*Funcao com parenteses pq a funcao ja vem rodando */}
                {renderJSX(false)}
            </div>
        </div>
    )

}

export default MyComponent;