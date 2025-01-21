import "./CompletedOrder.scss";
import { Link } from "react-router-dom";

export default function CompletedOrder(){

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
   
                <div id="order-item-container" className="item-container">
                    <div className="title-item-container">
                        <h6>Capi Chicken Assadão</h6>
                    </div>
                    <img src='../../../src/assets/img/dishes/capiChicken.jpg' />
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
                        <div className="resume-value-container">
                            <h6 className="resume-item">Valor total do pedido:</h6>
                            <h6 className="resume-item">R$98.70</h6>
                        </div>
                </div>

                <div className="order-button-container">
                    <Link to={"/"}><button className="standard-medium-button">Retornar</button></Link>
                </div>

            </div>
        </main>
        </>
    );
}