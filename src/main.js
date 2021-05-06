// Este es el punto de entrada de tu aplicacion
import { htmlLogin } from './lib/loginView.js'
import { loginUser, createUser } from './lib/loginLogic.js'
import { homeView } from './lib/homeView.js';
import { getComments } from './lib/homeLogic.js';
//import {createUser} from './createUser.js'
//import {htmlRegister} from './lib/createUserView.js'
//import {homeView} from './lib/homeView.js'


const init = () => {
  //en que url estoy?
  //estoy en home? pinto home
  //estoy en login? pinto login
  let url = window.location.hash;
  console.log(window.location);
  console.log('estas en', url);
  switch (url) {
    case '':
    case '#/login':
      //pintar login
      document.querySelector('.card').innerHTML = '';
      document.querySelector('.card').appendChild(htmlLogin());
      break;
    case '#/home':
      document.querySelector('.home').appendChild(homeView());
      window.addEventListener('DOMContentLoaded', async (e) =>{
        const postContainer = document.getElementById('post-container');
        const querySnapshot = await getComments();
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          postContainer.innerHTML += `<p class="homeComments">
          ${doc.data().description}
          </p>
          <button class"delete">Borrar</button>`
        });
        
      })
      break;
  };
}

init();
