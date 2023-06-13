export const register = (onNavigate) => {
  const homeDiv = document.createElement("div");
  homeDiv.textContent = "Bienvenido, registrate";
  const buttonHome = document.createElement("button");

  buttonHome.textContent = "Regresar al inicio";
  buttonHome.addEventListener("click", () => onNavigate("/"));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
