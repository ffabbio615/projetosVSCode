import './CertificateLogin.scss'
import { useNavigate } from 'react-router-dom'

export default function CertificateLogin(){

    const navigateTo = useNavigate();
    function handleLogin(){
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        if(username === 'Alexandre' && password === 'Alfava@081516'){
            navigateTo("/certificados/login/" + username);
        }
        else{
            return;
        }
    }

    return(
        <>
        <div className="login-container">
            <div className="login">
                <div className='header-login-icon'><div className='login-icon'></div></div>
                <div className="icon"><div className='user-icon'></div></div>
                <input type="text" id='username' placeholder="Username"/>
                <div className="icon"><div className='password-icon'></div></div>
                <input type="password" id='password' placeholder="Password"/>
                <button onClick={handleLogin} className="btn-login">ACESSAR</button>
            </div>
            <div className="prime-logo-background"></div>
        </div>
        </>
    )


}