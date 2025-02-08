import "./AlertBox.scss";

export default function AlertBox({ title, message, onConfirm, isOpen }){

    if (!isOpen) return null;

   

    return(
        <>
        <div className="modal-alert-background">
            <div className="modal-alert-box-container">
                <div className="modal-title">
                    <p>{title}</p>
                </div>
                <div className="message-button-container">
                    <p>{message}</p>
                    <button onClick={onConfirm} className="standard-small-button">Ok</button>
                </div>
            </div>
        </div>
        </>
    );
}