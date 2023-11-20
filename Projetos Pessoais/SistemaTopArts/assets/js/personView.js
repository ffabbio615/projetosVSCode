class PersonView{
    constructor(){
        this.inputName = document.getElementById('input-name');
        this.inputLastName = document.getElementById('input-lastName');
        this.inputPhoneNumber = document.getElementById('input-phoneNumber');
        this.inputCpf = document.getElementById('input-cpf');
        this.inputDob = document.getElementById('input-dob');
        this.inputGender = document.getElementById('input-gender');
        this.inputEmail = document.getElementById('input-email');
        this.inputUserName = document.getElementById('input-userName')
        this.inputPassword = document.getElementById('input-password');
        this.freeCoins = document.getElementById('input-freeCoins');
        this.buttonRegister = document.getElementById('button-register');
        this.buttonNext = document.getElementById('button-next');
        this.buttonPrevious = document.getElementById('button-previous');
    }

    dateToDob()
    {
        const day = document.getElementById('input-day');
        const month = document.getElementById('input-month');
        const year = document.getElementById('input-year');
        if(month.value <10)
        {
            this.inputDob.value = `${day.value}/0${month.value}/${year.value}`;
        }
        else{
            this.inputDob.value = `${day.value}/${month.value}/${year.value}`;
        }
    }

getFields()
{
    return{
        name: this.inputName.value,
        lastName : this.inputLastName.value,
        phoneNumber: this.inputPhoneNumber.value,
        cpf: this.inputCpf.value,
        dob: this.inputDob.value,
        gender: this.inputGender.value,
        userName: this.inputUserName.value,
        email: this.inputEmail.value,
        password: this.inputPassword.value,
        accountLvl: "Free",
        freeCoins: this.freeCoins.value,
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
    this.inputUserName.value = '';
    this.inputPassword.value = '';
}

}
