import './Delivery.scss';
import { useNavigate, Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
import { DeliveryContext } from '../context/DeliveryContext';

export default function Delivery(){

    const navigate = useNavigate();
    const {menuItems, menuCategory} = useContext(MenuContext);
    const {orderItems} = useContext(DeliveryContext);

    function itemHandler(id){
        navigate(`/delivery/add-item/${id}`);
    }

    function goToBag(){
        navigate("/delivery/add-item/capiwaras-bag");
    }

    return(
        <main className='delivery-container'>
            <div className='bag-items-container'>
                    {orderItems.length>0 ?
                        <>
                            <img onClick={goToBag} className='bag-items bag-items-active' src="../src/assets/img/icons/bagIcon.svg" alt="Bag Icon" />
                            <p>{orderItems.filter(item => item.itemType === "main").length}</p>
                        </>
                    :   <img className='bag-items bag-items-inactive' src="../src/assets/img/icons/bagIcon.svg" alt="Bag Icon" />
                    }
            </div>
            <div className='header-container'>
                <div className='header-background'></div>
                <div className='header-logo'>
                    <img src="../src/assets/img/capiwarasLogoPB.svg" alt="Logo Capiwaras" />
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

            {menuCategory.some((category) => category.category === "Promos do dia") && (
                <div className="delivery-promo-items-container">
                    <div className="food-category-container">
                        <p className="category-title">Promos do dia</p>
                    </div>
                    <div className="food-items-container">
                        { menuItems.filter((item) => item.category === "Promos do dia").map((item) => (
                                <div key={item.id} onClick={()=> itemHandler(item.id)} className='food-option-menu'>
                                    <p className='food-discount'>{(((item.promoValue*100) / (item.originalValue*1)) - 100).toFixed(0)}%</p>
                                    <img src={`../src/assets/img/dishes/${item.picture}.jpg`} className="food-image" alt='Imagem do Prato' />
                                    <p className='food-title'>{item.name}</p>
                                    <div className="item-price-container">
                                        <p className='promo-food-price'>R${item.promoValue.toFixed(2).replace(".",",")}</p>
                                        <p className='original-food-price'>R${item.originalValue.toFixed(2).replace(".",",")}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}

            <div className="delivery-items-container">
                {menuCategory.filter((category)=> category.category !== "Promos do dia").map((category) =>(
                    <React.Fragment key={category.id}>
                        {menuItems.some((items) => items.category === category.category) &&(
                            <div className="food-category-container">
                                <p className="category-title">{category.category}</p>
                            </div>
                        )}
                    {menuItems.filter((item) => item.category === category.category).map((item) => (
                    <div key={item.id} onClick={()=> itemHandler(item.id)} className="food-items-container">
                        <div className='food-option-menu'>
                            <div className='food-description-container'>
                                <div className='food-text-container'>
                                <p className='food-title'>{item.name}</p>
                                <p className='food-description'>{item.description.length > 45 ? item.description.slice(0, 45) + "..." : item.description}</p>
                            </div>
                                <img src={`../src/assets/img/dishes/${item.picture}.jpg`} className="food-image" alt='Imagem do Prato' />
                            </div>
                            <div className="item-price-container"><p className='food-price'>a partir de R${item.originalValue.toFixed(2).replace(".",",")}</p></div>
                        </div>
                    </div>
                    ))}
                    </React.Fragment>
                ))}
            </div>

        </main>
    );
}