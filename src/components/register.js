import { createUser, registerWithGoogle } from '../lib/index';

export const register = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList = 'div';
  const buttonHome = document.createElement('button');
  const buttonName = document.createElement('input');
  const buttonNewEmail = document.createElement('input');
  const buttonNewPassword = document.createElement('input');
  const buttonSignIn = document.createElement('button');
  const buttonGoogle = document.createElement('img');
  const conditionsPassword = document.createElement('p');
  const buttonRegisterWithGoogle = document.createElement('button');
  const name = document.createElement('P');
  const email = document.createElement('p');
  const password = document.createElement('p');

  buttonGoogle.classList = 'logoG';
  buttonGoogle.src = 'images/btngo2.png';
  buttonName.classList = 'form';
  buttonNewEmail.classList = 'form';
  buttonNewEmail.placeholder = 'CORREO';
  buttonNewPassword.placeholder = 'CONTRASEÑA';
  buttonNewPassword.classList = 'form';
  buttonNewPassword.type = 'password';
  conditionsPassword.classList = 'text';
  conditionsPassword.textContent = '(La contraseña debe tener al menos 6 carácteres)';
  buttonSignIn.textContent = 'Registrarse';
  buttonSignIn.classList = 'buttons';
  buttonHome.textContent = 'Regresar al inicio';
  buttonHome.classList = 'buttons';
  buttonRegisterWithGoogle.classList = 'buttonGoogle';
  buttonRegisterWithGoogle.textContent = 'Registrarse con Google';
  name.textContent = 'INGRESA TU NOMBRE';
  name.classList = 'message';
  email.textContent = 'EMAIL';
  email.classList = 'message';
  password.textContent = 'CONTRASEÑA';
  password.classList = 'message';
  //  funcionalidad
  buttonHome.addEventListener('click', () => onNavigate('/'));
  buttonSignIn.addEventListener('click', () => {
    if (buttonNewEmail.value.includes('@') === false) return alert('Ingrese un correo válido');
    if (buttonNewPassword.value.length < 6) return alert('La contraseña debe tener al menos 6 caracteres');
    return createUser(buttonNewEmail.value, buttonNewPassword.value)
      .then(() => {
        alert('Usuario registrado con éxito');
        onNavigate('/recommendations');
      })
      .catch(() => {
        alert('Error al crear el usuario, intente de nuevo');
      });
  });

  buttonRegisterWithGoogle.addEventListener('click', () => {
    registerWithGoogle()
      .then(() => {
        onNavigate('/recommendations');
      })
      .catch(() => {
        alert('Error al iniciar sesión, intente de nuevo');
      });
  });
  homeDiv.appendChild(name);
  homeDiv.appendChild(buttonName);
  homeDiv.append(email);
  homeDiv.appendChild(buttonNewEmail);
  homeDiv.appendChild(password);
  homeDiv.appendChild(buttonNewPassword);
  homeDiv.appendChild(conditionsPassword);
  homeDiv.appendChild(buttonSignIn);
  homeDiv.appendChild(buttonHome);
  homeDiv.appendChild(buttonGoogle);

  return homeDiv;
};
