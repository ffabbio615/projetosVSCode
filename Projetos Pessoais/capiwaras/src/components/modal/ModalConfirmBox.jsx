import "./ModalConfirmBox.scss";

export default function ModalConfirmBox({title, setShowBox, setAnswer}){

    function answerHandler(answer){
        setAnswer(answer);
        setShowBox(false);
    }

    return(
        <>
        <div className="modal-background">
            <div className="modal-confirm-box-container">
                <div className="modal-title">
                    <h5>{title}</h5>
                </div>
                <div className="modal-buttons-container">
                    <button onClick={()=> answerHandler(true)} className="standard-small-button">Sim</button>
                    <button onClick={()=> answerHandler(false)} className="standard-small-button">Não</button>
                </div>
            </div>
        </div>
        </>
    );
}