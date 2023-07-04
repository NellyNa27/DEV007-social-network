import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase';

// En este archivo se declaran las funciones// promesas
//  las promesas se consumen en los otros archivos js
export const createUser = (email, contraseña) => {
  createUserWithEmailAndPassword(auth, email, contraseña);
};
export const logIn = (email, contraseña) => {
  signInWithEmailAndPassword(auth, email, contraseña);
};
export const recoverPassword = (email) => {
  sendPasswordResetEmail(auth, email);
};
export const registerWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
// consultar si es necesario el await
export const createPost = (text) => {
  addDoc(collection(db, 'posts'), {
    content: text,
  });
};
// usar callback
export const enlistarPost = (callback) => onSnapshot(collection(db, 'posts'), callback);
