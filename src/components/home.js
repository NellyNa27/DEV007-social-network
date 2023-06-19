//export para tenerlo accesible, se crean los botones de acceso: registro e inicio sesión

export const home = (onNavigate) => {
  const homeDiv = document.createElement("div");
  const buttonLogin = document.createElement("button");
  const buttonRegister = document.createElement("button");
  const buttonGoogle = document.createElement("button");

  buttonLogin.textContent = "Inicia Sesión";
  buttonLogin.classList = "buttons";
  buttonRegister.textContent = "Regístrate";
  buttonRegister.classList = "buttons";
  buttonGoogle.textContent = "Iniciar Sesión con Google";
  buttonGoogle.classList = "buttonGoogle";
  buttonLogin.addEventListener("click", () => onNavigate("/login"));

  buttonRegister.addEventListener("click", () => onNavigate("/register"));

  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonGoogle);
  return homeDiv;
};
