import "./CapiwarasBag.scss";
import { Link } from "react-router-dom";
import ModalConfirmBox from "../modal/ModalConfirmBox";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CapiwarasBag(){

    const [showConfirmBox, setShowConfirmBox] = useState(false);
    const [answerConfirmBox, setAnswerConfirmBox] = useState(false);

    function modalHandler(){
        setShowConfirmBox(true);
    }

    const navigate = useNavigate();

    useEffect(()=>{
        if(answerConfirmBox){
            navigate("/delivery/add-item/capiwaras-bag/completed-order");
        }
    },[answerConfirmBox]);

    return(
        <>
        {showConfirmBox ? 
            <ModalConfirmBox 
            title={'Confirma o pedido?'}
            setShowBox={setShowConfirmBox}
            setAnswer={setAnswerConfirmBox}
            /> 
            : ''}
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
                        <p>Adicionar outros itens</p>
                    </div>
                </div>
            </div>

            <div className="bag-items-container">
                <div className="bag-title-container">
                    <h4>Itens do pedido:</h4>
                </div>
   
                <div className="item-container">
                    <button className="bag-edit-button"></button>

                    <div className="title-item-container">
                        <h6>Capi Chicken Assadão</h6>
                        <p>+ R$44,00</p>
                    </div>
                    <img src='../../src/assets/img/dishes/capiChicken.jpg' />
                    <div className="item-buttons-container">
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                </div>
                
                <div className="aditional-items-container">
                    <h6>Itens adicionais:</h6>
                    <div className="items-container">
                        <p className="aditional-item">1 Suco de Melancia 300ml</p>
                        <p className="aditional-item">1 Suco de Laranja 300ml</p>
                        <p className="aditional-item">1 Suco de Fortificante 300ml</p>
                        <p className="aditional-item">1 Água Mineral 510ml</p>
                    </div>
                </div>

                <div className="resume-items-container">
                    <h6>Resumo do pedido:</h6>
                        <div className="resume-value-container">
                            <p className="resume-item">Subtotal:</p>
                            <p className="resume-item">R$98.70</p>
                        </div>

                        <div className="resume-value-container">
                            <p className="resume-item">Valor de entrega:</p>
                            <p className="resume-item">R$0,00</p>
                        </div>

                        <div className="resume-value-container">
                            <p className="resume-item">Descontos:</p>
                            <p className="resume-item">R$0,00</p>
                        </div>

                        <div className="resume-value-container">
                            <h6 className="resume-item">Total:</h6>
                            <h6 className="resume-item">R$98.70</h6>
                        </div>
                </div>

                <div className="order-button-container">
                    <button onClick={modalHandler} className="standard-medium-button">Finalizar Pedido</button>
                </div>

            </div>
        </main>
        </>
    );
}