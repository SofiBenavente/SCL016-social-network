//import { savePost } from '../src/homeView.js';
import { loginUser, createUser, loginGoogle } from '../src/loginView.js';

const test = require('firebase-functions-test')();
const key = functions.config().stripe.key;

//Arreglar para test de guardar post

//describe('savePost', () => {
//  it('debería ser una función', () => {
//    expect(typeof savePost).toBe('function');
//  });
//});

//describe('savePost', () => {
//  it('debería de poder agregar un post', () => {
//    return savePost('algun post').then((data) => {
//      expect(data).toBe('algun post');
//    });
//  });
//});

 describe('loginUser', () => {
  it('debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });
});
describe('loginGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });
});
describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
});

