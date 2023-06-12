export const register = () => {
  const homeDiv = document.createElement ("div");
  buttonHome.textContent = "Bienvenido, registrate";
  const buttonHome =document.createElement ("button");

  buttonHome.textContent = "regresar";
  buttonHome.ddEventListener("click", () => onNavigate("./"));

  homeDiv.appendChild(buttonHome);
  
  return (homeDiv)

}