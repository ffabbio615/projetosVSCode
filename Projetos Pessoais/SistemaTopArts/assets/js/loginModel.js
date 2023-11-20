class LoginModel{

    #password

    constructor(){
        this.user = '';
        this.#password = '';
    }

    set password (password){
        this.#password = password;
    }

    get password(){
        return this.#password;
    }

    checkAccount(){
        if(this.user === 'admin' && this.#password === 'admin'){
            return true;
        }
        else
        return false;
    }

}