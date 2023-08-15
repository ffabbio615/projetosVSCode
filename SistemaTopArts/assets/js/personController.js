class PersonController{

    constructor(model, view)
    {
        this.model = model;
        this.view = view;
        this.registerUser();
    }

    registerUser(){
        this.view.buttonRegister.addEventListener('click', e =>{
        e.preventDefault();
        this.view.dateToDob();
        Object.assign(this.model, this.view.getFields());
        this.view.cleanInputs();
        alert('Cadastro realizado com sucesso!');
        });
    }


}

const personModel = new PersonModel();
const personView = new PersonView();
const personController = new PersonController(personModel, personView);