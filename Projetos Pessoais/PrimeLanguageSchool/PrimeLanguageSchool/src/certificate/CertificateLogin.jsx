import { useState } from 'react';
import './CertificateLogin.scss'
import { useNavigate } from 'react-router-dom'

export default function CertificateLogin(){

    const navigateTo = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleLogin();
        }
    };
    
    function handleLogin(){
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        if(username === 'Alexandre' && password === 'Alfava@081516'){
            navigateTo("/certificados/login/");
        }
        else{
            alert('Dados incorretos!');
            document.querySelector("#username").value = '';
            document.querySelector("#password").value = '';
            return;
        }
    }

    return(
        <>
        <div className="login-container">
            <div className="login">
                <div className='header-login-icon'><div className='login-icon'></div></div>
                <div className="icon"><div className='user-icon'></div></div>
                <input type="text" id='username' placeholder="Usuário"/>
                <div className="icon"><div className='password-icon'></div></div>
                <input onKeyDown={handleKeyDown} type="password" id='password' placeholder="Senha"/>
                <button onClick={handleLogin} className="btn-login">ACESSAR</button>
            </div>
            <div className="prime-logo-background"></div>
        </div>
        </>
    )


}