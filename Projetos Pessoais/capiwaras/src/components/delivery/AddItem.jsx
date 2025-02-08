import './AddItem.scss';
import {Link, useNavigate, useParams} from 'react-router-dom';
import { useState, useContext, useEffect} from 'react';
import { MenuContext } from '../context/MenuContext';
import { DeliveryContext } from '../context/DeliveryContext';

export default function AddItem(){

    const {menuItems} = useContext(MenuContext);
    const {itemId} = useParams();
    const item = menuItems.find((item) => item.id === Number(itemId));
    const {orderItems, addDeliveryItem, removeDeliveryItem, clearAllDeliveryItems} = useContext(DeliveryContext);
    const [textAreaCounter, setTextAreaCounter] = useState(0);

    function changeCounter(){
       setTextAreaCounter(document.querySelector("#observation-text").value.length);
    }

    function checkOrderItems(){
        if(!orderItems.some((orderItems) => orderItems.itemType === "main")){
            clearAllDeliveryItems();
        }
    }

    useEffect(() => {
        checkOrderItems();
    }, []);

    function additionalItemQuantityHandler(id, name, quantity, originalValue, promoValue, itemType, reference, observation, action){
        let element = Number(document.querySelector(`#addItemQuantity${id}`).innerText);
        if(action === "plus"){
            addDeliveryItem(id, name, quantity, originalValue, promoValue, itemType, reference, observation);
            element ++;
        }
        if(action === "minus" && element >0){
            removeDeliveryItem(id, reference);
            element --;
        }
        document.querySelector(`#addItemQuantity${id}`).innerText = element;
    }

    function itemQuantityHandler(action){
        
        let element = Number(document.querySelector("#itemQuantity").innerText);
        if(action === "plus"){
            element ++;
        }
        if(action === "minus" && element >1){
            element --;
        }
        document.querySelector("#itemQuantity").innerText = element;
    }

    const navigate = useNavigate();

    function confirmationItems()
    {
        const quantity = Number(document.querySelector("#itemQuantity").innerText);
        const observation = document.querySelector("#observation-text").value;
        addDeliveryItem(Number(itemId), item.name, quantity, item.originalValue, item.promoValue, "main", item.name, observation);
        navigate("/delivery/add-item/capiwaras-bag");
    }

    return(
        <main className="delivery-add-item-container">
            {item && (
                <>
                    <div className="delivery-header-container">
                        <Link to={"/delivery"} ><img src="../../src/assets/img/icons/backIcon.png" /></Link>
                        <p>Voltar</p>
                    </div>

                    <div key={item.id} className="food-description-container">
                        <img src={`../../src/assets/img/dishes/${item.picture}.jpg`}/>
                        <h1>{item.name}</h1>
                        <p className='food-description'>{item.description}</p>
                        <p className='food-value'>
                            { item.promoValue ? "a partir de R$ "+`${item.promoValue.toFixed(2).replace(".",",")}` 
                            : "a partir de R$ "+`${item.originalValue.toFixed(2).replace(".",",")}`}
                        </p>
                    </div>
                </>
            )}

            {item.acceptAditionals ?
            <div className="aditional-items-container">
                <div className="title-container">
                    <h4>Adicione outros itens:</h4>
                    <p>Adição não obrigatória</p>
                </div>
            
                {menuItems.filter((items) => items.isAdditional).map((items) =>(
                        <div key={items.id} className="item-container">
                            <div className="title-item-container">
                                <h6>{items.name}</h6>
                                <p>+ R${items.originalValue.toFixed(2)}</p>
                            </div>
                            <img src={`../../src/assets/img/dishes/${items.picture}.jpg`} />
                            <div className="item-buttons-container">
                                <button 
                                onClick={()=> additionalItemQuantityHandler(items.id, "", 0, 0, 0, "", item.name, "", "minus")}>
                                -</button>
                                    <p id={`addItemQuantity${items.id}`}>0</p>
                                <button 
                                    onClick={()=> additionalItemQuantityHandler(items.id, items.name, 1, items.originalValue, items.promoValue, "additional", item.name, "", "plus")}>
                                +</button>
                            </div>
                        </div>
                ))}
            </div>
                : null
            }
            
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
                    <button onClick={()=> itemQuantityHandler("minus")}>-</button>
                    <p id='itemQuantity'>1</p>
                    <button onClick={()=> itemQuantityHandler("plus")}>+</button>
                </div>
                <button onClick={confirmationItems} className="add-quantity-button standard-medium-button">Adicionar</button>
            </div>
            
        </main>
    );
}