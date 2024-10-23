import './Header.scss'

export default function Header(){
    return(
        <>
        <header className='header'>
            <div className='social-media'>
                <div className='social-media-instagram'></div>
                <div className='social-media-facebook'></div>
            </div>

            <div className='header-menu'>
                <div className='header-menu-logo'><div className='header-logo'></div></div>

                <div className='header-links'>
                    <a href=''>Sobre nós</a>
                    <a href=''>Cursos</a>
                    <a href=''>Unidade</a>
                    <a href=''>FAQ</a>
                </div>

                <div className='header-student-button'><button>ÁREA DO ALUNO</button></div>
            </div>
        </header>
        </>
    )
}