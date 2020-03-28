import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';

export default function Logon(){

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e){

        e.preventDefault();

        console.log(id);

        try{
            const response = await api.post('sessions', { id });
            
            localStorage.getItem('ongId', id);
            localStorage.getItem('ongName', response.data.name);

            console.log(response.data.name);
            
            history.push('/profile');
        }
        catch(e){
            alert('Oops, ocorreu algum erro!');
        }
    }

    return (       
        <div className="Logon-container">
            <section className="form">

                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />

                    <button type="submit" className="button" >Entrar</button>

                    <Link className="back-link" to="/register"><FiLogIn size="16" color="#e02041" />Não tenho cadastro</Link>  

                </form>

            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>        
    );
}