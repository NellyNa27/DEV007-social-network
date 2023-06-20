//export para tenerlo accesible, se crean los botones de acceso: registro e inicio sesión

export const home = (onNavigate) => {
  const homeDiv = document.createElement("div");
  const buttonLogin = document.createElement("button");
  const buttonRegister = document.createElement("button");
  const buttonGoogle = document.createElement("img");


  buttonLogin.textContent = "Inicia Sesión";
  buttonLogin.classList = "buttons";
  buttonRegister.textContent = "Regístrate";
  buttonRegister.classList = "buttons";
  buttonGoogle.src = "/images/btngo2.png";
  buttonGoogle.classList = "buttonGoogle";
  buttonLogin.addEventListener("click", () => onNavigate("/login"));

  buttonRegister.addEventListener("click", () => onNavigate("/register"));

  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonGoogle);
  
  return homeDiv;
};
