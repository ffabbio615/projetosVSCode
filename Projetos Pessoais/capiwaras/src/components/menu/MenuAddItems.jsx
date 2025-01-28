import "./MenuAddItems.scss";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ModalConfirmBox from "../modal/ModalConfirmBox";
import ModalAlertBox from "../modal/ModalAlertBox";

export default function MenuAddItems(){

    const [radioOption, setRadioOption] = useState("addItem");

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
            setCheckOption(false);
        }
    },[radioOption]);

    const [checkOption, setCheckOption] = useState(false);

    function checkOptionHandler(){
        setCheckOption (!checkOption);
    }

    const [mConfirmBox, setMConfirmBox] = useState(
        {
            title:'',
            action:0
        }
    );
    const [showConfirmBox, setShowConfirmBox] = useState(false);
    const [answerConfirmBox, setAnswerConfirmBox] = useState(false);
    const [showAlertBox, setShowAlertBox] = useState({
        show: false,
        title:'',
        message: '',
    });
    
    function modalHandler(title, action){
        setMConfirmBox({title, action});
        setShowConfirmBox(true);
    }

    const navigate = useNavigate();

    const [shownConfirmBox, setShownConfirmBox] = useState(
        {
            shown: false,
            redirect: false,
        }
    );

    function checkFields(){

        if(radioOption === "addItem"){
            const checkValue = (document.querySelector('#inputValue').value).replace(",",".");
            let checkPromoValue;
            if(checkOption){
                checkPromoValue = (document.querySelector('#inputPromoValue').value).replace(",",".");
            }else{
                checkPromoValue = "0";
            }
            if(document.querySelector('#inputName').value === "" || document.querySelector('#inputDescription').value === ""
            || document.querySelector('#inputPicture').value === "" || document.querySelector('#inputValue').value === ""
            || document.querySelector('#category').value === "default" || checkPromoValue === ""){
                setShowAlertBox({show: true, title: 'Atenção!', message: 'Preencha todos os campos do item!'});
                return false;
            }else{
                if(checkValue >0 && !Number.isNaN(checkValue) && checkValue !== undefined && checkPromoValue >=0 && 
                !Number.isNaN(checkPromoValue) && checkPromoValue !== undefined && checkPromoValue < checkValue){
                    setShowAlertBox({show: true, title: 'Confirmação', message: 'O item foi cadastrado com sucesso!'});
                    return false;
                }
                else{
                    if(checkOption){
                        if(checkPromoValue > checkValue){
                            setShowAlertBox({show: true, title: 'Atenção!', message: 'O valor promocional precisa ser menor que o valor original.'});
                            return false;
                        }
                        setShowAlertBox({show: true, title: 'Atenção!', message: 'Os campos "Valor original" e "Valor promocional" precisam ser somente números com ponto ou vírgula.'});
                        return false;
                    }
                    setShowAlertBox({show: true, title: 'Atenção!', message: 'O campo "Valor original" precisa ser somente números com ponto ou vírgula.'});
                    return false;
                }
            }
        } else  if(radioOption === "addCategory"){
            if(document.querySelector('#inputCategoryName').value === ""){
                setShowAlertBox({show: true, title: 'Atenção!', message: 'Preencha a categoria!'});
                return false;
            }else{
                setShowAlertBox({show: true, title: 'Confirmação', message: 'A categoria foi cadastrada com sucesso!'});
                return false;
            }
        }
    }

    useEffect(()=>{
        if(answerConfirmBox && mConfirmBox.action === 1){
            navigate("/menu");
        }else if(answerConfirmBox && mConfirmBox.action === 2){
                checkFields();
        }
            setAnswerConfirmBox(false);
    },[mConfirmBox, answerConfirmBox]);

    useEffect(() => {
        if (shownConfirmBox.shown && shownConfirmBox.redirect) {
            navigate("/menu");
            setShownConfirmBox(false, false);
        } else if (shownConfirmBox.shown && !shownConfirmBox.redirect) {
            setShownConfirmBox(false, false);
        }
    }, [shownConfirmBox, navigate]);

    return(
        <>
        {
            showAlertBox.show ? 
            <ModalAlertBox
            title={showAlertBox.title}
            message={showAlertBox.message}
            setShowBox={setShowAlertBox}
            setShownConfirmBox={setShownConfirmBox}
            /> : ''
        }
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
                    <label htmlFor="inputName">Nome (máximo 30 caracteres):</label>
                    <input id="inputName" type="text" maxLength={30} placeholder="Ex.: Frango caipira com quiabo" />
                    <label htmlFor="inputDescription">Descrição:</label>
                    <input id="inputDescription" type="text" placeholder="Ex.: Um delicioso prato vindo de Minas Gerais." />
                    <label htmlFor="inputPicture">Imagem:</label>
                    <input id="inputPicture" type="text" placeholder="Ex.: frangoCaipira (somente o nome do arquivo)" />
                    <label htmlFor="inputValue">Valor original:</label>
                    <input id="inputValue" className={checkOption ? "promoChange" : ""} type="text" placeholder="Ex.: R$28,90 (somente números)" />
                        
                    <div className="first-check">
                        <input onChange={checkOptionHandler} type="checkbox" id="promoItem" name="promoItem" value="promoItem" />
                        <label htmlFor="promoItem">Item promocional</label>
                    </div>
                    {checkOption ?
                            <>
                                <label htmlFor="inputPromoValue">Valor promocional:</label>
                                <input id="inputPromoValue" type="text" placeholder="Ex.: R$22,90 (somente números)" />
                            </>
                            : <> </>
                        }
                    <div>
                        <input type="checkbox" id="aditionalItem" name="aditionalItem" value="aditionalItem" />
                        <label htmlFor="aditionalItem">Item principal</label>
                    </div>
                    <div>
                        <input type="checkbox" id="aditionalItem" name="aditionalItem" value="aditionalItem" />
                        <label htmlFor="aditionalItem">Item adicional</label>
                    </div>
                    <div className="last-check">
                        <input type="checkbox" id="aditionalAcceptance" name="topping" value="aditionalAcceptance" />
                        <label htmlFor="aditionalAcceptance">Aceita adicionais</label>                        
                    </div>

                    <label id="label-select" htmlFor="category">Categoria:</label>
                    <select name="category" id="category" disabled={checkOption}>
                        {checkOption ?
                            <>
                            <option value="promo">Promos do dia</option>
                            </>
                            :
                            <>
                            <option value="default">Escolha a categoria</option>
                            <option value="frangos">Frangos</option>
                            <option value="bebidas">Bebidas</option>
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
                <button onClick={()=> modalHandler("Confirma a adição?", 2)} className="standard-medium-button">Confirmar</button>
            </div>
        </main>
        </>
    );
}