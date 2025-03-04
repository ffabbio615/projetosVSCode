import './ProductSection.scss';
import { useNavigate } from 'react-router-dom';

export default function ProductSection({products}){

    const navigate = useNavigate();

    function showProductDetails(id){
        navigate(`/product/${id}`);
    }

    return(
        <section className='product-section-container'>
            <div className='categories-names'>
                <p className='subcategory-name'>Placas de vídeo</p>
                <p className='category-name'>HARDWARE</p>
            </div>
            <div className='video-card-products-container'>
                {
                    products.filter((items) => !items.isPromo).map((item) => (
                        <div key={item.id} className='video-card-product-container'>
                            <img className='video-card-image' src={`img/${item.picture}`} alt='Imagem da placa de vídeo'/>
                            <p className='video-card-description'>{item.title}</p>
                            <div className='video-card-prices-container'>
                                <p className='original-price'>{`R$ ${item.originalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
                                <p className='promo-price'>{`R$ ${item.promoValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
                                <p className='video-card-pix-discount'>com 20% de desconto no PIX</p>
                            </div>
                            <button onClick={()=> showProductDetails(item.id)} className='video-card-order-button'>COMPRAR</button>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}