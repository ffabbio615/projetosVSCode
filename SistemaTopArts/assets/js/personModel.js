// Nome
// Sobrenome
// Tel
// CPF
// Data de nascimento
// gênero
// e-mail
// senha
// nível da conta
//moedas grátis
//moedas premium
//Relacionado a classe artes:
// artes enviadas
// artes obtidas

class PersonModel{
    constructor(){
        this.name = '';
        this.lastName = '';
        this.phoneNumber = '';
        this.cpf = '';
        this.dob = '';
        this.gender = '';
        this.email = '';
        this.password = '';
        this.accountLvl = '';
        this.freeCoins = '';
        this.premiumCoins = '';
        this.updatedArts = [];
        this.obtainedArts = [];
    }






}

const pessoa = new PersonModel();
pessoa.name = 'Fabio';
console.log (pessoa.name);