import { useState, useEffect } from "react";

// 4 - custom hook
//exportando a função que recebe por parametro a url lá no app quando ela é chamada
export const useFetch = (url) => {
    const [data, setData] = useState(null); //usando state para guardar os dados em data / sendo null pq ainda não recebeu 

    useEffect(() => { //querendo ex uma só vez

        const fetchData = async () => {
            const res = await fetch(url);//res geralmente se refere a respota do banco, await espera que p fecth pegue os dados passados pela URL

            const json = await res.json();//transforma resultado da var em json

            setData(json); //seta esse json em data
        }

        fetchData(); //roda a function
    }, [url]); //dependencia dele o url, se mudar o url ele executara novamente, por isso sempre que mandamos algo para o banco, re aparece na tela já att

    return {data}; //retorna data para quem chama-la
};