// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const buttonLogin = () => {

    const login = document.getElementById('login');
    login.addEventListener('click', buttonLogin, false);

}


    /*document.getElementById('email').value;
    document.getElementById('pwd').value;*/
   
  
