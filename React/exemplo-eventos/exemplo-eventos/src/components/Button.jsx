import '../App.scss'

export default function Button({evento}){

    return(
        <>

        <div className="button-container">
            <button onClick={(e) => evento(e)} className="default-button">CLIQUE PARA MUDAR AS CORES</button>
        </div>

        </>
    )
}