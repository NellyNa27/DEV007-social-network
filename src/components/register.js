import { home } from "./home";
import { createUser } from "../lib/index";
import { registerWithGoogle } from "../lib/index";

export const register = (onNavigate) => {
  const homeDiv = document.createElement("div");
  homeDiv.textContent = "Bienvenido, registrate";
  const buttonHome = document.createElement("button");
  const buttonName = document.createElement("input");
  const buttonNewEmail = document.createElement("input");
  const buttonNewPassword = document.createElement("input");
  const buttonSignIn = document.createElement("button");
  const conditionsPassword = document.createElement("p");
  const buttonRegisterWithGoogle = document.createElement("button");

  // buttonName.value = "Nombre";
  buttonName.classList = "form";
  // buttonNewEmail.value = "Ingresar e-mail";
  buttonNewEmail.classList = "form";
  // buttonNewPassword.value = "Contraseña";
  buttonNewPassword.classList = "form";
  buttonNewPassword.type = "password";
  buttonSignIn.textContent = "Registrarse";
  buttonSignIn.classList = "buttons";
  buttonHome.textContent = "Regresar al inicio";
  buttonHome.classList = "buttons";
  buttonHome.addEventListener("click", () => onNavigate("/"));
  conditionsPassword.classList = "text";
  conditionsPassword.textContent =
    "La contraseña debe tener al menos 6 carácteres";
  buttonRegisterWithGoogle.classList = "buttonGoogle";
  buttonRegisterWithGoogle.textContent = "Registrarse con Google";

  buttonSignIn.addEventListener("click", () => {
    if (buttonNewEmail.value.includes("@") == false)
      return alert("Ingrese un correo válido");
    if (buttonNewPassword.value.length < 6)
      return alert("La contraseña debe tener al menos 6 caracteres");
    createUser(buttonNewEmail.value, buttonNewPassword.value).then(() => {
      // then se  determina qué hacer si se cumple la promesa, en este caso se debe seguir navegnafo en la spa(lo mandamos al inicio por ahora)
      alert("Usuario registrado con éxito");
      onNavigate("/wall");
    });
    createUser(buttonNewEmail.value, buttonNewPassword.value).catch((error) => {
      alert("Error al crear el usuario, intente de nuevo");
    });
  });

  buttonRegisteWithGoogle.addEventListener("click", () => {
    registerWithGoogle()
      .then(() => {
        onNavigate("/wall");
      })
      .catch((error) => {
        alert("Error al iniciar sesión, intente de nuevo");
      });
  });

  homeDiv.appendChild(buttonName);
  homeDiv.appendChild(buttonNewEmail);
  homeDiv.appendChild(buttonNewPassword);
  homeDiv.appendChild(buttonSignIn);
  homeDiv.appendChild(buttonHome);
  homeDiv.appendChild(conditionsPassword);
  homeDiv.appendChild(buttonRegisterWithGoogle);

  return homeDiv;
};
