export const recommendations = (onNavigate) => {
  const recommendationsDiv = document.createElement("div");
  const recommendationsTitle = document.createElement("h1");
  const buttonPost = document.createElement("button");
  const backToTheWall = document.createElement("button");

  recommendationsDiv.classList = "recommendations";
  recommendationsTitle.classList = "title";
  recommendationsTitle.textContent = "Recomendaciones";
  buttonPost.classList = "buttons";
  buttonPost.textContent = "Subir una recomendación";
  backToTheWall.classList = "buttons";
  backToTheWall.textContent = "Volver al muro";
  backToTheWall.addEventListener("click", () => onNavigate("/wall"));

  recommendationsDiv.appendChild(recommendationsTitle);
  recommendationsDiv.appendChild(buttonPost);
  recommendationsDiv.appendChild(backToTheWall);

  return recommendationsDiv;
};
