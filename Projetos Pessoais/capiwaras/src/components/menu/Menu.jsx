import { useContext } from 'react';
import './Menu.scss';
import useConfirmBox from "../modal/useConfirmBox";
import { Link, useNavigate } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext';

export default function Menu(){

    const { menuItems, menuCategory, editMenuCategory, handleEditMode, deletedMenuItem, deletedMenuCategory } = useContext(MenuContext);
    const { ConfirmBoxComponent, confirm } = useConfirmBox();
    const navigate = useNavigate();

    function editedItemMenu(id){
        navigate(`/menu/edit-item/${id}`);
    }

    function handleDeleteMenuItem(id){
        confirm("Tem certeza que deseja excluir esse item?", () => {
            console.log("Item excluído!");
                deletedMenuItem(id);   
            });
    }

    function deletemenuCategory(id){
        confirm("Tem certeza que deseja excluir essa categoria?", () => {
            console.log("Item excluído!");
                deletedMenuCategory(id); 
            });
    }

    return(
        <>
        {ConfirmBoxComponent}
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
                    menuCategory.map((category) => (
                        <div key={category.id} className="menu-items-container">
                            <div className="food-category-container">
                                <p className="category-title">{category.category}
                                    {category.category !== "Promos do dia" ?
                                        <>
                                            <button onClick={()=> handleEditMode(category.id, true)} className="edit-button"></button>
                                            <button onClick={()=> deletemenuCategory(category.id)} className="delete-button"></button>
                                        </>
                                        : <></>
                                    }

                                </p>
                                {
                                    category.editMode ?
                                    <div className='edit-category-container'>
                                        <input id={`input-edit-category${category.id}`} type='text' placeholder='Digite nova categoria' />
                                        <button onClick={()=> editMenuCategory(category.id)} className='edit-small-button'>Alterar</button>
                                        <button onClick={()=> handleEditMode(category.id, false)} className='remove-small-button'>Cancelar</button>
                                    </div>
                                    : <></>
                                }
                            </div>
                            <div className="food-items-container">
                                {menuItems.map((items) => (
                                    items.category === category.category ?
                                        <div key={items.id} className='food-option-menu'>
                                            <button onClick={()=> editedItemMenu(items.id)} className="edit-button"></button>
                                            <button onClick={()=> handleDeleteMenuItem(items.id)} className="delete-button"></button>
                                            <img src={`../src/assets/img/dishes/${items.picture}.jpg`} className="food-image" alt='Imagem do Prato' />
                                            <p className='food-title'>{items.name}</p>
                                            <div className="item-price-container"><p className='food-price'>R${items.promoValue >0 ? items.promoValue.toFixed(2).replace(".",",") : items.originalValue.toFixed(2).replace(".",",")}</p></div>
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