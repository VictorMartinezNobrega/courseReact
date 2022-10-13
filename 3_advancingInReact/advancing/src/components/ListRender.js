import { useState } from 'react'

function ListRender() {
  //variavel list é um array/ useState atribue valor na variavel list
    let [list] = useState(['Meg', 'Kira', 'Tiara']);

  //variavel user um array de obj/ com state dando valor ao user
    let [user] = useState([
        {id: 1, name: 'Cesar', age: 19},
        {id: 12, name: 'Felipe', age: 21},
        {id: 321, name: 'Gabriel', age: 26},
        {id: 1234, name: 'Thomas', age: 16}
    ])

  return (
    <div>
        <div>
          {/*imprime list com metodo map/ callback com parametro item que seria o valor dentro do array/ parametro i de id do array*/}
          {list.map((item, i) => (
            //um JSX com key que seria a id do array e item sendo impresso
            <li key={i}>{item}</li>
          ))}
        </div>
        <div>
          {/*impprimindo user com map/ usando nome de profile que seria o obj */}
          {user.map((profile) => (
              //imprimindo li com key de cada usuario/ obj.name tem obj.age anos/ passando por todos os obj
              <li key={profile.id} >{profile.name} tem {profile.age} anos</li>
          ))}
        </div>
    </div>
  )
}

export default ListRender;