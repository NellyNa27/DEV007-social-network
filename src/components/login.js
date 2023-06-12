export const login = () => {
  const homeDiv = document.createElement ("div");
  buttonHome.textContent = "Bienvenido a login";
  const buttonHome =document.createElement ("button");

  buttonHome.textContent = "regresar";

  homeDiv.appendChild(buttonHome);
  
  return (homeDiv)

}