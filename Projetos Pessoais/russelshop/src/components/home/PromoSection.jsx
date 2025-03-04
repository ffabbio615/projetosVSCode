import './PromoSection.scss';
import { useNavigate } from 'react-router-dom';

export default function PromoSection({products}){

    const navigate = useNavigate();

    function showProductDetails(id){
        navigate(`/product/${id}`);
    }

    return(
        <section className='promo-section-container'>
            <img className='promo-banner' src='img/banner.jpg' alt='Imagem do banner promocional'/>
            <div className='promo-products-container'>
                {
                    products.filter((items) => items.isPromo).map((item) => (
                        <div key={item.id} className='product-container'>
                            <img className='promo-product-image' src={`img/${item.picture}`} alt='Imagem do produto promocional'/>
                            <div>
                                <img className='logitech-symbol' src='img/logitechIcon.svg' alt='Símbolo Logitech' />
                                <p className='logitech-logo'>LOGITECH</p>
                            </div>
                            <p className='product-description'>{item.title}</p>
                            <div className='promo-prices-container'>
                                <p className='original-price'>{`R$ ${item.originalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
                                <p className='promo-price'>{`R$ ${item.promoValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
                            </div>
                            <button onClick={()=> showProductDetails(item.id)} className='promo-order-button'>COMPRAR</button>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}