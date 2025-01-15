import './Delivery.scss';
import logoSymbol from '../assets/img/capiwarasSymbol.svg';
import logoPB from '../assets/img/capiwarasLogoPB.svg';

export default function Delivery(){
    return(
        <>
        <main className='delivery-container'>

            <div className='header-container'>
                <div className='header-background'></div>
                <div className='header-logo'>
                    <img src={logoPB} alt="Símbolo da Logo Capiwaras" />
                </div>
                <div className='capiwaras-Description-container'>
                    <div className='capiwaras-delivery-symbol'>
                        <img src={logoSymbol} alt="Símbolo da Logo Capiwaras" />
                    </div>
                </div>
            </div>


            <div className="delivery-promo-items-container">
                <div className="food-category-container">
                    <p className="category-title">Promos do dia</p>
                </div>
                <div className="food-items-container">
                    <div className='food-option-menu'>
                        <p className='food-discount'>-30%</p>
                        <img src='../src/assets/img/dishes/saladaCaesar.jpg' className="food-image" alt='Imagem do Prato' />
                        <p className='food-title'>Salada Caesar com molho de alho</p>
                        <div className="item-price-container"><p className='food-price'>R$22,50</p></div>
                    </div>
                </div>
            </div>


            <div className="delivery-items-container">
                <div className="food-category-container">
                    <p className="category-title">Frangos</p>
                </div>
                <div className="food-items-container">
                    <div className='food-option-menu'>
                        <div className='food-description-container'>
                            <div className='food-text-container'>
                            <p className='food-title'>Capi Chicken Assadão</p>
                            <p className='food-description'>Nosso frango assado e douradinho, com nossa...</p>
                        </div>
                            <img src='../src/assets/img/dishes/capiChicken.jpg' className="food-image" alt='Imagem do Prato' />
                        </div>
                        <div className="item-price-container"><p className='food-price'>a partir de R$44,00</p></div>
                    </div>
                </div>



                <div className="food-items-container">
                    <div className='food-option-menu'>
                        <div className='food-description-container'>
                            <div className='food-text-container'>
                            <p className='food-title'>CapiWish com molho de iogurte desnatado</p>
                            <p className='food-description'>Um sonho de sanduíche, com o molho mais leve...</p>
                        </div>
                            <img src='../src/assets/img/dishes/capiWish.jpg' className="food-image" alt='Imagem do Prato' />
                        </div>
                        <div className="item-price-container"><p className='food-price'>a partir de R$26,90</p></div>
                    </div>
                </div>
                <div className="food-items-container">
                    <div className='food-option-menu'>
                        <div className='food-description-container'>
                            <div className='food-text-container'>
                            <p className='food-title'>Super Waras com salada rústica</p>
                            <p className='food-description'>Tiras de frango com muita salada. Acompanha molho.</p>
                        </div>
                            <img src='../src/assets/img/dishes/superWaras.jpg' className="food-image" alt='Imagem do Prato' />
                        </div>
                        <div className="item-price-container"><p className='food-price'>a partir de R$55,00</p></div>
                    </div>
                </div>
                <div className="food-items-container">
                    <div className='food-option-menu'>
                        <div className='food-description-container'>
                            <div className='food-text-container'>
                            <p className='food-title'>Guisado Especial Capiwaras</p>
                            <p className='food-description'>Para você que terminou o treino e precisa de energia.</p>
                        </div>
                            <img src='../src/assets/img/dishes/guisadoEspecial.jpg' className="food-image" alt='Imagem do Prato' />
                        </div>
                        <div className="item-price-container"><p className='food-price'>a partir de R$64,90</p></div>
                    </div>
                </div>




            </div>
        </main>
        </>
    );
}