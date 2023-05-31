import React from 'react'
import './Myform.scss';
import { useState } from 'react';

const Myform = ({ user }) => {
    // 6 -------------- estabelecendo os inputs pre preenchidos
    // 3 ---------- gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    //se tiver um user(prop) ? preenche : deixa vazio
    const [email, setEmail] = useState(user ? user.email : "");

    const [bio, setBio] = useState(user ? user.bio : "");

    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviando formulario");
        console.log(name, email, bio, role);


        //validacao
        //envio
        // 7 ---------- limpar form
        setEmail('');
        setName('');
        setBio('');
    };

    return (
        <div>
            {/** 5 --------------- Envio de formulario */}
            {/*1------ criação de form*/}
            <form
                onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name='name'
                        onChange={handleName}
                        value={name} />
                </div>
                {/*2 ---------- label envolvendo input (Melhor opção) */}
                <label>
                    {/** 4 ----------- Simplificação de manipulaçao de dados (ponto 3) */}
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                </label>
                {/* 8 ----------- Text area */}
                <label>
                    <span>Bio: </span>
                    <textarea
                        name="bio"
                        placeholder='Descrição do usuario'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}>
                    </textarea>
                </label>
                {/* 9 ------------- select */}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuario</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input
                    type="submit"
                    value={'enviar'} />
            </form>
        </div>
    )
}

export default Myform;