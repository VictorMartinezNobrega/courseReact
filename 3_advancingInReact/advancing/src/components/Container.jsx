import React from 'react';

const Container = ({children, maisConteudo}) => {
    return (
        <div>
            <h4>Conteudo do Container estara abaixo</h4>
            {children}
            <p>conteudo é {maisConteudo}</p>
        </div>
    )
}

export default Container;