import {
  logIn,
  createUser,
  createPost,
}
  from '../src/lib';
/* eslint-disable */
describe('logIn', () => {
  it('is a function', async () => {
    const response =await logIn();
    expect(typeof logIn).toBe('function');
  });
  it('return an object', async () => {
    const response = await logIn();
    expect(typeof logIn()).toBe('object');
  });
});

 describe('createUser', () => {
   it('is a function', async () => {
     const response = await createUser();
     expect(typeof createUser).toBe('function');
   });
   it('return an object', async () => {
     const response = await createUser();
     expect(typeof createUser()).toBe('object');
   });
 });
//  describe('registerWithGoogle', async () => {
//    const response = await registerWithGoogle();
//    it('is a function', () => {
//      expect(typeof registerWithGoogle).toBe('function');
//    });
//    it('return an object', async () => {
//      const response = await registerWithGoogle();
//      expect(typeof registerWithGoogle()).toBe('object');
//         });
//  });
 describe('createPost', () => {
   it('is a function', async () => {
     const response = await createPost();
     expect(typeof createPost).toBe('function');
   });
    it('return an object', async () => {
      const response = await createPost();
     expect(typeof createPost()).toBe('object');
    });
 });
/* eslint-enable */

//
//
// // importamos la funcion que vamos a testear
// // import { login } from "../src/components/login";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import {
//   createUser,
//   logIn,
//   // recoverPassword,
//   // registerWithGoogle,
// } from '../src/lib/index';

// describe('createUser', () => {
//   it('debería ser una función', () => {
//     expect(typeof createUser).toBe('function');
//   });
// });

// describe('logIn', () => {
//   it('debería ser una función', () => {
//     expect(typeof logIn).toBe('function');
//   });
// });
// describe('createUserWithEmailAndPassword', () => {
//   it('debería ser una función', () => {
//     expect(typeof createUserWithEmailAndPassword).toBe('function');
//   });
// });
