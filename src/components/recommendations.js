import { createPost } from "../lib";

export const recommendations = (onNavigate) => {
  const recommendationsDiv = document.createElement("div");
  const recommendationsTitle = document.createElement("h1");
  const postContent = document.createElement("input");
  const buttonPost = document.createElement("button");
  const backToTheWall = document.createElement("button");

  const postsDiv = document.createElement("div");
  const postDiv = document.createElement("div");

  recommendationsDiv.classList = "recommendations";
  recommendationsTitle.classList = "title";
  recommendationsTitle.textContent = "Recomendaciones";
  postContent.type = "text";
  buttonPost.classList = "buttons";
  buttonPost.textContent = "Subir una recomendación";
  backToTheWall.classList = "buttons";
  backToTheWall.textContent = "Volver al muro";
  backToTheWall.addEventListener("click", () => onNavigate("/wall"));

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

  return recommendationsDiv;
};
