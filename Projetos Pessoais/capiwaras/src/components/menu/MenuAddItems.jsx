import "./MenuAddItems.scss";
import { MenuContext } from "../context/MenuContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import useConfirmBox from "../modal/useConfirmBox";
import useAlertBox from "../modal/useAlertBox";

export default function MenuAddItems(){

    const {menuCategory, addMenuItem, addMenuCategory} = useContext(MenuContext);
    const [radioOption, setRadioOption] = useState("addItem");
    const { ConfirmBoxComponent, confirm } = useConfirmBox();
    const { AlertBoxComponent, alertAttention, alertConfirmation} = useAlertBox();
    const [promoCheckOption, setPromoCheckOption] = useState(false);

    function optionHandler(opt){
        setRadioOption(opt.target.value);
    }

    useEffect(()=>{
        if(radioOption === "addCategory"){
            document.querySelector("#inputCategoryName").value = "";
        }else if(radioOption === "addItem"){
            document.querySelector("#inputName").value = "";
            document.querySelector("#inputDescription").value = "";
            document.querySelector("#inputPicture").value = "";
            document.querySelector("#inputValue").value = "";
            setPromoCheckOption(false);
        }
    },[radioOption]);

    function promoCheckOptionHandler(){
        setPromoCheckOption (!promoCheckOption);
    }

    const navigate = useNavigate();

    function handleAdditionConfirmationMenu(){

        if(radioOption === "addItem"){
            
            confirm("Confirma a adição do item?", () => {
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
                        addMenuItem(name, description, picture, category, Number(originalValue), Number(promoValue), promoItem, mainItem, aditionalItem, aditionalAcceptance);
                        alertConfirmation("O item foi adicionado com sucesso!", () => {
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
        } else  if(radioOption === "addCategory"){
            confirm("Confirma a adição da categoria?", () => {
                const categoryName = document.querySelector('#inputCategoryName').value;

                if(categoryName === ""){
                    alertAttention('Preencha a categoria!', () => {});
                    return false;
                }else{
                    if (!menuCategory.some(category => category.category === categoryName)){
                    addMenuCategory(categoryName)
                    alertConfirmation("A categoria foi adicionada com sucesso!", () => {
                        navigate("/menu");
                        return false;
                    });
                }else{
                    alertAttention('Já existe uma categoria com esse nome. Escolha outra!', () => {});
                }   
                    return false;
                }
            });
        }
    }

    function backToMenu(){
        confirm("Tem certeza que deseja retornar sem concluir a adição?", () => {
            navigate("/menu");  
        });
    }

    return(
        <>
        {AlertBoxComponent}
        {ConfirmBoxComponent}
        <main className="add-menu-container">
            <img onClick={backToMenu} className="add-menu-back-icon" src="../src/assets/img/icons/backIcon.png" />
            <div className="logo-container">
                <img className="symbol" src="../src/assets/img/capiwarasSymbol.svg" alt="Símbolo da Logo Capiwaras" />
                <img className="logo" src="../src/assets/img/capiwarasLogo.svg" alt="Logo da Logo Capiwaras" />
            </div>

            <div className="title-add-menu">
                <h1>Adicionar Itens
                </h1>
                
            </div>

            <div className="add-menu-items-container">
                <div className="add-option-container">
                    <p className="option-title">Escolha uma opção:</p>
                    <div>
                        <div>
                            <input onChange={optionHandler} type="radio" id="add-item" name="addItemOption" value="addItem" defaultChecked />
                            <label htmlFor="addItem">Adicionar um item</label>
                        </div>
                        <div>
                            <input onChange={optionHandler} type="radio" id="add-category" name="addItemOption" value="addCategory" />
                            <label htmlFor="addCategory">Adicionar uma categoria</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="add-menu-fields">
                {radioOption === "addItem" ? <>
                    <label htmlFor="inputName">Nome (máximo 30 caracteres):</label>
                    <input id="inputName" type="text" maxLength={30} placeholder="Ex.: Frango caipira com quiabo" />
                    <label htmlFor="inputDescription">Descrição:</label>
                    <input id="inputDescription" type="text" placeholder="Ex.: Um delicioso prato vindo de Minas Gerais." />
                    <label htmlFor="inputPicture">Imagem:</label>
                    <input id="inputPicture" type="text" placeholder="Ex.: frangoCaipira (somente o nome do arquivo)" />
                    <label htmlFor="inputValue">Valor original:</label>
                    <input id="inputValue" className={promoCheckOption ? "promoChange" : ""} type="text" placeholder="Ex.: R$28,90 (somente números)" />
                        
                    <div className="first-check">
                        <input onChange={promoCheckOptionHandler} type="checkbox" id="promoItem" name="promoItem" value="promoItem" />
                        <label htmlFor="promoItem">Item promocional</label>
                    </div>
                    {promoCheckOption ?
                            <>
                                <label htmlFor="inputPromoValue">Valor promocional:</label>
                                <input id="inputPromoValue" type="text" placeholder="Ex.: R$22,90 (somente números)" />
                            </>
                            : <> </>
                        }
                    <div>
                        <input type="checkbox" id="mainItem" name="mainItem" value="aditionalItem" />
                        <label htmlFor="mainlItem">Item principal</label>
                    </div>
                    <div>
                        <input type="checkbox" id="aditionalItem" name="aditionalItem" value="aditionalItem" disabled={promoCheckOption ? true : false} />
                        <label htmlFor="aditionalItem">Item adicional</label>
                    </div>
                    <div className="last-check">
                        <input type="checkbox" id="aditionalAcceptance" name="aditionalAcceptance" value="aditionalAcceptance" />
                        <label htmlFor="aditionalAcceptance">Aceita adicionais</label>                        
                    </div>

                    <label id="label-select" htmlFor="category">Categoria:</label>
                    <label id="label-select" htmlFor="category">Categoria:</label>
                    <select name="category" id="category" disabled={promoCheckOption}>
                        {promoCheckOption ?
                            <option value="Promos do dia">Promos do dia</option>
                            :
                            <>
                                <option value="default">Escolha a categoria</option>
                                {
                                    menuCategory
                                        .filter(category => category.category !== "Promos do dia") // Filtra antes de mapear
                                        .map(category => (
                                            <option key={category.id} value={category.category}>
                                                {category.category}
                                            </option>
                                        ))
                                }
                            </>
                        }
                    </select>
                </>
                : <>
                <label htmlFor="inputCategoryName">Categoria:</label>
                <input id="inputCategoryName" type="text" placeholder="Ex.: Sobremesas" />
                </>} 
            </div>
            
            <div className="add-button-container">
                <button onClick={backToMenu} className="remove-small-button">Cancelar</button>
                <button onClick={handleAdditionConfirmationMenu} className="standard-small-button">Confirmar</button>
            </div>
        </main>
        </>
    );
}