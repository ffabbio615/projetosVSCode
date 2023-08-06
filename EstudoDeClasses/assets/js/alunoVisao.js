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
        sobrenome: this.sobrenome.value,
        endereco: this.endereco.value,
        matricula: this.matricula.value,
        turma: this.inputTurma.value,
        serie: this.inputSerie.value,
      };
    }
  
    bindAdicionarAluno(handler) {
        this.adicionarButton.addEventListener('click', () => {
        const inputs = this.getInputs();
        handler(inputs);
        this.limparInputs();
      });
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