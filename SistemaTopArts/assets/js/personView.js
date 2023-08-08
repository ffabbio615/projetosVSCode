class PersonView{
    constructor(){
        this.inputName = document.getElementById('input-name');
        this.inputLastName = document.getElementById('input-lastName');
        this.inputPhoneNumber = document.getElementById('phone-number');
        this.inputCpf = document.getElementById('input-cpf');
        this.inputDob = document.getElementById('input-dob');
        this.inputGender = document.getElementById('input-gender');
        this.inputEmail = document.getElementById('input-email');
        this.inputPassword = document.getElementById('input-password');
    }

getFields()
{
    return{
        name: this.inputName,
        lastName : this.inputLastName,
        phoneNumber: this.inputPhoneNumber,
        cpf: this.inputCpf,
        dob: this.dob,
        gender: this.gender,
        email: this.email,
        password: this.password,
    };
}

cleanInputs(){
    this.inputName.value = '';
    this.inputLastName.value = '';
    this.inputPhoneNumber.value = '';
    this.inputCpf.value = '';
    this.inputDob.value = '';
    this.inputGender.value = '';
    this.inputEmail.value = '';
    this.inputPassword.value = '';
}

}
