import './AddItem.scss';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

export default function AddItem(){

    const navigate = useNavigate();

    function confirmationItems()
    {
        navigate("/delivery/add-item/capiwaras-bag");
    }

    const [aditionalItems, setAditionalItems] = useState([
        {
            id: 1,
            name: "Suco de Melancia 300ml",
            description: "O suco mais refrescante de todos.",
            picture: "sucoMelancia",
            category: "Bebidas",
            value: 11.90,
            quantity: 0,
            isInPromo: false,
            isAditional: true,
            acceptAditionals: false,
        },
        {
            id: 2,
            name: "Suco de Laranja Concentrado 300ml",
            description: "Feito 100% com laranja seleta.",
            picture: "sucoLaranja",
            category: "Bebidas",
            value: 14.90,
            quantity: 0,
            isInPromo: false,
            isAditional: true,
            acceptAditionals: false,
        },
        {
            id: 3,
            name: "Suco Fortificante 300ml",
            description: "Suco feito com cenoura, beterraba e laranja.",
            picture: "sucoFortificante",
            category: "Bebidas",
            value: 19.90,
            quantity: 0,
            isInPromo: false,
            isAditional: true,
            acceptAditionals: false,
        },
        {
            id: 4,
            name: "Água Mineral 510ml",
            description: "Água é vida. Hidrate-se!",
            picture: "aguaMineral",
            category: "Bebidas",
            value: 8.00,
            quantity: 0,
            isInPromo: false,
            isAditional: true,
            acceptAditionals: false,
        },
    ]);
    
    const [textAreaCounter, setTextAreaCounter] = useState(0);

    function changeCounter(){
       setTextAreaCounter(document.querySelector("#observation-text").value.length);

    }

    function quantityHandler(id, value){
        const itemQuantity = aditionalItems.map(item => item.id === id ? {...item, quantity: item.quantity + value} : item);
        setAditionalItems(itemQuantity);
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
                    <h4>Adicione outros itens:</h4>
                    <p>Adição não obrigatória</p>
                </div>
                {
                    aditionalItems.map((item) =>(
                        item.isAditional ?
                        <div key={item.id} className="item-container">
                            <div className="title-item-container">
                                <h6>{item.name}</h6>
                                <p>+ R${item.value.toFixed(2)}</p>
                            </div>
                            <img src={`../src/assets/img/dishes/${item.picture}.jpg`} />
                            <div className="item-buttons-container">
                                <button disabled={item.quantity<1} onClick={()=> quantityHandler(item.id, -1)}>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={()=> quantityHandler(item.id, 1)}>+</button>
                            </div>
                        </div>
                        :''
                    ))
                }
            </div>

            <div className="observation-text-container">
                <div className="observation-title">
                    <h4>Observações:</h4>
                    <p>Adição não obrigatória</p>
                </div>
                <p className="text-length">{textAreaCounter}/150</p>
            </div>

            <textarea onChange={changeCounter} name="observation-text" placeholder='Ex.: sem pimenta, separar o feijão, carne bem passada.' id="observation-text" maxLength={150} cols="30" rows="10"></textarea>

            <div className="add-quantity-container">
                <div className="quantity-buttons-container">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
                <button onClick={confirmationItems} className="add-quantity-button standard-medium-button">Adicionar</button>
            </div>
            
        </main>
        </>
    );
}