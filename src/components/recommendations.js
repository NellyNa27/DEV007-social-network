import { createPost, enlistarPost } from '../lib';
//creación de elementos
export const recommendations = (onNavigate) => {
  const recommendationsDiv = document.createElement('div');
  const recommendationsTitle = document.createElement('h1');
  const postContent = document.createElement('input');
  const buttonPost = document.createElement('button');
  const backToTheWall = document.createElement('button');
  const postsDiv = document.createElement('div');
  const textPost = document.createElement('p');
  const initialMessage = document.createElement('p');
  const deleteButton = document.createElement('button');
  const updateButton = document.createElement('button');

  //caracterización de elementos
  postsDiv.classList = 'container';
  textPost.classList = 'posts';
  recommendationsDiv.classList = 'div';
  recommendationsTitle.classList = 'title';
  recommendationsTitle.textContent = 'Recomendaciones';
  postContent.type = 'text';
  postContent.classList = 'postContent';
  postContent.placeholder = 'Escribe tu recomendación acá';
  buttonPost.classList = 'buttons';
  buttonPost.textContent = 'Subir una recomendación';
  backToTheWall.classList = 'buttons';
  backToTheWall.textContent = 'Cerrar sesión';
  deleteButton.textContent = 'Borrar Post';
  deleteButton.classList = 'postButtons';
  updateButton.textContent = 'Editar Post';
  updateButton.classList = 'postButtons';

  //funcionalidad
  backToTheWall.addEventListener('click', () => onNavigate('/'));

  //recomendationsDiv.innerHTML += `
  //<textarea id="textareaPost"></textarea>
  //<button  id="buttonAddPost">Agregar Recomendación</button>
  //`;

  //load puede ser reemplazado por DOMContentLoaded

  buttonPost.addEventListener('click', () => {
    if (postContent.value.length < 1) {
      alert('Por favor ingresa algun texto para poder postear');
    } else {
      createPost(postContent.value)
        .then(() => {
          alert('Post creado');
          postContent.value = '';
        })
        .catch((error) => {
          alert('error al subir el post, intente de nuevo');
        });
    }
  });
  //hacer referencia con Doc Data para entrar a cada registro, recorrer cada registro para mostrarlo ... revisar documentacion para traer textos
  enlistarPost((callback) => {
    console.log(callback);
    callback.forEach((element) => {
      //hay que limpiar el post para que no se repita postsDiv.innerHTML = '';
      // console.log(element.data()); crear contenedores en html para visualizar cada post
      const post = document.createElement('div');
      post.classList = 'posts';
      post.appendChild(document.createTextNode(element.data().content));
      post.appendChild(deleteButton);
      post.appendChild(updateButton);
      postsDiv.appendChild(post);
    });
  }),
    //inserción al HTML
    recommendationsDiv.appendChild(recommendationsTitle);
  recommendationsDiv.appendChild(postContent);
  recommendationsDiv.appendChild(buttonPost);
  recommendationsDiv.appendChild(initialMessage);
  recommendationsDiv.appendChild(postsDiv);
  recommendationsDiv.appendChild(backToTheWall);
  return recommendationsDiv;
};
