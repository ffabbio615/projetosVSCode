import "./MenuEditItem.scss";
import { useState, useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import useConfirmBox from "../modal/useConfirmBox";
import useAlertBox from "../modal/useAlertBox";
import { MenuContext } from "../context/MenuContext";

export default function MenuEditItems(){

    const {itemId} = useParams();
    const {menuItems, menuCategory, editMenuItem} = useContext(MenuContext);
    const { ConfirmBoxComponent, confirm } = useConfirmBox();
    const { AlertBoxComponent, alertAttention, alertConfirmation} = useAlertBox();
    const navigate = useNavigate();
    const [promoCheckOption, setpromoCheckOption] = useState(false);

    function promoCheckOptionHandler(){
        setpromoCheckOption (!promoCheckOption);
    }

    function handleEditConfirmationMenu(){

        confirm("Confirma edição do item?", () => {
            const name = document.querySelector('#inputName').value;
            const description = document.querySelector('#inputDescription').value;
            const picture = document.querySelector('#inputPicture').value;
            const originalValue = (document.querySelector('#inputValue').value).replace(",",".");
            const category = document.querySelector('#category').value;
            let promoValue;
            const promoItem = promoCheckOption;
            const mainItem = document.querySelector('#mainItem').checked;
            const aditionalItem = document.querySelector('#aditionalItem').checked;
            const aditionalAcceptance = document.querySelector('#aditionalAcceptance').checked;
            
            if(promoCheckOption){
                promoValue = (document.querySelector('#inputPromoValue').value).replace(",",".");
            }else{
                promoValue = "0";
            }
            if(name === "" || description === "" || picture === "" || originalValue === "" || category === "default" || promoValue === ""){
                alertAttention("Preencha todos os campos do item!", () => {});
                return false;
            }else{
                if(originalValue >0 && !Number.isNaN(originalValue) && originalValue !== undefined && promoValue >=0 && 
                !Number.isNaN(promoValue) && promoValue !== undefined && promoValue < originalValue){
                    editMenuItem(Number(itemId), name, description, picture, category, Number(originalValue), Number(promoValue), promoItem, mainItem, aditionalItem, aditionalAcceptance);
                    alertConfirmation("O item foi alterado com sucesso!", () => {
                        navigate("/menu");
                        return false;
                    });
                }
                else{
                    if(promoCheckOption){
                        if(promoValue > originalValue){
                            alertAttention("O valor promocional precisa ser menor que o valor original.", () => {});
                            return false;
                        }
                        alertAttention('Os campos "Valor original" e "Valor promocional" precisam ser somente números com ponto ou vírgula.', () => {});
                        return false;
                    }
                    alertAttention('O campo "Valor original" precisa ser somente números com ponto ou vírgula.', () => {});
                    return false;
                }
            }
        });
    }

    function backToMenu(){
        confirm("Tem certeza que deseja retornar sem editar o item?", () => {
            navigate("/menu");  
        });
    }

    return(
        <>
        {AlertBoxComponent}
        {ConfirmBoxComponent}
        { menuItems.filter((item)=> item.id === Number(itemId)).map((items) =>(

            <main key={items.id} className="edit-menu-container">
                <img onClick={backToMenu} className="edit-menu-back-icon" src="../../src/assets/img/icons/backIcon.png" />
                <div className="logo-container">
                    <img className="symbol" src="../../src/assets/img/capiwarasSymbol.svg" alt="Símbolo da Logo Capiwaras" />
                    <img className="logo" src="../../src/assets/img/capiwarasLogo.svg" alt="Logo da Logo Capiwaras" />
                </div>

                <div className="title-edit-menu">
                    <h1>Editar Itens</h1>
                </div>

                <div className="edit-menu-items-container">
                    <div className="edit-option-container">
                        <p className="option-title">{items.name}</p>
                        <img className="item-image" src={`../../src/assets/img/dishes/${items.picture}.jpg`} />
                    </div>
                </div>

                <div className="edit-menu-fields">
                        <label htmlFor="inputName">Nome (máximo 30 caracteres):</label>
                        <input id="inputName" maxLength={30} type="text" placeholder={items.name}/>

                        <label htmlFor="inputDescription">Descrição:</label>
                        <input id="inputDescription" type="text" placeholder={items.description}/>

                        <label htmlFor="inputPicture">Imagem:</label>
                        <input id="inputPicture" type="text" placeholder={items.picture}/>

                        <label htmlFor="inputValue">Valor do item:</label>
                        <input id="inputValue" className={promoCheckOption ? "promoChange" : ""} type="text" placeholder={items.originalValue.toFixed(2)}/>

                        <div className="first-check">
                            <input onChange={promoCheckOptionHandler} type="checkbox" id="promoItem" name="promoItem" value="promoItem" />
                            <label htmlFor="promoItem">Item promocional</label>
                        </div>
                        {promoCheckOption ?
                                <>
                                    <label htmlFor="inputPromoValue">Valor promocional:</label>
                                    <input id="inputPromoValue" type="text" placeholder={items.promoValue.toFixed(2)}/>
                                </>
                                : <> </>
                            }
                        <div>
                            <input type="checkbox" id="mainItem" name="mainItem" value="mainItem" />
                            <label htmlFor="mainItem">Item principal</label>
                        </div>
                        <div>
                            <input type="checkbox" id="aditionalItem" name="aditionalItem" value="aditionalItem" disabled={promoCheckOption ? true : false} />
                            <label htmlFor="aditionalItem">Item adicional</label>
                        </div>
                        <div className="last-check">
                            <input type="checkbox" id="aditionalAcceptance" name="topping" value="aditionalAcceptance" />
                            <label htmlFor="aditionalAcceptance">Aceita adicionais</label>                        
                        </div>

                        <label id="label-select" htmlFor="category">Categoria:</label>
                        <select name="category" id="category" disabled={promoCheckOption}>
                            {promoCheckOption ?
                                <option value="Promos do dia">Promos do dia</option>
                                :
                                <>
                                    <option value="default">Escolha a categoria</option>
                                    {
                                        menuCategory
                                            .filter(category => category.category !== "Promos do dia")
                                            .map(category => (
                                                <option key={category.id} value={category.category}>
                                                    {category.category}
                                                </option>
                                            ))
                                    }
                                </>
                            }
                        </select>
                </div>
                
                <div className="edit-button-container">
                    <button onClick={backToMenu} className="remove-small-button">Cancelar</button>
                    <button onClick={handleEditConfirmationMenu} className="standard-small-button">Confirmar</button>
                </div>
            </main>
        ))}

        </>
    );
}