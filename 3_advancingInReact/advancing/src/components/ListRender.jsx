import { useState } from 'react'

function ListRender() {
  //variavel list é um array/ useState atribue valor na variavel list
    let [list] = useState(['Meg', 'Kira', 'Tiara']);

  //variavel user um array de obj/ com state dando valor ao user
    let [user, setUser] = useState([
        {id: 1, name: 'Cesar', age: 19},
        {id: 2, name: 'Felipe', age: 21},
        {id: 3, name: 'Gabriel', age: 26},
        {id: 4, name: 'Thomas', age: 16}
    ]);
  
    const deleteRandom = () => {
      // A função Math.random() retorna um número pseudo-aleatório no intervalo / A função Math.floor(x) retorna o menor número inteiro
      const randomNum = Math.floor(Math.random() * 5);

      //previous state pode pegar o dado em seu valor original dentro de um set de dado (neste caso "setUser")
      setUser((prevUser) => {
        console.log(prevUser);
        return prevUser.filter((user) => randomNum !== user.id);
      });
    };

  return (
    <div>
        <div>
          <p>#################################</p>
        </div>
        <div>
          {/*imprime list com metodo map/ callback com parametro item que seria o valor dentro do array/ parametro i de id do array*/}
          {list.map((item, i) => (
            //um JSX com key que seria a id do array e item sendo impresso
            <li key={i}>{item}</li>
          ))}
        </div>
        <div>
          <p>#################################</p>
        </div>
        <div>
          {/*impprimindo user com map/ usando nome de profile que seria o obj */}
          {user.map((profile) => (
              //imprimindo li com key de cada usuario/ obj.name tem obj.age anos/ passando por todos os obj
              <li key={profile.id} >{profile.name} tem {profile.age} anos</li>
          ))}
          <button onClick={deleteRandom}>Delete random user</button>
        </div>
    </div>
  )
}

export default ListRender;