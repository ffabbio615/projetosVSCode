class PersonController{

    constructor(model, view)
    {
        this.model = model;
        this.view = view;
        this.countNext = 0;
        this.answerCountNext = 0;
        this.nextFields();
        this.previousFields();
        this.registerUser();
        this.cpfLimpo;
        this.novoCPF;
    }

    registerUser() {
        this.view.buttonRegister.addEventListener('click', e => {
            e.preventDefault();
            if (this.verifyFields()) {
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
            }
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

    nextFields() {
        this.view.buttonNext.addEventListener('click', e => {
            e.preventDefault();

            if (this.countNext >= 0 && this.countNext < 3) {
                if (this.verifyFields()) {
                    this.countNext++;
                    document.getElementById(`form-div${this.countNext}`).classList = "centerContentDiv invisible";
                    document.getElementById(`form-div${this.countNext + 1}`).classList = "centerContentDiv";
                    if (this.countNext == 1) { document.getElementById('button-previous').classList = "commonButton blackTitle"; }
                    if (this.countNext == 3) {
                        document.getElementById('button-next').classList = "commonButton blackTitle invisible";
                        document.getElementById('button-register').classList = "commonButton blackTitle";
                    }
                    this.changeTextInformations(this.countNext);
                }
            }
        });
    }

    verifyFields(){
        let errorsDiv = document.querySelectorAll('.errorDiv');
        errorsDiv.forEach(function(element){element.innerHTML = '';});
        if(this.countNext == 0){
            if(this.view.inputName.value == ''){
                this.errorMessage(this.view.inputName, 'Campo "Nome" não pode ficar em branco.');
                this.answerCountNext =1;
            }
            if(this.view.inputLastName.value == ''){
                this.errorMessage(this.view.inputLastName, 'Campo "Sobrenome" não pode ficar em branco.');
                this.answerCountNext =1;
            }
        }
        else if(this.countNext == 1){
            const day = parseInt(document.querySelector('#input-day').value);
            const month = parseInt(document.querySelector('#input-month').value);
            const year = parseInt(document.querySelector('#input-year').value);
            const date = new Date();
            const currentYear = date.getFullYear();

            //0 1JAN 2FEV 3MAR 4ABR 5MAI 6JUN 7JUL 8AGO 9SET 10OUT 11NOV 12DEZ
            if(isNaN(day) || isNaN(month) || isNaN(year) || day > 31 || day<=0 || month == 0 || year < (currentYear-100) || year > (currentYear) ||
                day == 31 && month == 2 || day == 30 && month == 2 || day == 29 && month == 2 && year != currentYear%4 || 
                day == 31 && month == 4 || day == 31 && month == 6 || day == 31 && month == 9 || day == 31 && month == 11){
                this.errorMessage(document.querySelector('#input-year'), 'Data de nascimento inválida!');
                this.view.inputDob.value = '';
                this.answerCountNext =1;
            }else{
                this.view.dateToDob();
            }
            
            if(this.view.inputGender.value == '0'){
                this.errorMessage(this.view.inputGender, 'Gênero inválido!');
                this.answerCountNext =1;
            }

        }
        else if(this.countNext == 2){
            const cpf = this.view.inputCpf;
            if(this.view.inputPhoneNumber.value.length != 11){
                this.errorMessage(this.view.inputPhoneNumber, 'Informe um número de celular.');
                this.answerCountNext =1;
            }
            if(cpf.value == ''){
                this.errorMessage(this.view.inputCpf, 'Informe seu CPF.');
                this.answerCountNext =1;
            }else{
                if(!this.validaCPF(cpf)){
                    this.errorMessage(this.view.inputCpf, 'CPF incorreto!');
                    this.answerCountNext =1;
                }
            }
            if(this.view.inputEmail.value == ''){
                this.errorMessage(this.view.inputEmail, 'Digite seu e-mail.');
                this.answerCountNext =1;
            }
        }

        else if(this.countNext == 3){
            const userName = this.view.inputUserName.value;
            const password = this.view.inputPassword.value;
            const cpassword = document.querySelector('#input-cpassword');
            const terms = document.querySelector('#input-terms');
            if(this.view.inputUserName.value == '' || userName.length < 5){
                this.errorMessage(this.view.inputUserName, 'Seu nome de usuário deve conter no mínimo 5 caracteres.');
                this.answerCountNext =1;
            }
            if(this.view.inputPassword.value == '' || password.length < 8){
                this.errorMessage(cpassword, 'Sua senha deve conter no mínimo 8 caracteres.');
                this.answerCountNext =1;
            }
            if(cpassword.value == ''){
                this.errorMessage(cpassword, 'Você deve confirmar a sua senha.');
                this.answerCountNext =1;
            }
            if(this.view.inputPassword.value != cpassword.value){
                this.errorMessage(cpassword, 'Os campos SENHA e CONFIRMAR devem ser iguais.');
                this.answerCountNext =1;
            }
            if(!terms.checked){
                this.errorMessage(terms, 'Você precisa concordar com os termos de uso.');
                this.answerCountNext =1;
            }
        }
        if(this.answerCountNext == 1)
        {
            this.answerCountNext = 0;
            return false;
        }
        return true;
    }


    errorMessage(field, message) {
        const parentDiv = field.parentNode;
        if (!document.querySelector(`#${field.id}Message`)) {
            const div = document.createElement('div');
            div.className = 'errorDiv';
            div.id = `${field.id}Message`;
            parentDiv.appendChild(div);
        }else document.querySelector(`#${field.id}Message`).innerHTML = '';
        const p = document.createElement('p');
        p.textContent = message;
        p.className = 'errorMessage';
        document.querySelector(`#${field.id}Message`).appendChild(p);
    }


    //MÉTODOS CPF
    éSequência() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
}

    geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = this.geraDigito(cpfSemDigitos);
    const digito2 = this.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
}

    geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
        total += reverso * Number(stringNumerica);
        reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
    }

    validaCPF(cpf) {
        this.cpfLimpo = cpf.value.replace(/\D+/g, '');
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.éSequência()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }


    fadeEffect(){
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
            headerFromDiv.children[1].textContent ="Insira o celular e o CPF (somente números), além de um e-mail válido";
        } else if(countNext ==3){
            headerFromDiv.children[0].textContent = "Autenticação e Segurança";
            headerFromDiv.children[1].textContent = "Informe um nome de usuário e uma senha com no mínimo 8 caracteres";
        }
        headerFromDiv.children[0].className = "blackTitle centerContentH";
        headerFromDiv.children[1].className = "regularBody centerContentH";
        document.getElementById('form-div-buttons').classList = "centerContentDiv centerContentH";
        document.getElementById('button-previous').disabled = true;
        document.getElementById('button-next').disabled = true;
        document.getElementById('button-register').disabled = true;
        setTimeout(this.fadeEffect,2100);
    }
}

const personModel = new PersonModel();
const personView = new PersonView();
const personController = new PersonController(personModel, personView);