//export para tenerlo accesible, se crean los botones de acceso: registro y 


//////import { onNavigate } from "../main";

export const home = () => {
  const homeDiv = document.createElement("div");
  const buttonRegister = document.createElement("button");
  const buttonLogin = document.createElement("button");

  buttonRegister.textContent = "Registrate";
  buttonLogin.textContent = "Inicia Sesión";

  buttonRegister.addEventListener("click", () => onNavigate("./register"));

  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);

  return homeDiv;
};
