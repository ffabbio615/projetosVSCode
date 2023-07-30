//Exercício de conta corrente e conta poupança com transferência entre ambas
//Conta> Conta, Agência, Limite | depositar(), sacar()
//Conta Corrente | Conta Poupança

function Conta(agencia, conta, saldo)
{
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.depositar = function (valor){ this.saldo += valor; this.exibirSaldo();}
Conta.prototype.sacar = function (valor){}
Conta.prototype.exibirSaldo = function (){console.log(`Seu saldo é de: R$${this.saldo}`);}

//ORDEM: FAZER O CONSTRUTOR COM O CALL DE PAI, CRIAR UM NOVO OBJETO E ATRIBUIR OS MÉTODOS PROTOTYPE NO NOVO CONSTRUTOR
//DIZER QUE ESSE NOVO CONSTRUTOR TEM TAMBÉM SEU PRÓPRIO PROTOTYPE
function CC (agencia, conta, saldo, limite)
{ Conta.call(this, agencia,conta,saldo); //É tipo o super de java
    this.limite = limite; }

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if (valor>this.saldo + this.limite)
    {
        console.log ("Saldo insuficiente para saque.")
        return;
    }
    else{
        this.saldo -= valor;
        console.log(`Você acabou de sacar ${valor}.`);
        this.exibirSaldo();
    }
}

function CP (agencia, conta, saldo)
{
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

CP.prototype.sacar = function(valor){
    if(valor>this.saldo){
        console.log(`Você não possui limite para o valor de R$${valor}.`)
        this.exibirSaldo();
        return;
    }
    else{
        this.saldo -= valor;
        console.log(`Você acabou de sacar ${valor}.`);
        this.exibirSaldo();
    }
}

const cc = new CC(9162, 227579, 100, 500);
cc.sacar(200);
cc.sacar(350);
cc.depositar(5);
cc.sacar(55);

const cp = new CP (6192, 22328,300);
cp.sacar(300);