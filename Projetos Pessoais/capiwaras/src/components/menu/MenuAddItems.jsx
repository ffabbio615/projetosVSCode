import "./MenuAddItems.scss";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ModalConfirmBox from "../modal/ModalConfirmBox";

export default function MenuAddItems(){

    const [radioOption, setRadioOption] = useState("addItem");

    function optionHandler(opt){
        setRadioOption(opt.target.value);
    }

    const [mConfirmBox, setMConfirmBox] = useState(
        {
            title:'',
            action:0
        }
    );
    const [showConfirmBox, setShowConfirmBox] = useState(false);
    const [answerConfirmBox, setAnswerConfirmBox] = useState(false);
    
    function modalHandler(title, action){
        setMConfirmBox({title, action});
        setShowConfirmBox(true);
    }

    const navigate = useNavigate();

    function checkFields(){

        if(radioOption === "addItem"){
            if(document.querySelector('#inputName').value === "" || document.querySelector('#inputDescription').value === ""
            || document.querySelector('#inputPicture').value === "" || document.querySelector('#inputValue').value === ""
            || document.querySelector('#category').value === "default"){
                alert("Preencha todos os campos do item!");
                return false;
            }else{
                return true;
            }
        } else  if(radioOption === "addCategory"){
            if(document.querySelector('#inputCategoryName').value === ""){
                alert("Preencha a categoria!");
                return false;
            }else{
            return true;
            }
        }
    }

    useEffect(()=>{
        if(answerConfirmBox && mConfirmBox.action === 1){
            navigate("/menu");
        }else if(answerConfirmBox && mConfirmBox.action === 2){
            if(checkFields()){
            navigate("/menu");
            }
        }
            setAnswerConfirmBox(false);
    },[mConfirmBox, answerConfirmBox]);

    return(
        <>
        {showConfirmBox ? 
            <ModalConfirmBox 
            title={mConfirmBox.title}
            setShowBox={setShowConfirmBox}
            setAnswer={setAnswerConfirmBox}
            /> 
            : ''}
        <main className="add-menu-container">
            <img onClick={()=> modalHandler("Deseja realmente retornar?", 1)} className="add-menu-back-icon" src="../src/assets/img/icons/backIcon.png" />
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
                    <label htmlFor="inputName">Nome:</label>
                    <input id="inputName" type="text" placeholder="Ex.: Frango caipira com quiabo" />
                    <label htmlFor="inputDescription">Descrição:</label>
                    <input id="inputDescription" type="text" placeholder="Ex.: Um delicioso prato vindo de Minas Gerais." />
                    <label htmlFor="inputPicture">Imagem:</label>
                    <input id="inputPicture" type="text" placeholder="Ex.: frangoCaipira (somente o nome do arquivo)" />
                    <label htmlFor="inputValue">Valor do item:</label>
                    <input id="inputValue" type="text" placeholder="Ex.: R$28,90 (somente números)" />
                        
                    <div className="first-check">
                        <input type="checkbox" id="promoItem" name="promoItem" value="promoItem" />
                        <label htmlFor="promoItem">O item está em promoção?</label>
                    </div>
                    <div>
                        <input type="checkbox" id="aditionalItem" name="aditionalItem" value="aditionalItem" />
                        <label htmlFor="aditionalItem">É um item adicional?</label>
                    </div>
                    <div className="last-check">
                        <input type="checkbox" id="aditionalAcceptance" name="topping" value="aditionalAcceptance" />
                        <label htmlFor="aditionalAcceptance">O item aceita outros adicionais?</label>                        
                    </div>

                    <label id="label-select" htmlFor="category">Categoria:</label>
                    <select name="category" id="category">
                        <option Value="default">Escolha a categoria</option>
                        <option Value="promo">Promos do dia</option>
                    </select>
                </>
                : <>
                <label htmlFor="inputCategoryName">Categoria:</label>
                <input id="inputCategoryName" type="text" placeholder="Ex.: Sobremesas" />
                </>} 
            </div>
            
            <div className="add-button-container">
                <button onClick={()=> modalHandler("Confirma a adição?", 2)} className="standard-medium-button">Confirmar</button>
            </div>
        </main>
        </>
    );
}