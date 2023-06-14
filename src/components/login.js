import { home } from "./home";
// import { createUser } from "../lib/index";
//se crea la ruta
export const login = (onNavigate) => {
  //se crean los elementos de HTML para insertar
  const homeDiv = document.createElement("div");
  homeDiv.textContent = "Email";
  const buttonHome = document.createElement("button");
  const buttonEmail = document.createElement("input");
  const buttonPassword = document.createElement("input");
  const buttonLogIn = document.createElement("button");
  const buttonForgotPassword = document.createElement("button");
  const buttonLogInGoogle = document.createElement("button");
  //se da características de HTML como valor, id,clase, tipo
  buttonEmail.value = "Correo";
  buttonEmail.id = "email";
  buttonEmail.classList = "form";
  buttonEmail.type = "email";
  buttonPassword.value = "Contraseña";
  buttonPassword.classList = "form";
  buttonPassword.type = "password";
  buttonPassword.id = "password";
  buttonLogIn.textContent = "Iniciar Sesión";
  buttonLogIn.classList = "buttons";
  buttonForgotPassword.textContent = "¿Olvidaste tu contraseña?";
  buttonForgotPassword.classList = "buttons";
  buttonHome.textContent = "Regresar al inicio";
  buttonHome.classList = "buttons";
  buttonLogInGoogle.textContent = "Iniciar Sesión con Google";
  buttonLogInGoogle.classList = "buttonGoogle";
  //se crea ruta para volver al inicio
  buttonHome.addEventListener("click", () => onNavigate("/"));

  console.log(buttonEmail.value);

  // se llama el valor de los input

  //  const textEmail = homeDiv.querySelector(#email);
  //    const textPassword = homeDiv.querySelector(#password);
  //   buttonLogIn.addEventListener("click", (e) =>{ e.preventDefault();
  //   createUser(textEmail.value, textPassword.value);
  //   });

  //se insertan los elementos en el HTML padre(root)
  homeDiv.appendChild(buttonEmail);
  homeDiv.appendChild(buttonPassword);
  homeDiv.appendChild(buttonLogIn);
  homeDiv.appendChild(buttonForgotPassword);
  homeDiv.appendChild(buttonLogInGoogle);
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
