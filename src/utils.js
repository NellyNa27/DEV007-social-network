import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db, provider } from './firebase';

//  estea archivo tiene funciones que se comunicacn con firebase
export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};
export const logIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};
export const registerWithGoogle = () => {
  signInWithPopup(auth, provider);
};
//  text es el equivalente a contenido, no sé si corresponden
export const createPost = (text) => addDoc(collection(db, 'posts'), {
  text,
});

//  considerar que no se manipula el DOM y
// que no se necesita manipular home (no se prueba el onnavigete)
