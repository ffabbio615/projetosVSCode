// Nome
// Sobrenome
// Tel
// CPF
// Data de nascimento
// gênero
// e-mail
// nome de usuário
// senha
// nível da conta
//moedas grátis
//moedas premium

//Relacionado a classe artes:
// artes enviadas
// artes obtidas

class PersonModel{
    #accountLvl;
    #freeCoins;
    #premiumCoins;
    #updatedArts;
    #obtainedArts;

    constructor(){
        this.name = '';
        this.lastName = '';
        this.phoneNumber = '';
        this.cpf = '';
        this.dob = '';
        this.gender = '';
        this.userName = '';
        this.email = '';
        this.password = '';
        this.#accountLvl = '';
        this.#freeCoins = '';
        this.#premiumCoins = '';
        this.#updatedArts = [];
        this.#obtainedArts = [];
    }

    set accountLvl(level){
        this.#accountLvl = level;
    }

    get accountLvl(){
        return this.#accountLvl;
    }

    set freeCoins(coins){
        this.#freeCoins = coins;
    }

    get freeCoins(){
        return this.#freeCoins;
    }

    set premiumCoins(coins){
        this.#premiumCoins = coins;
    }

    get premiumCoins(){
        return this.#premiumCoins;
    }

    set updatedArts(arts){
        this.#updatedArts = arts;
    }

    get updatedArts(){
        return this.#updatedArts;
    }

    set obtainedArts(arts){
        this.#obtainedArts = arts;
    }

    get obtainedArts(){
        return this.#obtainedArts;
    }

}