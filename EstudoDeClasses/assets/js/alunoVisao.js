class AlunoView {
    constructor() {
        this.inputNome = document.getElementById('input-nome');
        this.inputSobrenome = document.getElementById('input-sobrenome');
        this.inputEndereco = document.getElementById('input-endereco');
        this.inputMatricula = document.getElementById('input-matricula');
        this.inputTurma = document.getElementById('input-turma');
        this.inputSerie = document.getElementById('input-serie');
        this.adicionarButton = document.getElementById('button-adicionar');
    }
  
    getInputs() {
      return {
        nome: this.inputNome.value,
        sobrenome: this.inputSobrenome.value,
        endereco: this.inputEndereco.value,
        matricula: this.inputMatricula.value,
        turma: this.inputTurma.value,
        serie: this.inputSerie.value,
      };
    }
  
    limparInputs() {
      this.inputNome.value = '';
      this.inputSobrenome.value = '';
      this.inputEndereco.value = '';
      this.inputMatricula.value = '';
      this.inputTurma.value = '';
      this.inputSerie.value = '';
    }
  }