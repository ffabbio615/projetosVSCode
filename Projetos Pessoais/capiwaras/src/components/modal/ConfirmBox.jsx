import "./ConfirmBox.scss";

export default function ConfirmBox({ message, onConfirm, onCancel, isOpen }){

    if (!isOpen) return null;

    return(
        <>
        <div className="modal-background">
            <div className="modal-confirm-box-container">
                <div className="modal-title">
                    <p>Confirmação</p>
                </div>
                <div className="message-button-container">
                    <p>{message}</p>
                    <div className="modal-buttons-container">
                        <button onClick={onCancel} className="standard-small-button">Não</button>
                        <button onClick={onConfirm} className="standard-small-button">Sim</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}