import {
  EmailAuthCredential,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const createUser = (email, contraseña) => {
  createUserWithEmailAndPassword(auth, email, contraseña);
};
