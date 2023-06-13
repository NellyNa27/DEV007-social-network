export const login = (onNavigate) => {
  const homeDiv = document.createElement("div");
  homeDiv.textContent = "Bienvenido a login";
  const buttonHome = document.createElement("button");

  buttonHome.textContent = "regresar";

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
