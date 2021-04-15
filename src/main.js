// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const buttonLogin = () => {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pwd').value

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
const login = document.getElementById('login');
login.addEventListener('click', buttonLogin, false);


