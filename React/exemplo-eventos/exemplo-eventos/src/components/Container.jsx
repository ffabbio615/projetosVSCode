import '../App.scss';
import Button from './button'
import React, {useState, useEffect, useRef} from 'react';

export default function Container(){

    const [containerActive, setContainerActive] = useState(false);
    const containerPosition = useRef(null);

    useEffect(() => {
        const handleScroll = (() =>{

            if(containerPosition.current){
                const sectionTop = containerPosition.current.getBoundingClientRect().top + window.scrollY;
                const viewportHeight = window.innerHeight;

                if (window.scrollY >= sectionTop + 600) {
                    setContainerActive(true);
                } 
                // else if (window.scrollY <= sectionTop - viewportHeight * exitPosition) {
                //     setContainerActive(false);
                // }
            }
        })

        window.addEventListener('scroll', handleScroll);
            return (() => {
                window.removeEventListener('scroll', handleScroll);
            })
    })

    function handleClick(e){
        e.stopPropagation();
        setContainerActive(false);
    }

    return(
        <>
        
        <div className={`default-container ${containerActive ? 'active-color' : 'default-color'}`} ref={containerPosition}>
            {containerActive ? 
            <Button evento={handleClick} /> 
             : ''}
        </div>

        </>
    )
}