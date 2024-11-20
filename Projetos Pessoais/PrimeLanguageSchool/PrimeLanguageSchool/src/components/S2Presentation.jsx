import "./S2Presentation.scss";
import React, {useState, useEffect, useRef} from "react";
import throttle from 'lodash/throttle';

export default function S2Presentation(){

    const presentationSectionRef = useRef(null);
    const [isActive, setIsActive] = useState(false); 

    useEffect (() => {
        const handleScroll = throttle(() =>{
            if(presentationSectionRef.current){

                const sectionTop = presentationSectionRef.current.getBoundingClientRect().top + window.scrollY;
                const viewportHeight = window.innerHeight;

                if(window.scrollY >= sectionTop - viewportHeight * 0.5){
                    setIsActive(true);
                }else if(window.scrollY <= sectionTop - viewportHeight * 0.7){
                    setIsActive(false);
                }
            }
        }, 200);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    return(
        <>
        
        <section id="presentation" className="presentation-section" ref={presentationSectionRef}>
        <div className={`presentation-background ${isActive ? 'presentation-background-active' : 'presentation-background-inactive'}`}></div>
        <div className={`presentation-container ${isActive ? 'presentation-container-active' : 'presentation-container-inactive'}`}>
            <div className="who-we-are-container">
                <h1>Quem somos?</h1>
                <p>Fundada em 2022 em Copacabana, a Prime Language School é dedicada a oferecer aulas de inglês flexíveis, adaptadas às necessidades individuais de cada aluno. 
                    Nossa abordagem comunicativa prioriza a flexibilidade e a personalização, criando um ambiente de aprendizado dinâmico e eficaz. 
                    Além disso, a PRIME tem o propósito de preparar seus alunos para os principais exames internacionais, garantindo certificações que fazem com que suas habilidades 
                    sejam reconhecidas mundialmente. Proporcionamos um ensino de qualidade, visando capacitar alunos e empresas a alcançarem seus objetivos pessoais e profissionais. </p>
            </div>
            <div className="proprietor-container">
                <div className="proprietor-image"></div>
                <div className="proprietor-text">
                    <p>Alexandre Mello</p>
                    <div className="proprietor-image-mobile"></div>
                    <p>Alexandre Mello, fundador da Prime Language School, é especializado em psicopedagogia e gestão escolar, aliada à certificação em ensino de inglês (ELT) 
                        pela Cambridge English. Com 17 anos de carreira e vivência no exterior, criou a PRIME para oferecer um ambiente de aprendizado inovador e eficaz. 
                        Alexandre acredita ser primordial a capacitação de alunos em qualquer fase de vida, desde a fase infantil até a terceira idade.</p>
                </div>
            </div>
            <div className="course-images">
                <div className="course-image1"></div>
                <div className="course-image2"></div>
            </div>
        </div>
        </section>
        </>
    )
}