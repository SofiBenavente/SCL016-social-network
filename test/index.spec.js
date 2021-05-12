import { comments } from '../src/homeLogic.js';
import { loginUser, createUser, loginGoogle } from '../src/loginView.js';

const test = require('firebase-functions-test')();
const key = functions.config().stripe.key;


describe('comments', () => {
  it('debería ser una función', () => {
   expect(typeof comments).toBe('function');
 });
});

describe('comments', () => {
 it('debería de poder agregar un post', () => {
    return comments('algun post').then((data) => {
      expect(data).toBe('algun post');
    });
  });
});

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

