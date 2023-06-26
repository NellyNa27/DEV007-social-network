import { async } from "regenerator-runtime";
import { createPost } from "../lib";
import { QuerySnapshot } from "firebase/firestore";
import { doc } from "firebase/firestore";

export const recommendations = (onNavigate) => {
  const recommendationsDiv = document.createElement("div");
  const recommendationsTitle = document.createElement("h1");
  const postContent = document.createElement("input");
  const buttonPost = document.createElement("button");
  const backToTheWall = document.createElement("button");
  const postsDiv = document.createElement("div");
  const postDiv = document.createElement("div");
  const textPost = document.createElement("p");
  textPost.classList = "posts";
  recommendationsDiv.classList = "recommendations";
  recommendationsTitle.classList = "title";
  recommendationsTitle.textContent = "Recomendaciones";
  postContent.type = "text";
  buttonPost.classList = "buttons";
  buttonPost.textContent = "Subir una recomendación";
  backToTheWall.classList = "buttons";
  backToTheWall.textContent = "Volver al muro";
  backToTheWall.addEventListener("click", () => onNavigate("/wall"));

  //load puede ser reemplazado por DOMContentLoaded

  buttonPost.addEventListener("click", () => {
    if (postContent.value.length < 1) {
      alert("Por favor ingresa algun texto para poder postear");
    } else {
      createPost(postContent.value)
        .then(() => {
          alert("Post creado");
          postContent.value = "";
        })
        .catch((error) => {
          alert("error al subir el post, intente de nuevo");
        });
    }
  });

  recommendationsDiv.appendChild(recommendationsTitle);
  recommendationsDiv.appendChild(postContent);
  recommendationsDiv.appendChild(buttonPost);
  recommendationsDiv.appendChild(backToTheWall);
  recommendationsDiv.appendChild(postsDiv);
  postDiv.appendChild(textPost);

  return recommendationsDiv;
};
