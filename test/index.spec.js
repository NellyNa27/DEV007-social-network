// importamos la funcion que vamos a testear
// import { login } from "../src/components/login";
import {
  createUser,
  // myFunction,
  // recoverPassword,
  // registerWithGoogle,
} from '../src/lib/index';

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
});


