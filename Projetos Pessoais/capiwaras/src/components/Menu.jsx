import './Menu.scss';

export default function Menu(){

    return(
        <>
        <main className="menu-container">
            <div className="logo-container">
                <div className="symbol"></div>
                <div className="logo"></div>
            </div>

            <div className="title-menu">
                <h1>CARDÁPIO 
                <button className="add-button"></button>
                </h1>
                
            </div>

            <div className="menu-items-container">
                <div className="food-category-container">
                    <p className="category-title">Promos do dia
                        <button className="edit-button"></button>
                        <button className="delete-button"></button>
                    </p>
                </div>
                <div className="food-items-container">
                    <div className='food-option-menu'>
                        <button className="edit-button"></button>
                        <button className="delete-button"></button>
                        <img src='../src/assets/img/dishes/saladaCaesar.jpg' className="food-image" alt='Imagem do Prato' />
                        <p className='food-title'>Salada Caesar com molho de alho</p>
                        <div className="item-price-container"><p className='food-price'>R$22,50</p></div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}