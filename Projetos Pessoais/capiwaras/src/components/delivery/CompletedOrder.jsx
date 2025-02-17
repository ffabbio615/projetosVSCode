import "./CompletedOrder.scss";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { DeliveryContext } from "../context/DeliveryContext";
import { MenuContext } from "../context/MenuContext";

export default function CompletedOrder(){

    const {orderItems, clearAllDeliveryItems} = useContext(DeliveryContext);
    const {menuItems} = useContext(MenuContext);
    const navigate = useNavigate();

    function goBackHome(){
        clearAllDeliveryItems();
        navigate("/");
    }

    function getHour(){
        const date = new Date();
        let adjustedMinHours = date.getHours();
        let adjustedMaxHours = date.getHours();
        const minutes = date.getMinutes();
        let adjustedMinMinutes = minutes + 25;
        let adjustedMaxMinutes = minutes + 45;

        if(adjustedMinMinutes > 60){
            adjustedMinMinutes = adjustedMinMinutes - 60;
            adjustedMinHours ++;
            if(adjustedMinHours === 23){
                adjustedMinHours = 0;
            }
        }
        if(adjustedMinMinutes < 10){
            adjustedMinMinutes = `0${adjustedMinMinutes}`;
        }

        if(adjustedMaxMinutes > 60){
            adjustedMaxMinutes = adjustedMaxMinutes - 60;
            adjustedMaxHours ++;
            if(adjustedMaxHours === 23){
                adjustedMaxHours = 0;
            }
        }
        if(adjustedMaxMinutes < 10){
            adjustedMaxMinutes = `0${adjustedMaxMinutes}`;
        }

        if(adjustedMinHours <= 9){
            adjustedMinHours = `0${adjustedMinHours}`;
        }

        if(adjustedMaxHours <= 9){
            adjustedMaxHours = `0${adjustedMaxHours}`;
        }

        return(`${adjustedMinHours}:${adjustedMinMinutes}-${adjustedMaxHours}:${adjustedMaxMinutes}h`);
        
    }

    function getTotalValue(){
        let subTotalValue = 0; 
        const deliveryValue = 5;
        let discountsValue = 0; 
        let newOrderItems = orderItems;

        for(let i = 0; i < newOrderItems.length; i++){
                subTotalValue = subTotalValue + (newOrderItems[i].originalValue * newOrderItems[i].quantity);
            if(newOrderItems[i].promoValue >0){
                discountsValue = discountsValue + ((newOrderItems[i].originalValue - newOrderItems[i].promoValue) * newOrderItems[i].quantity);
            }
        }
        return("R$" + ((subTotalValue + deliveryValue) - discountsValue).toFixed(2).replace(".",","));
    }

    return(
        <>
        
        <main className='capiwaras-bag-container'>
            <div className='header-container'>
                <div className='header-background'></div>
                <div className='header-logo'>
                    <img src="../../../src/assets/img/capiwarasLogoPB.svg" alt="Símbolo da Logo Capiwaras" />
                </div>
                <div className='capiwaras-Description-container'>
                    <div className='capiwaras-delivery-symbol'>
                        <img src="../../../src/assets/img/capiwarasSymbol.svg" alt="Símbolo da Logo Capiwaras" />
                    </div>
                    
                    <div id="text-container" className='text-container'>
                        <h5>Capiwaras - Madureira</h5>
                        <p>Chegará entre: {getHour()}</p>
                    </div>
                </div>
            </div>

            <div className="bag-items-container">
                <div className="bag-title-container">
                    <h4>Pedido #150519912045</h4>
                </div>

                {orderItems.filter((items) => items.itemType === "main").map((items) => (
                <React.Fragment key={items.orderId}>
                    <div id="order-item-container" className="item-container">
                        <div className="title-item-container">
                            <h6>{`${items.quantity}x ${items.name}`}</h6>
                        </div>
                        {menuItems.filter((item) => item.id === items.itemId).map((item) => (
                        <img key={item.id} src={`../../../src/assets/img/dishes/${item.picture}.jpg`} />
                        ))}
                    </div>
                    
                    {orderItems.some((item) => item.itemType === "additional" && item.orderId === items.orderId) ?
                        <div className="aditional-items-container">
                            <h6>Itens adicionais:</h6>
                                <div className="items-container">
                                    {orderItems.filter((addItem) => addItem.itemType === "additional" && addItem.orderId === items.orderId).map((addItem) => (
                                        <p key={addItem.itemId} className="aditional-item">{`${addItem.quantity}x ${addItem.name}`}</p>
                                    ))}
                                </div>
                        </div>
                    :null}
                    
                    {
                        items.observation !== "" ?
                            <p className="observation-text">Observação: {items.observation}</p>
                        :
                            <p className="observation-text"></p>
                    }
                    </React.Fragment>
                ))}
                    <div className="resume-items-container">
                            <div className="resume-value-container">
                                <h6 className="resume-item">Valor total do pedido:</h6>
                                <h6 className="resume-item">{getTotalValue()}</h6>
                            </div>
                    </div>
                <div className="order-button-container">
                    <button onClick={goBackHome} className="standard-medium-button">Retornar</button>
                </div>

            </div>
        </main>
        </>
    );
}