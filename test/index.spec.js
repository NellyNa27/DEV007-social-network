// importamos la funcion que vamos a testear
// import { login } from "../src/components/login";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  createUser,
  logIn,
  // recoverPassword,
  // registerWithGoogle,
} from '../src/lib/index';

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
});

describe('logIn', () => {
  it('debería ser una función', () => {
    expect(typeof logIn).toBe('function');
  });
});
describe('createUserWithEmailAndPassword', () => {
  it('debería ser una función', () => {
    expect(typeof createUserWithEmailAndPassword).toBe('function');
  });
});
