export const Home = (onNavigate) =>{
const HomeDiv = document.createElement('div');
const buttonLogin = document.createElement('button');
buttonLogin.textContent = 'Inicia Sesión';


HomeDiv.innerHTML +=
<input id="input_email" placeholder = "Correo electronico" type="email"></input>;
<input id="input_password" placeholder = "Contraseña" type="pasword"></input>;

const inputEmail=HomeDiv.querySelector("#input_email");
const inputPasword=HomeDiv.querySelector("#input_password");

buttonLogin.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(inputEmail.value, inputPasword.value)
});

HomeDiv.appenChild(buttonLogin);
return HomeDiv

}