class LoginModel{

    #password

    constructor(){
        this.user = '';
        this.#password = '';
        // this.knex = require('../db/connection');
    }

    set password (password){
        this.#password = password;
    }

    get password(){
        return this.#password;
    }

    checkAccount() {

        // knex('users').select('usuario', 'senha')
        //     .where('usuario', '=', this.user)
        //     .andWhere('senha', '=', this.#password)
        //     .then(() => {
        //         return true;
        //     })
        //     .catch(() => {
        //         return false;
        //     })
        //     .finally(() => {
        //         this.knex.destroy();
        //     });
        if (this.user === 'admin' && this.#password === 'admin') {
            return true;
        }
        else
            return false;
    }

}