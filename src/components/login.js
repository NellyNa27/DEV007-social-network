import { logIn } from "../lib/index";
import { home } from "./home";
import { recoverPassword } from "../lib/index";
import { registerWithGoogle } from "../lib/index";

//se crea la ruta

export const login = (onNavigate) => {
  //se crean los elementos de HTML para insertar
  const homeDiv = document.createElement("div");
  const buttonHome = document.createElement("button");
  const inputEmail = document.createElement("input");
  const inputPassword = document.createElement("input");
  const inputRevealPassword = document.createElement("img");
  const buttonLogIn = document.createElement("button");
  const buttonForgotPassword = document.createElement("button");
  const buttonLogInGoogle = document.createElement("img");

  //se da características de HTML como valor, id,clase, tipo

  inputEmail.id = "email";
  inputEmail.placeholder = "CORREO";
  inputEmail.classList = "form";
  inputEmail.type = "email";
  inputPassword.classList = "form";
  inputPassword.placeholder = "CONTRASEÑA";
  inputPassword.type = "password";
  inputPassword.id = "password";
  buttonLogIn.textContent = "Iniciar Sesión";
  buttonLogIn.classList = "buttons";
  buttonForgotPassword.textContent = "¿Olvidaste tu contraseña?";
  buttonForgotPassword.classList = "buttons";
  buttonHome.textContent = "Regresar al inicio";
  buttonHome.classList = "buttons";
  buttonLogInGoogle.classList = "logoG";
  buttonLogInGoogle.src = "images/btngo2.png";
  inputRevealPassword.src = "images/openEye.png";
  inputRevealPassword.classList = "eyeButton";

  //se crea ruta para volver al inicio

  buttonHome.addEventListener("click", () => onNavigate("/"));

  // se llama el valor de los input

  // const textEmail = homeDiv.getElementById("email");
  // const textPassword = homeDiv.getElementById("password");
  inputRevealPassword.addEventListener("click", () => {
    if (inputPassword.type == "password") {
      inputPassword.type = "text";
    } else {
      inputPassword.type = "password";
    }
  });

  buttonLogIn.addEventListener("click", () => {
    logIn(inputEmail.value, inputPassword.value)
      .then(() => {
        alert("Bienvenido");
        onNavigate("/wall");
      })
      .catch((error) => {
        alert("Error al iniciar sesión, intente de nuevo");
      });
  });
  //olvido contraseña
  buttonForgotPassword.addEventListener("click", () => {
    let emailReset = prompt("Ingrese su correo");
    recoverPassword(emailReset).then(() => {
      alert("Se ha enviado una nueva contraseña a su correo");
    });
  });

  //google
  buttonLogInGoogle.addEventListener("click", () => {
    registerWithGoogle()
      .then(() => {
        onNavigate("/wall");
      })
      .catch((error) => {
        alert("Error al iniciar sesión, intente de nuevo");
      });
  });

  //se insertan los elementos en el HTML padre(root)
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(inputRevealPassword);
  homeDiv.appendChild(buttonLogIn);
  homeDiv.appendChild(buttonForgotPassword);
  homeDiv.appendChild(buttonLogInGoogle);
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
