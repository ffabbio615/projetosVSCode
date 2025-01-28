import "./ModalAlertBox.scss";

export default function ModalConfirmBox({title, message, setShowBox, setShownConfirmBox}){

    function answerHandler(){
        if(title === "Confirmação"){
            setShownConfirmBox({shown: true, redirect: true});
        }else{
            setShownConfirmBox({shown: true, redirect: false});
        }
        
        setShowBox({ show: false, title: '', message: ''});
    }

    return(
        <>
        <div className="modal-alert-background">
            <div className="modal-alert-box-container">
                <div className="modal-title">
                    <h5>{title}</h5>
                </div>
                <div className="message-button-container">
                    <p>{message}</p>
                    <button onClick={answerHandler} className="standard-small-button">Ok</button>
                </div>
            </div>
        </div>
        </>
    );
}