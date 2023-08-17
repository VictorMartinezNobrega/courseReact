import { useState, useEffect } from "react";

// 4 - custom hook
//exportando a função que recebe por parametro a url lá no app quando ela é chamada
export const useFetch = (url) => {
    const [data, setData] = useState(null); //usando state para guardar os dados em data / sendo null pq ainda não recebeu 
    //esse data é puxado no componete para exibir os dados na tela na hora do get

    //5 - Refatorando POST
    const [config, setConfig] = useState(null); //vai configurar metodo que vai ultilizar ex:POST, configurar os cabeçalhos(headers)
    const [method, setMethod] = useState(null); //vai me dizer qual metodo estarei ultilizando na minha função ex: GET or POST
    const [callFetch , setCallFecth] = useState(false); //vai entrar ali junto com use effetc para mapear ele, sempre que for alterar ira chamar fetch dnv

    //6 - Loading
    const [loading, setLoading] = useState(false); //começa false

    const httpConfig = (data, method) => { //exporto esse aqui, pq queremos o processo e não o resultado, o resultado é mostrado no GET
        if(method === "POST") {
            setConfig({  //como esse cara aqui muda a configuração /exporto a funtion então
                method, //precisa por nada pq esse metodo entra nesse if já sabendo que é POST
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data), //recebe data lá de onde a function é chamada
            });
            setMethod(method);// recebe o "POST" de lá onde a function é chamada
        };
    };

    //4 - Refatorando GET
    useEffect(() => { //querendo ex uma só vez

        const fetchData = async () => {
            setLoading(true); //antes do get acontecer, o loading é true
            const res = await fetch(url);//res geralmente se refere a respota do banco, await espera que p fecth pegue os dados passados pela URL

            const json = await res.json();//transforma resultado da var em json

            setData(json); //seta esse json em data, e data é onde os dados todos vão para o componente para serem exibidos
            setLoading(false); //após get ser feito com sucesso, louding é false
        };

        fetchData(); //roda a function
    }, [url, callFetch]); //dependencia dele o url, se mudar o url ele executara novamente, por isso sempre que mandamos algo para o banco, re aparece na tela já att
                          //dependencia callFetch, se algo mudar dentro desse useEffect ex: URL ao inserir novos dados, irá rodar dnv fetch que gera um novo get na tela
    // 5 - Refatorando POST
    useEffect(() => { //E esse é baseado na configuração/ que recebe a config mudada /exporto a function ent
      const httpRequest = async () => {
        
        if(method === "POST") { //com essa checagem da para fazer muita coisa, identificar EX: UPDATE, DELETE
            let fetchOptions = [url, config] //dinamico, posso pegar uma url diferente/ ou config diferentes onde vai o body, onde vai os dados

            const res = await fetch(...fetchOptions);

            const json = await res.json();

            setCallFecth(json);//modificando aqui, uma dependencia do useEffect GET, logo rodando fetchData, automaticamente refazendo um novo get para exebir o novo dado
        };
      };

      httpRequest();

    }, [config, method, url]); //dependencia config, ent sempre que houver uma alteração na config, chamará esse useEffect, ou qualquer outro parametro para chamar
    //novamente esse processo
    
    return {data , httpConfig, loading}; //retorna data para quem chama-la
};