import "./CapiwarasBag.scss";
import useConfirmBox from "../modal/useConfirmBox";
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DeliveryContext } from "../context/DeliveryContext";
import { MenuContext } from "../context/MenuContext";

export default function CapiwarasBag(){

    const {orderItems, addMainDeliveryItemQuantity, removeMainDeliveryItemQuantity, clearCurrentDeliveryItem} = useContext(DeliveryContext);
    const {menuItems} = useContext(MenuContext);
    const { ConfirmBoxComponent, confirm } = useConfirmBox();
    const navigate = useNavigate();

    function returnToDelivery(){
        navigate("/delivery");
    }

    function itemQuantityHandler(name, orderId, action){
        let element = Number(document.querySelector(`#itemQuantity${orderId}`).innerText);
        if(action === "plus"){
            element ++;
            addMainDeliveryItemQuantity(name, orderId);
        }
        if(action === "minus" && element > 1){
            element --;
            removeMainDeliveryItemQuantity(name, orderId);

        }else if(action === "minus" && element === 1){
            element --;
            const checkLastItem = orderItems.filter((items) => items.orderId > 0 && items.itemType === "main");
            if(checkLastItem.length>1){
                confirm("Tem certeza que deseja remover o item?", () => {
                    clearCurrentDeliveryItem(orderId); 
                });
            }else{
                confirm("Tem certeza que deseja remover o item e limpar a sacola?", () => {
                    clearCurrentDeliveryItem(orderId);
                    navigate("/delivery");    
                });
            }
            
        }else{
        document.querySelector(`#itemQuantity${orderId}`).innerText = element;
        }
    }

    function updateValues(){
        let subTotalValue = 0; 
        let deliveryValue = 5;
        let discountsValue = 0; 
        let newOrderItems = orderItems;
        let mainItemQuantity;

        for(let i = 0; i < newOrderItems.length; i++){
            mainItemQuantity = Number(document.querySelector(`#itemQuantity${newOrderItems[i].orderId}`).innerText);
            if(newOrderItems[i].itemType === "main"){
                subTotalValue = subTotalValue + (newOrderItems[i].originalValue * mainItemQuantity)
            }else{
                subTotalValue = subTotalValue + (newOrderItems[i].originalValue * newOrderItems[i].quantity);
            }
            if(newOrderItems[i].promoValue >0){
                discountsValue = discountsValue + ((newOrderItems[i].originalValue - newOrderItems[i].promoValue) * mainItemQuantity);
            }
        }
        const totalValue = (subTotalValue + deliveryValue) - discountsValue;
        document.querySelector("#subTotal").innerText = `R$${subTotalValue.toFixed(2).replace(".",",")}`;
        document.querySelector("#deliveryValue").innerText = `R$${deliveryValue.toFixed(2).replace(".",",")}`;
        document.querySelector("#discountsValue").innerText = `R$${discountsValue.toFixed(2).replace(".",",")}`;
        document.querySelector("#totalValue").innerText = `R$${totalValue.toFixed(2).replace(".",",")}`;
    }

    useEffect(()=>{
        updateValues();
    },[orderItems]);

    function handleConfirmOrder(){
        confirm("Confirma o pedido?", () => {
            navigate("/delivery/add-item/capiwaras-bag/completed-order");    
        });
    }

    function editDeliveryItem(itemId, orderId){
        navigate(`/delivery/edit-item/${itemId}-${orderId}`);
    }

    return(
        <>
        {ConfirmBoxComponent}
        <main className='capiwaras-bag-container'>
            
            <div className='header-container'>
                <div className='header-background'></div>
                <div className='header-logo'>
                    <img src="../../src/assets/img/capiwarasLogoPB.svg" alt="Símbolo da Logo Capiwaras" />
                </div>
                <div className='capiwaras-Description-container'>
                    <div className='capiwaras-delivery-symbol'>
                        <img src="../../src/assets/img/capiwarasSymbol.svg" alt="Símbolo da Logo Capiwaras" />
                    </div>
                    
                    <div className='text-container'>
                        <h5>Capiwaras - Madureira</h5>
                        <p onClick={returnToDelivery}>Adicionar outros itens</p>
                    </div>
                </div>
            </div>

            <div className="bag-items-container">
                <div className="bag-title-container">
                    <h4>Itens do pedido:</h4>
                </div>

                { orderItems.filter((items) => items.itemType === "main").map((items) =>(
                    <React.Fragment key={items.orderId}>
                        <div className="item-container">
                            <button onClick={()=> editDeliveryItem(items.itemId, items.orderId)} className="bag-edit-button"></button>
                            <div className="title-item-container">
                                <h6>{items.name}</h6>
                                <p>+ R${items.promoValue > 0 ? items.promoValue.toFixed(2).replace(".",",") : items.originalValue.toFixed(2).replace(".",",")}</p>
                            </div>
                            { menuItems.filter((item) => item.id === items.itemId).map((item => (
                                <img key={item.id} src={`../../src/assets/img/dishes/${item.picture}.jpg`} />
                            )))}
                            <div className="item-buttons-container">
                                <button onClick={()=> itemQuantityHandler(items.name, items.orderId, "minus")}>-</button>
                                <p id={`itemQuantity${items.orderId}`}>{items.quantity}</p>
                                <button onClick={()=> itemQuantityHandler(items.name, items.orderId, "plus")}>+</button>
                            </div>
                        </div>
                    
                        { orderItems.some((item) => item.itemType === "additional" && item.orderId === items.orderId) ?
                        <div className="aditional-items-container">
                            <h6>Itens adicionais:</h6>
                            {orderItems.filter((addItems) => addItems.itemType === "additional" && addItems.orderId == items.orderId).map((addItems) =>(
                                <div key={addItems.itemId} className="items-container">
                                    <p className="aditional-item">{`${addItems.quantity}x ${addItems.name} | + R$${addItems.originalValue.toFixed(2).replace(".",",")}`}</p>
                                </div>
                            ))}
                        </div>
                        : null}
                        {
                            items.observation !== "" ?
                            <p className="observation-text">Observação: {items.observation}</p>
                            :
                            <p className="observation-text"></p>
                        }
                    </React.Fragment>
                ))}

                <div className="resume-items-container">
                    <h6>Resumo do pedido:</h6>
                        <div className="resume-value-container">
                            <p className="resume-item">Subtotal:</p>
                            <p id="subTotal" className="resume-item">R$0,00</p>
                        </div>

                        <div className="resume-value-container">
                            <p className="resume-item">Valor de entrega:</p>
                            <p id="deliveryValue" className="resume-item">R$0,00</p>
                        </div>

                        <div className="resume-value-container">
                            <p className="resume-item">Descontos:</p>
                            <p id="discountsValue" className="resume-item">R$0,00</p>
                        </div>

                        <div className="resume-value-container">
                            <h6 className="resume-item">Total:</h6>
                            <h6 id="totalValue" className="resume-item">R$0,00</h6>
                        </div>
                </div>

                <div className="order-button-container">
                    <button onClick={handleConfirmOrder} className="standard-medium-button">Finalizar Pedido</button>
                </div>

            </div>
        </main>
        </>
    );
}



