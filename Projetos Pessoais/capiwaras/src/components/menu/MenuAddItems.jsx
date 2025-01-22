import "./MenuAddItems.scss";

export default function MenuAddItems(){
    return(
        <>
        <main className="menu-container">
            <div className="logo-container">
                <img className="symbol" src="../src/assets/img/capiwarasSymbol.svg" alt="Símbolo da Logo Capiwaras" />
                <img className="logo" src="../src/assets/img/capiwarasLogo.svg" alt="Logo da Logo Capiwaras" />
            </div>

            <div className="title-menu">
                <h1>Adicionar Itens
                </h1>
                
            </div>

            <div className="menu-items-container">
                <div className="food-category-container">
                    <p className="category-title">Escolha uma opção:</p>
                    <input type="radio" id="add-item" name="addItemOption" value="addItem" defaultChecked />
                    <label htmlFor="addItem">Adicionar um item</label>
                    <input type="radio" id="cartao" name="addItemOption" value="addCategory" />
                    <label htmlFor="addCategory">Adicionar uma categoria</label>
                </div>
            </div>

            <div className="add-menu-fields">
                <label htmlFor="inputName">Nome:</label>
                <input id="inputName" type="text" placeholder="Ex.: Frango caipira com quiabo" />
                <label htmlFor="inputDescription">Descrição:</label>
                <input id="inputDescription" type="text" placeholder="Ex.: Um delicioso prato vindo de Minas Gerais." />
                <label htmlFor="inputPicture">Imagem:</label>
                <input id="inputPicture" type="text" placeholder="Ex.: frangoCaipira (somente o nome do arquivo)" />
                <label htmlFor="inputName">Valor do item:</label>
                <input id="inputName" type="text" placeholder="Ex.: R$28,90" />
                
                <input type="checkbox" id="promoItem" name="promoItem" value="promoItem" />
                <label htmlFor="promoItem">O item está em promoção?</label>
                <input type="checkbox" id="aditionalItem" name="aditionalItem" value="aditionalItem" />
                <label htmlFor="aditionalItem">É um item adicional?</label>
                <input type="checkbox" id="aditionalAcceptance" name="topping" value="aditionalAcceptance" />
                <label htmlFor="aditionalAcceptance">O item aceita outros adicionais?</label>

                <label htmlFor="category">Categoria:</label>
                <select name="category" id="category">
                    <option defaultValue="default">Escolha a categoria</option>
                    <option defaultValue="promo">Promos do dia</option>
                </select>
            </div>

        </main>
        </>
    );
}