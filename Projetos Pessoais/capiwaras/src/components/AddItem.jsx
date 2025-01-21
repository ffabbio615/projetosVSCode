import './AddItem.scss';
import {Link, useNavigate} from 'react-router-dom';

export default function AddItem(){

    const navigate = useNavigate();

    function confirmationItems()
    {
        navigate("/delivery/add-item/capiwaras-bag");
    }

    return(
        <>
        <main className="delivery-add-item-container">
            <div className="delivery-header-container">
                <Link to={"/delivery"} ><img src="../src/assets/img/icons/backIcon.png" /></Link>
                <p>Capi Chicken Assadão</p>
            </div>

            <div className="food-description-container">
                <img src="../src/assets/img/dishes/capiChicken.jpg" />
                <h3>Capi Chicken Assadão</h3>
                <p>Nosso frango assado e douradinho, com nossa receita especial. Acompanha arroz integral, batata doce e feijão.</p>
                <h5>a partir de R$44,00</h5>
            </div>

            <div className="aditional-items-container">
                <div className="title-container">
                    <h4>Adicione bebida:</h4>
                    <p>Adição não obrigatória</p>
                </div>

                <div className="item-container">
                    <div className="title-item-container">
                        <h6>Suco de Melancia 300ml</h6>
                        <p>+ R$11,90</p>
                    </div>
                    <img src='../src/assets/img/dishes/sucoMelancia.jpg' />
                    <div className="item-buttons-container">
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                </div>
            </div>

            <div className="observation-text-container">
                <div className="observation-title">
                    <h4>Observações:</h4>
                    <p>Adição não obrigatória</p>
                </div>
                <p className="text-length">0/150</p>
            </div>

            <textarea name="observation-text" placeholder='Ex.: sem pimenta, separar o feijão, carne bem passada.' id="" maxLength={150} cols="30" rows="10"></textarea>

            <div className="add-quantity-container">
                <div className="quantity-buttons-container">
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                </div>
                <button onClick={confirmationItems} className="add-quantity-button standard-medium-button">Adicionar</button>
            </div>
            
        </main>
        </>
    );
}