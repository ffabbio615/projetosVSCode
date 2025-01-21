import './Delivery.scss';
import { useNavigate, Link } from 'react-router-dom';

export default function Delivery(){

    const navigate = useNavigate();

    function itemHandler(){

        navigate("/delivery/add-item");
    }

    return(
        <>
        <main className='delivery-container'>

            <div className='header-container'>
                <div className='header-background'></div>
                <div className='header-logo'>
                    <img src="../src/assets/img/capiwarasLogoPB.svg" alt="Símbolo da Logo Capiwaras" />
                </div>
                <div className='capiwaras-Description-container'>
                    <div className='text-map-container'>
                        <div className='text-container'>
                            <div className='title-distance'>
                                <h5>Capiwaras - Madureira</h5>
                                <p>Distância: 1,7km - Entrega: R$5,00</p>
                            </div>
                            <div className='rate-time'>
                                <img src='../src/assets/img/icons/star.svg' /><p>5,0 (125 avaliações)</p>
                                <p>Tempo estimado para entrega: 25-45 min</p>
                            </div>
                        </div>
                        <Link to={"https://maps.app.goo.gl/2ViUvSa4h4iYAHxXA"}><img src='../src/assets/img/maps/capiwarasMap.png' /></Link>
                    </div>
                    <div className='capiwaras-delivery-symbol'>
                        <img src="../src/assets/img/capiwarasSymbol.svg" alt="Símbolo da Logo Capiwaras" />
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
                <div onClick={itemHandler} className="food-items-container">
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