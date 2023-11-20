// const CPF = '136.446.637-69';
// let CPFLimpo = CPF.replace(/\D+/g, '');

function ValidaCPF(cpfEnviado)
{
    Object.defineProperty(this, 'cpfLimpo', {
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.numerosiguais() === true) return false; 
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    // console.log("Novo CPF: " + novoCpf);
    // console.log("CPF limpo: " + this.cpfLimpo);
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.numerosiguais = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let contador = cpfArray.length +1;
    let total = cpfArray.reduce((acumulador, valorDaChaveDoArray) => {
        acumulador += (contador * Number(valorDaChaveDoArray));
        contador--;
        return acumulador;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

// const CPF = new ValidaCPF('136.446.637-69');
const CPF = new ValidaCPF('136.446.637-69');
console.log(CPF.valida());


//1x 3x 6x 4x 4x 6x 6x 3x 7x
//10 9  8  7  6  5  4  3  2
//10 27 48 28 24 30 24 9  14 = 214   (214 % 11 = 5)