import './Header.scss'

export default function Header() {
    return (
        <>
            <header className='header'>
                <div className='social-media'>
                    <a href='https://www.instagram.com/primelanguageschoolrj/profilecard/?igsh=cWJjYzZza3BhcnUx' target='blank' className='social-media-instagram'></a>
                    <a href='' target='blank' className='social-media-facebook'></a>
                </div>

                <div className='header-menu'>
                    <div className='header-menu-logo'><div className='header-logo'></div></div>

                    <div className='header-links'>
                        <a href='#presentation'>Sobre nós</a>
                        <a href='#services'>Cursos</a>
                        <a href='#location'>Unidade</a>
                        <a href='#FAQ'>FAQ</a>
                    </div>

                    <div className='header-student-button'>
                        <a href='' target='blank' className='student-button'>ÁREA DO ALUNO</a>
                    </div>
                </div>
            </header>
        </>
    )
}