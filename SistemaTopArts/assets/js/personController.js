class PersonController{

    constructor(model, view)
    {
        this.model = model;
        this.view = view;
        this.countNext = 0;
        this.nextFields();
        this.previousFields();
        this.registerUser();
    }

    registerUser() {
        this.view.buttonRegister.addEventListener('click', e => {
            e.preventDefault();
            this.view.dateToDob();
            Object.assign(this.model, this.view.getFields());
            this.view.cleanInputs();
            const headerFromDiv = document.getElementById('header-form-div');
            headerFromDiv.children[0].textContent = "Cadastro Realizado!";
            const link = document.createElement("a");
            link.textContent = "AQUI";
            link.href = "./login.html";
            link.className = "regularBody";
            headerFromDiv.children[1].className = "textMessageDiv";
            headerFromDiv.children[1].innerHTML = "Clique "; 
            headerFromDiv.children[1].appendChild(link);
            headerFromDiv.children[1].innerHTML += " para retornar e logar no sistema";
            document.getElementById(`form-div${this.countNext+1}`).classList = "centerContentDiv invisible";
            document.getElementById('button-register').classList = "commonButton blackTitle invisible";
            document.getElementById('button-previous').classList = "commonButton blackTitle invisible";
            this.changeTextInformations(5);
        });
    }

    previousFields(){
        this.view.buttonPrevious.addEventListener('click', e=>{
            e.preventDefault();
            if(this.countNext ==3){
                document.getElementById('button-next').classList = "commonButton blackTitle";
                document.getElementById('button-register').classList = "commonButton blackTitle invisible";
            }
            if (this.countNext>0){
                this.countNext --;
                document.getElementById(`form-div${this.countNext+2}`).classList = "centerContentDiv invisible";
                document.getElementById(`form-div${this.countNext+1}`).classList = "centerContentDiv";
                if(this.countNext ==0){document.getElementById('button-previous').classList = "commonButton blackTitle invisible";}
            }
            this.changeTextInformations(this.countNext);
        });
    }

    nextFields(){
        this.view.buttonNext.addEventListener('click', e =>{
            e.preventDefault();
            if(this.countNext >=0 && this.countNext<3){
                this.countNext ++;
                document.getElementById(`form-div${this.countNext}`).classList = "centerContentDiv invisible";
                document.getElementById(`form-div${this.countNext+1}`).classList = "centerContentDiv";
                if(this.countNext ==1){document.getElementById('button-previous').classList = "commonButton blackTitle";}
                if(this.countNext ==3){
                    document.getElementById('button-next').classList = "commonButton blackTitle invisible";
                    document.getElementById('button-register').classList = "commonButton blackTitle";
                }
                this.changeTextInformations(this.countNext);
            }
        });
    }

    moveToLeft(){
        const headerFromDiv = document.getElementById('header-form-div');
        headerFromDiv.children[0].className = "blackTitle";
        headerFromDiv.children[1].className = "regularBody";
        document.getElementById('form-div-buttons').classList = "centerContentDiv";
        document.getElementById('button-previous').disabled = false;
        document.getElementById('button-next').disabled = false;
        document.getElementById('button-register').disabled = false;
    }

    changeTextInformations(countNext){
        const headerFromDiv = document.getElementById('header-form-div');
        if(countNext ==0){
            headerFromDiv.children[0].textContent = "Registro na Top Artes";
            headerFromDiv.children[1].textContent ="Insira seu nome abaixo:";
        }else if(countNext ==1){
            headerFromDiv.children[0].textContent = "Informações Iniciais";
            headerFromDiv.children[1].textContent ="Insira sua data de nascimento e gênero";
        } else if(countNext ==2){
            headerFromDiv.children[0].textContent = "Dados Pessoais e Contato";
            headerFromDiv.children[1].textContent ="Insira um número de celular, um CPF e um e-mail válidos";
        } else if(countNext ==3){
            headerFromDiv.children[0].textContent = "Autenticação e Segurança";
            headerFromDiv.children[1].textContent ="Insira como quer ser chamado e uma senha forte com letras, símbolos e números";
        }
        headerFromDiv.children[0].className = "blackTitle centerContentH";
        headerFromDiv.children[1].className = "regularBody centerContentH";
        document.getElementById('form-div-buttons').classList = "centerContentDiv centerContentH";
        document.getElementById('button-previous').disabled = true;
        document.getElementById('button-next').disabled = true;
        document.getElementById('button-register').disabled = true;
        setTimeout(this.moveToLeft,2100);
    }
}

const personModel = new PersonModel();
const personView = new PersonView();
const personController = new PersonController(personModel, personView);