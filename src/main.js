// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const buttonLogin1 = () => {
    let email = document.getElementById('email1').value;
    let pass = document.getElementById('pwd1').value

//Función para crear usuarios
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        // ...
    })
    .catch((error) => {
        let errorCode = error.code; 
        let errorMessage = error.message;
        alert(errorMessage);
        // ..

    });

}
const login = document.getElementById('login1');
login.addEventListener('click', buttonLogin1, false);


const buttonLogin2 = () => {
    let email2 = document.getElementById('email2').value;
    let pass2 = document.getElementById('pwd2').value

//Función para usuarios ya registrados
    firebase.auth().signInWithEmailAndPassword(email2, pass2)
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
    // ...
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    alert(errorMessage);
  });
}

const login2 = document.getElementById('login2');
login2.addEventListener('click', buttonLogin2, false);

const signOut = () => {
  firebase.auth().signOut()
  .then(function(){
    console.log('Salir');
  })
  .catch(function(error){
    console.log(error);
  })
}
