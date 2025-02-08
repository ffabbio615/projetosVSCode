import { createContext, useState } from "react";

export const MenuContext = createContext();

export function MenuProvider({children}){

    const [menuItems, setMenuItems] = useState([
        {
            id: 1,
            name: "Salada Caesar com molho de alho",
            description: "Uma deliciosa salada com molho especial à base de alho",
            picture: "saladaCaesar",
            category: "Promos do dia",
            originalValue: 28.90,
            promoValue: 22.90,
            quantity: 0,
            isInPromo: true,
            isMainItem: true,
            isAdditional: false,
            acceptAditionals: true,
        },
        {
            id: 2,
            name: "Spaghetti pomodoro com espinafre",
            description: "",
            picture: "spaghettiPomodoro",
            category: "Promos do dia",
            originalValue: 28.90,
            promoValue: 22.90,
            quantity: 0,
            isInPromo: true,
            isMainItem: true,           
            isAdditional: false,
            acceptAditionals: true,
        },
        {
            id: 3,
            name: "Capi Chicken Assadão",
            description: "Nosso frango assado e douradinho, com nossa receita especial. Acompanha arroz integral, batata doce e feijão",
            picture: "capiChicken",
            category: "Frangos",
            originalValue: 44.00,
            promoValue: 0,
            quantity: 0,
            isInPromo: false,
            isMainItem: true,
            isAdditional: false,
            acceptAditionals: true,
        },
        {
            id: 4,
            name: "CapiWish com molho de iogurte",
            description: "Um sonho de sanduíche, com o molho mais leve que você já provou!",
            picture: "capiWish",
            category: "Frangos",
            originalValue: 26.90,
            promoValue: 0,
            quantity: 0,
            isInPromo: false,
            isMainItem: true,
            isAdditional: false,
            acceptAditionals: true,
        },
        {
            id: 5,
            name: "Super Waras com salada rústica",
            description: "Tiras de frango com muita salada. Acompanha molho de iogurte desnatado.",
            picture: "superWaras",
            category: "Frangos",
            originalValue: 55.00,
            promoValue: 0,
            quantity: 0,
            isInPromo: false,
            isMainItem: true,
            isAdditional: false,
            acceptAditionals: true,
        },
        {
            id: 6,
            name: "Guisado Especial Capiwaras",
            description: "Para você que terminou o treino e precisa de energia. Super calórico e balanceado com os macros que você precisa.",
            picture: "guisadoEspecial",
            category: "Frangos",
            originalValue: 64.90,
            promoValue: 0,
            quantity: 0,
            isInPromo: false,
            isMainItem: true,
            isAdditional: false,
            acceptAditionals: true,
        },
        {
            id: 7,
            name: "Suco de Melancia 300ml",
            description: "O suco mais refrescante do verão!",
            picture: "sucoMelancia",
            category: "Bebidas",
            originalValue: 11.90,
            promoValue: 0,
            quantity: 0,
            isInPromo: false,
            isMainItem: true,
            isAdditional: true,
            acceptAditionals: false,
        },
        {
            id: 8,
            name: "Suco de Laranja 300ml",
            description: "Nada melhor que um suco de laranja bem gelado!",
            picture: "sucoLaranja",
            category: "Bebidas",
            originalValue: 14.90,
            promoValue: 0,
            quantity: 0,
            isInPromo: false,
            isMainItem: true,
            isAdditional: true,
            acceptAditionals: false,
        },
        {
            id: 9,
            name: "Suco Fortificante 300ml",
            description: "Surpreenda-se e revigore-se com esse mix perfeito.",
            picture: "sucoFortificante",
            category: "Bebidas",
            originalValue: 19.90,
            promoValue: 0,
            quantity: 0,
            isInPromo: false,
            isMainItem: true,
            isAdditional: true,
            acceptAditionals: false,
        },
        {
            id: 10,
            name: "Água Mineral 510ml",
            description: "Água é vida. Hidrate-se!",
            picture: "aguaMineral",
            category: "Bebidas",
            originalValue: 8.00,
            promoValue: 0,
            quantity: 0,
            isInPromo: false,
            isMainItem: true,
            isAdditional: true,
            acceptAditionals: false,
        },
    ]);

    const [menuCategory, setMenuCategory] = useState([
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
        },
    ]);

    function addMenuItem(name, description, picture, category, originalValue, promoValue, isInPromo, isMainItem, isAdditional, acceptAditionals){
        const newId = menuItems[menuItems.length -1].id + 1;
        setMenuItems([...menuItems, {
            id: newId, 
            name: name, 
            description: description, 
            picture: picture, 
            category: category, 
            originalValue: originalValue, 
            promoValue: promoValue, 
            quantity: 0, 
            isInPromo: isInPromo, 
            isMainItem: isMainItem, 
            isAdditional: isAdditional, 
            acceptAditionals: acceptAditionals
            }]);
    }

    function editMenuItem(id, name, description, picture, category, originalValue, promoValue, isInPromo, isMainItem, isAdditional, acceptAditionals){
        setMenuItems((prevItems) => [
            ...prevItems.filter((item) => item.id !== id), 
            {
              id, 
              name, 
              description, 
              picture, 
              category, 
              originalValue, 
              promoValue, 
              quantity: 0, 
              isInPromo, 
              isMainItem, 
              isAdditional, 
              acceptAditionals
            }
          ]);
    }

    function deletedMenuItem(id){
        setMenuItems(menuItems.filter((items => (items.id !== id))));
    }

    function addMenuCategory(newCategory){
        const newId = menuCategory[menuCategory.length -1].id + 1;
        setMenuCategory([...menuCategory, { id: newId, category: newCategory, editMode: false }]);
    }

    function editMenuCategory(id)
    {
        const inputCategory = document.querySelector(`#input-edit-category${id}`).value;
        const getCategory = menuCategory.filter((category) => category.id === id ? category.category : '');
        setMenuItems(menuItems.map((item) => item.category === getCategory[0].category ? {...item, category: inputCategory} : item));
        setMenuCategory(menuCategory.map((category) => category.id === id ? {...category, category: inputCategory, editMode: false} : category));
    }

    function handleEditMode(id, active){
        setMenuCategory(menuCategory.map((category) => category.id === id ? {...category, editMode:active} : category));
    }

    function deletedMenuCategory(categoryId){
        const categoryName = menuCategory.filter((categoryName => (categoryName.id === categoryId)));
        setMenuItems(menuItems.filter((items => (items.category !== categoryName[0].category))));
        setMenuCategory(menuCategory.filter((categoryItems => (categoryItems.id !== categoryId))));
    }

return(
    <MenuContext.Provider value={{menuItems, menuCategory, addMenuItem, editMenuItem, addMenuCategory, editMenuCategory, handleEditMode, deletedMenuItem, deletedMenuCategory}}>
        {children}
    </MenuContext.Provider>
);
}