import { logIn } from '../lib/index';
import { home } from './home';
import { recoverPassword } from '../lib/index';
import { registerWithGoogle } from '../lib/index';

//se crea la ruta

export const login = (onNavigate) => {
  //se crean los elementos de HTML para insertar
  const homeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogIn = document.createElement('button');
  const buttonForgotPassword = document.createElement('button');
  const buttonLogInGoogle = document.createElement('img');
  const inputRevealPassword = document.createElement('img');
  const email = document.createElement('p');
  const password = document.createElement('p');
  //se da características de HTML como valor, id,clase, tipo
  homeDiv.classList = 'div';
  email.textContent = 'EMAIL';
  email.classList = 'message';
  password.textContent = 'CONTRASEÑA';
  password.classList = 'message';
  inputEmail.id = 'email';
  inputEmail.classList = 'form';
  inputEmail.type = 'email';
  inputPassword.classList = 'form';
  inputPassword.type = 'password';
  inputPassword.id = 'password';
  buttonLogIn.textContent = 'Iniciar Sesión';
  buttonLogIn.classList = 'buttons';
  buttonForgotPassword.textContent = '¿Olvidaste tu contraseña?';
  buttonForgotPassword.classList = 'buttons';
  buttonHome.textContent = 'Regresar al inicio';
  buttonHome.classList = 'buttons';
  buttonLogInGoogle.classList = 'logoG';
  buttonLogInGoogle.src = 'images/btngo2.png';
  inputRevealPassword.src = 'images/openEye.png';
  inputRevealPassword.classList = 'eyeButton';

  //se crea ruta para volver al inicio

  buttonHome.addEventListener('click', () => onNavigate('/'));
  // const textEmail = homeDiv.getElementById("email");
  // const textPassword = homeDiv.getElementById("password");
  inputRevealPassword.addEventListener('click', () => {
    if (inputPassword.type == 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  });

  buttonLogIn.addEventListener('click', () => {
    if (inputEmail.value.includes('@') == false)
      return alert('Ingrese un correo válido');
    if (inputPassword.value.length < 6)
      return alert('La contraseña debe tener al menos 6 caracteres');
    logIn(inputEmail.value, inputPassword.value)
      .then(() => {
        alert('Bienvenido');
        onNavigate('/recommendations');
      })
      .catch((error) => {
        alert('Error al iniciar sesión, intente de nuevo');
      });
  });
  //olvido contraseña
  buttonForgotPassword.addEventListener('click', () => {
    let emailReset = prompt('Ingrese su correo');
    recoverPassword(emailReset).then(() => {
      alert('Se ha enviado una nueva contraseña a su correo');
    });
  });

  //google
  buttonLogInGoogle.addEventListener('click', () => {
    registerWithGoogle()
      .then(() => {
        onNavigate('/recommendations');
      })
      .catch((error) => {
        alert('Error al iniciar sesión, intente de nuevo');
      });
  });

  //se insertan los elementos en el HTML padre(root)
  homeDiv.appendChild(email);

  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(password);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(buttonForgotPassword);
  homeDiv.appendChild(inputRevealPassword);
  homeDiv.appendChild(buttonLogIn);
  homeDiv.appendChild(buttonLogInGoogle);
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
