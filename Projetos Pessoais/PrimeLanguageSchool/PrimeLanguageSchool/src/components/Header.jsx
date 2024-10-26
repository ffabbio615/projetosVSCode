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
                    <a href='#presentation'>Sobre nós</a>
                    <a href='#services'>Cursos</a>
                    <a href='#location'>Unidade</a>
                    <a href='#FAQ'>FAQ</a>
                </div>

                <div className='header-student-button'><div className='student-button'>ÁREA DO ALUNO</div></div>
            </div>
        </header>
        </>
    )
}