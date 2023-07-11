/* eslint-disable no-unused-vars */
//  import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  logIn,
  createUser,
  createPost,
  enlistarPost,
  recoverPassword,
  deletePost,
  updatePost,
  addLike,
  removeLike,
} from '../src/lib/index';

/* eslint-disable */
jest.mock('firebase/auth', () => {
  return {
    GoogleAuthProvider: jest.fn(),
    getAuth: jest.fn(() => ({
      currentUser: {
        displayName: 'Test User',
      },
    })),
    signInWithEmailAndPassword: jest.fn(),
  };
});

describe('logIn', () => {
  console.log(logIn);
  // await cuando se use el response
  it('is a function', async () => {
    expect(typeof logIn).toBe('function');
  });

  it('return an object', async () => {
    signInWithEmailAndPassword.mockReturnValueOnce(
      new Promise((resolve, reject) => resolve({}))
    );
    const response = await logIn();
    expect(typeof response).toBe('object');
  });

  it('must call signinwithemailandpassword al ser ejecutada', async () => {
    await logIn('isa@isa.cl', 'isaisa');
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
    // it('must return an object'), async () =>{
    //   signInWithEmailAndPassword.mockReturnValueOnce({})
    // const response = await logIn('isa@isa.cl','isaisa');
    // expect()}
  });
});
/*

 describe('createUser', () => {
   it('is a function', async () => {
     const response = await createUser();
     expect(typeof createUser).toBe('function');
   });
 });
  //  describe('registerWithGoogle', async () => {
  //   const response = await registerWithGoogle(auth, provider);
  //   it('is a function', () => {
  //     expect(typeof registerWithGoogle).toBe('function');
  //   });
  //   it('return an object', async () => {
  //     const response = await registerWithGoogle();
  //     expect(typeof registerWithGoogle()).toBe('object');
  //        });
   //  });
 describe('createPost', () => {
   it('is a function', async () => {
    const text = "hola";
    const email= "mail";
     const response = await createPost(text, email);
     expect (typeof createPost).toBe('function');
   });
 });
 describe('enlistarPost', () => {
  it('is a function',  () => {
    expect (typeof enlistarPost).toBe('function');
  });
});
describe('recoverPassword', () => {
  it('is a function', async () => {
    const response = await recoverPassword();
    expect (typeof recoverPassword).toBe('function');
  });
});
describe('deletePost', () => {
  it('is a function',  () => {
    expect (typeof deletePost).toBe('function');
  });
});
describe('updatePost', () => {
  it('is a function', () => {
         expect(typeof updatePost).toBe('function');
       });
});
describe('addLike', () => {
  it('is a function',  () => {
    expect (typeof addLike).toBe('function');
  });
});
describe('removeLike', () => {
  it('is a function', () => {
    expect (typeof removeLike).toBe('function');
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
