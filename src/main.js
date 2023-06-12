// Este es el punto de entrada de tu aplicacion
//import { myFunction } from './lib/index.js';
//myFunction();

import { home } from "./components/home";
import { register } from "./components/register";
import { login } from "./components/login";

const rootDiv = document.getElementById("root");

const routes = {
  "/": home,
  "/register": register,
  "/login": login,
};

//PARA RENDERIZAR EN SPA PACKAGE.JSON
//"start":"serve src/ -s"         "start": "npm run dev",

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname, 
    window.location.origin + pathname,
    );
    
  while(rootDiv.firstChild){
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild = (routes[pathname]());
};
const component = routes[window.location.pathname];
rootDiv.appendChild(component());
