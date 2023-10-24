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
            if(this.loginView.value !== ''  && this.loginView.value !== '')
            {
                Object.assign(this.loginModel, this.loginView.getFields());
                if(loginModel.checkAccount()){
                    alert('Entrou no sistema');
                    //window.open('https://www.facebook.com', '_blank');
                    window.open('./sta.html', '_self');
                }
                else{
                    alert('Não entrou no sistema');
                    this.loginView.cleanInputs();
                }
            }
        });
    }
}

const loginModel = new LoginModel();
const loginView = new LoginView();
const loginController = new LoginController(loginModel, loginView);