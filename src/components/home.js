//export para tenerlo accesible, se crean los botones de acceso: registro e inicio sesión
//onNavigate, se crea por parametro y argumento.
export const home = (onNavigate) => {
  const homeDiv = document.createElement("div");
  const buttonLogin = document.createElement("button");
  const buttonRegister = document.createElement("button");
  const buttonGoogle = document.createElement("img");


  buttonRegister.textContent = "Regístrate";
<<<<<<< HEAD
  buttonRegister.classList = "buttons";
  buttonGoogle.src = "/images/btngo2.png";
  buttonGoogle.classList = "buttonGoogle";
=======
  buttonRegister.classList = "buttonsHome";
  buttonLogin.textContent = "Inicia Sesión";
  buttonLogin.classList = "buttonsHome";
  buttonGoogle.classList = "logoG";
  buttonGoogle.src = "/images/btngo2.png";
  
  
>>>>>>> 1117cff1b2bcb87d0366794a5a7839d9522102cb
  buttonLogin.addEventListener("click", () => onNavigate("/login"));
  buttonRegister.addEventListener("click", () => onNavigate("/register"));


  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonGoogle);
  
  return homeDiv;
};
