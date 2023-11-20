class LoginController{

    constructor(loginModel, loginView)
    {
        this.loginModel = loginModel;
        this.loginView = loginView;
        this.doLogin();
    }

    doLogin(){
        this.loginView.buttonEnter.addEventListener('click', e=>{
            e.preventDefault();
            if(this.loginView.inputUser.value !== ''  && this.loginView.inputPassword.value !== '')
            {
                Object.assign(this.loginModel, this.loginView.getFields());
                if(loginModel.checkAccount()){
                    //window.open('https://www.facebook.com', '_blank');
                    window.open('./sta.html', '_self');
                }
                else{
                    this.errorMessage(this.loginView.inputPassword, 'Dados de usuário não encontrados.');
                    this.loginView.cleanInput();
                }
            }
            else{
                this.errorMessage(this.loginView.inputPassword, 'Os campos devem ser preenchidos.');
            }
        });
    }

    errorMessage(field, message) {
        const parentDiv = field.parentNode;
        const allErrorsDivs = parentDiv.getElementsByClassName('errorDiv');
        for(let i = 0; i<allErrorsDivs.length; i++){
            if(allErrorsDivs[i].innerHTML==='')
            parentDiv.removeChild(allErrorsDivs[i]);
        }
        if (!document.querySelector(`#${field.id}Message`)) {
            const div = document.createElement('div');
            div.className = 'errorDiv';
            div.id = `${field.id}Message`;
            parentDiv.appendChild(div);
        }else document.querySelector(`#${field.id}Message`).innerHTML = '';
        const p = document.createElement('p');
        p.textContent = message;
        p.className = 'errorMessage';
        document.querySelector(`#${field.id}Message`).appendChild(p);
    }

}

const loginModel = new LoginModel();
const loginView = new LoginView();
const loginController = new LoginController(loginModel, loginView);