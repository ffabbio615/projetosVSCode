import { useEffect, useState } from 'react';
import './Menu.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function Menu(){

    const [itemsMenu, setItemsMenu] = useState([
        {
            id: 1,
            name: "Salada Caesar com molho de alho",
            description: "",
            picture: "saladaCaesar",
            category: "Promos do dia",
            value: 22.50,
            quantity: 0,
            isInPromo: true,
            isAditional: false,
            acceptAditionals: true,
        },
        {
            id: 2,
            name: "Spaghetti pomodoro com espinafre",
            description: "",
            picture: "spaghettiPomodoro",
            category: "Promos do dia",
            value: 22.50,
            quantity: 0,
            isInPromo: true,
            isAditional: false,
            acceptAditionals: true,
        },
        {
            id: 3,
            name: "Capi Chicken Assadão",
            description: "",
            picture: "capiChicken",
            category: "Frangos",
            value: 44.00,
            quantity: 0,
            isInPromo: false,
            isAditional: false,
            acceptAditionals: true,
        },
        {
            id: 4,
            name: "CapiWish com molho de iogurte",
            description: "",
            picture: "capiWish",
            category: "Frangos",
            value: 26.90,
            quantity: 0,
            isInPromo: false,
            isAditional: false,
            acceptAditionals: true,
        },
        {
            id: 5,
            name: "Super Waras com salada rústica",
            description: "",
            picture: "superWaras",
            category: "Frangos",
            value: 55.00,
            quantity: 0,
            isInPromo: false,
            isAditional: false,
            acceptAditionals: true,
        },
        {
            id: 6,
            name: "Guisado Especial Capiwaras",
            description: "",
            picture: "guisadoEspecial",
            category: "Frangos",
            value: 64.90,
            quantity: 0,
            isInPromo: false,
            isAditional: false,
            acceptAditionals: true,
        },
        {
            id: 7,
            name: "Suco de Melancia 300ml",
            description: "",
            picture: "sucoMelancia",
            category: "Bebidas",
            value: 11.90,
            quantity: 0,
            isInPromo: false,
            isAditional: true,
            acceptAditionals: false,
        },
        {
            id: 8,
            name: "Suco de Laranja 300ml",
            description: "",
            picture: "sucoLaranja",
            category: "Bebidas",
            value: 14.90,
            quantity: 0,
            isInPromo: false,
            isAditional: true,
            acceptAditionals: false,
        },
        {
            id: 9,
            name: "Suco Fortificante 300ml",
            description: "",
            picture: "sucoFortificante",
            category: "Bebidas",
            value: 19.90,
            quantity: 0,
            isInPromo: false,
            isAditional: true,
            acceptAditionals: false,
        },
        {
            id: 10,
            name: "Água Mineral 510ml",
            description: "",
            picture: "aguaMineral",
            category: "Bebidas",
            value: 8.00,
            quantity: 0,
            isInPromo: false,
            isAditional: true,
            acceptAditionals: false,
        },
        {
            id: 11,
            name: "Medalhão de Frango",
            description: "",
            picture: "medalhaoDeFrango",
            category: "Cocó",
            value: 55.00,
            quantity: 0,
            isInPromo: false,
            isAditional: false,
            acceptAditionals: true,
        },
    ]);

    const [categoryMenu, setCategoryMenu] = useState([
        {
            id: 1,
            category: "Promos do dia",
            editMode: false
        },
        {
            id: 2,
            category: "Frangos",
            editMode: false
        },
        {
            id: 3,
            category: "Bebidas",
            editMode: false
        }
])

    function editCategoryHandler(id)
    {
        const inputCategory = document.querySelector(`#input-edit-category${id}`).value;
        const getCategory = categoryMenu.filter((category) => category.id === id ? category.category : '');
        setItemsMenu(itemsMenu.map((item) => item.category === getCategory[0].category ? {...item, category: inputCategory} : item));
        setCategoryMenu(categoryMenu.map((category) => category.id === id ? {...category, category: inputCategory, editMode: false} : category));
    }

    function handleEditMode(id, active){
        setCategoryMenu(categoryMenu.map((category) => category.id === id ? {...category, editMode:active} : category));
    }

    const navigate = useNavigate();
    function editedItemMenu()
    {
        navigate("/menu/edit-item")
    }

    return(
        <>
        <main className="menu-container">
            <div className="logo-container">
                <img className="symbol" src="../src/assets/img/capiwarasSymbol.svg" alt="Símbolo da Logo Capiwaras" />
                <img className="logo" src="../src/assets/img/capiwarasLogo.svg" alt="Logo da Logo Capiwaras" />
            </div>

            <div className="title-menu">
                <h1>CARDÁPIO 
                <Link to={"/menu/add-items"}><button className="add-button"></button></Link>
                </h1>
                
            </div>

                {
                    categoryMenu.map((category) => (
                        <div key={category.id} className="menu-items-container">
                            <div className="food-category-container">
                                <p className="category-title">{category.category}
                                    {category.category !== "Promos do dia" ?
                                        <>
                                            <button onClick={()=> handleEditMode(category.id, true)} className="edit-button"></button>
                                            <button className="delete-button"></button>
                                        </>
                                        : <></>
                                    }

                                </p>
                                {
                                    category.editMode ?
                                    <div className='edit-category-container'>
                                        <input id={`input-edit-category${category.id}`} type='text' placeholder='Digite nova categoria' />
                                        <button onClick={()=> editCategoryHandler(category.id)} className='edit-small-button'>Alterar</button>
                                        <button onClick={()=> handleEditMode(category.id, false)} className='remove-small-button'>Cancelar</button>
                                    </div>
                                    : <></>
                                }
                            </div>
                            <div className="food-items-container">
                                {itemsMenu.map((items) => (
                                    items.category === category.category ?
                                        <div key={items.id} className='food-option-menu'>
                                            <button onClick={editedItemMenu} className="edit-button"></button>
                                            <button className="delete-button"></button>
                                            <img src={`../src/assets/img/dishes/${items.picture}.jpg`} className="food-image" alt='Imagem do Prato' />
                                            <p className='food-title'>{items.name}</p>
                                            <div className="item-price-container"><p className='food-price'>R${items.value.toFixed(2).replace(".",",")}</p></div>
                                        </div>
                                        : ''
                                ))}
                            </div>
                        </div>
                    ))
                }
        </main>
        </>
    );
}