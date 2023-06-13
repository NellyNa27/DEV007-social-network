export const login = (onNavigate) => {
  const homeDiv = document.createElement("div");
  homeDiv.textContent = "Bienvenido a login";
  const buttonHome = document.createElement("button");

  buttonHome.textContent = "Regresar al inicio";
  buttonHome.addEventListener("click", () => onNavigate("/"));
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
