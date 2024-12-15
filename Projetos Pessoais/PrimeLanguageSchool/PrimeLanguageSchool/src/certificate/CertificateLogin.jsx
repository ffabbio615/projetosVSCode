import './CertificateLogin.scss'

export default function CertificateLogin(){

    return(
        <>
        <div className="login-container">
            <div className="login">
                <div className='header-login-icon'><div className='login-icon'></div></div>
                <div className="icon"><div className='user-icon'></div></div>
                <input type="text" placeholder="Username"/>
                <div className="icon"><div className='password-icon'></div></div>
                <input type="password" placeholder="Password"/>
                <button className="btn-login">ACESSAR</button>
            </div>
            <div className="prime-logo-background"></div>
        </div>
        </>
    )


}