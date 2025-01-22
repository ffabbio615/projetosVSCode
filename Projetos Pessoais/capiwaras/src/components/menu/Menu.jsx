import './Menu.scss';
import { Link } from 'react-router-dom';

export default function Menu(){

    return(
        <>
        <main className="menu-container">
            <div className="logo-container">
                <img className="symbol" src="../src/assets/img/capiwarasSymbol.svg" alt="Símbolo da Logo Capiwaras" />
                <img className="logo" src="../src/assets/img/capiwarasLogo.svg" alt="Logo da Logo Capiwaras" />
            </div>

            <div className="title-menu">
                <h1>CARDÁPIO 
                <Link to={"/menu/add-items"}><button className="add-button"></button></Link>
                </h1>
                
            </div>

            <div className="menu-items-container">
                <div className="food-category-container">
                    <p className="category-title">Promos do dia
                        <button className="edit-button"></button>
                        <button className="delete-button"></button>
                    </p>
                </div>
                <div className="food-items-container">
                    <div className='food-option-menu'>
                        <button className="edit-button"></button>
                        <button className="delete-button"></button>
                        <img src='../src/assets/img/dishes/saladaCaesar.jpg' className="food-image" alt='Imagem do Prato' />
                        <p className='food-title'>Salada Caesar com molho de alho</p>
                        <div className="item-price-container"><p className='food-price'>R$22,50</p></div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}