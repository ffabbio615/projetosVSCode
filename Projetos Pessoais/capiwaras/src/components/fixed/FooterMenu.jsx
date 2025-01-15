import './FooterMenu.scss';
import { NavLink } from 'react-router-dom';

export default function FooterMenu(){

    return(
        <>
        
        <footer className='footer-container'>
            <div className='footer-button-container'>
                
                <div className='btn-footer-menu'>
                    <NavLink to="/menu"> 
                    <div className='menu-icon'></div>
                    <p className='btn-footer-paragraph'>Cardápio</p>
                    </NavLink>
                </div>

                <div className='btn-footer-menu'>
                    <NavLink to="/"> 
                    <div className='home-icon'></div>
                    <p className='btn-footer-paragraph'>Home</p>
                    </NavLink>
                </div>

                <div className='btn-footer-menu'>
                    <NavLink to="/delivery"> 
                    <div className='delivery-icon'></div>
                    <p className='btn-footer-paragraph'>Delivery</p>
                    </NavLink>
                </div>
            </div>


        </footer>

        </>
    )

}