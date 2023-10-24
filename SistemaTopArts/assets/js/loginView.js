class LoginView{

    constructor(){
        this.inputUser = document.querySelector('#input-userName');
        this.inputPassword = document.querySelector('#input-password');
        this.buttonEnter = document.querySelector('#button-enter');
    }

    getFields()
    {
        return{
            user: this.inputUser.value,
            password: this.inputPassword.value,
        };
    }

    cleanInputs()
    {
        this.inputUser.value = '';
        this.inputPassword.value = '';
    }

}