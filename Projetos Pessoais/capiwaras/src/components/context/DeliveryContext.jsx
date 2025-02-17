import { createContext, useEffect, useState } from "react";

export const DeliveryContext = createContext();

export function DeliveryProvider ({children}){

    const [orderItems, setOrderItems] = useState([]);

    // useEffect(()=>{
    //     console.log(orderItems);
    // },[orderItems])

    function addMainDeliveryItemQuantity(name, orderId){
        setOrderItems(orderItems.map(item =>
            item.name === name && item.orderId === orderId 
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    }

    function removeMainDeliveryItemQuantity(name, orderId){
        setOrderItems(orderItems.map(item =>
            item.name === name && item.orderId === orderId 
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    }

    function addDeliveryItem(itemId, name, quantity, originalValue, promoValue, itemType, reference, observation){
        let orderId;

        if(orderItems.length ===0 || orderItems.length >0 && !orderItems.some((orderItems)=> orderItems.itemType === "main")){
            orderId = 1;
        }
        else if(orderItems.length >0 && orderItems.some((orderItems)=> orderItems.itemType === "main")){
            
            const lastMainItem = [...orderItems]
            .filter(item => item.itemType === "main")
            .slice(-1)[0];
            orderId = lastMainItem.orderId + 1;
        }

        if(itemType !=="main"){
            setOrderItems(prevItems => {
                const existingItem = prevItems.find(item => item.name === name && item.orderId === orderId);
        
                if (existingItem) {
                    return prevItems.map(item =>
                        item.name === name && item.orderId === orderId
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    );
                } else {
                    return [
                        ...prevItems,
                        {
                            orderId: orderId,
                            itemId: itemId,
                            name: name,
                            quantity: quantity,
                            originalValue: originalValue,
                            promoValue: promoValue,
                            itemType: itemType,
                            reference: reference,
                            observation: observation,
                        }
                    ];
                }
            });
        }else{
            setOrderItems([...orderItems,{
                orderId,
                itemId,
                name,
                quantity,
                originalValue,
                promoValue,
                itemType,
                reference,
                observation
            }]);
        }
    }

    function editDeliveryItem(itemId, orderId, name, quantity, originalValue, promoValue, itemType, reference, observation, action){
            
        if(action === "plus"){
            setOrderItems(prevItems => {
                const existingItem = prevItems.find(item => item.name === name && item.orderId === orderId);
        
                if (existingItem) {
                    if(itemType !== "main"){
                        return prevItems.map(item =>
                            item.name === name && item.orderId === orderId
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        );
                    }else{
                        return prevItems.map(item =>
                            item.name === name && item.orderId === orderId
                                ? { ...item, quantity: quantity, observation: observation }
                                : item
                        );
                    }
                } else {
                    return [
                        ...prevItems,
                        {
                            orderId: orderId,
                            itemId: itemId,
                            name: name,
                            quantity: quantity,
                            originalValue: originalValue,
                            promoValue: promoValue,
                            itemType: itemType,
                            reference: reference,
                            observation: observation,
                        }
                    ];
                }  
            });
        }else if(action === "minus"){
            setOrderItems((prevItems) => 
                prevItems.map((item) => 
                    item.orderId === orderId && item.itemId === itemId && item.reference === reference
                        ? { ...item, quantity: item.quantity - 1 } // Diminui a quantidade apenas do item correspondente
                        : item
                ).filter(item => item.quantity > 0) // Remove o item se a quantidade chegar a 0
            );
        }
    }

    function removeDeliveryItem(id, reference){
        let orderId;
        if(orderItems.some((orderItems)=> orderItems.itemType === "main")){
            const lastMainItem = [...orderItems].filter(item => item.itemType === "main").slice(-1)[0];
            orderId = lastMainItem.orderId + 1;
        }else{
            orderId = 1;
        }
        setOrderItems((prevItems) => 
        prevItems.map((item) => 
            item.orderId === orderId && item.itemId === id && item.reference === reference
                ? { ...item, quantity: item.quantity - 1 } // Diminui a quantidade apenas do item correspondente
                : item
        ).filter(item => item.quantity > 0) // Remove o item se a quantidade chegar a 0
    );
    }

    function restoreDeliveryItem(items){
        setOrderItems([...items]);
    }

    function clearCurrentDeliveryItem(orderId){
        setOrderItems(orderItems.filter(item => item.orderId !== orderId));
    }

    function clearAllDeliveryItems(){
        setOrderItems([]);
    }

    return(
        <DeliveryContext.Provider value={{orderItems, setOrderItems, addMainDeliveryItemQuantity, removeMainDeliveryItemQuantity,
        addDeliveryItem, editDeliveryItem, removeDeliveryItem, restoreDeliveryItem, clearCurrentDeliveryItem, clearAllDeliveryItems}}>
            {children}
        </DeliveryContext.Provider>
    );
}