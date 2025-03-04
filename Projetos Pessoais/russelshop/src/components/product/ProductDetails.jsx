import './ProductDetails.scss';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetails({products}){
    
    const { id } = useParams();
    const navigate = useNavigate();

    function backToHome(){
        navigate("/");
    }
    
    return(
        <section className='product-details-container'>
            <button onClick={backToHome} className='return-to-home-button'>&#x3c; Voltar</button>
            { products.filter((items) => items.id === Number(id)).map((item) =>(
                <div key={item.id} className='product-container'>
                    <img className='product-image' src={`../img/${item.picture}`} alt='Imagem do produto promocional'/>
                    <div className='details-container'>
                        <p className='product-title'>{item.title}</p>
                        <div className='fulfilled-by-container'>
                            <p className='text-details-pattern'>Vendido e entregue por </p>
                            <p className={item.fulfilledBy === "Logitech Brasil" ? 'logitech-company' : 'company'}>{item.fulfilledBy}</p>
                            <p className='text-details-pattern vertical-bar'>|</p>
                            {item.inStock ?
                                <p className='stock in-stock'>Em estoque</p>
                                : <p className='stock no-stock'>Sem estoque</p>
                            }
                        </div>
                        <div>
                            <p className='text-details-pattern original-value'>{`R$ ${item.originalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
                            <p className='text-details-pattern promo-value'>{`R$ ${item.promoValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
                            <p className='text-details-pattern '>à vista no PIX</p>
                        </div>
                        <div className='product-details-button-container'>
                            <button className='order-button'>COMPRAR</button>
                            <button className='cart-button'>ADICIONAR AO CARRINHO</button>
                        </div>
                    </div>
                </div>
            ))}


        </section>
    );
}