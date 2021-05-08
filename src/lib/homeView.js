import { homeLogic } from './homeLogic.js';

export const homeView = () => { /*html*/

  const divHome = document.createElement('div');
  divHome.classList.add('homelobby');
  divHome.innerHTML = 
  `<div class = "homelobby">
    <div class="jumbotron" style="margin-bottom:0">
      <div id="logo">
        <h1>PARASOCIAL</h1>
        <img src="./img/pngegg.png" id="ghostHome" >
      </div>
    </div>
    
  <section id=navBar>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li><a href="#">¿Qué es ParaSocial?</a></li>
          <li><a href="#">Foros</a></li>
          <li><a href="#">Tu perfil</a></li>
        </ul>
      </div>
    </nav>
  </section>


  <form id="task-form">
    <div id="post">
      <textarea id="description" rows="3" class="text-area" placeholder="Description"></textarea>
      <button class="saveComment" id="saveComment" type="submit">Guardar</button>
    </div>
    <div class="hr1"></div>
  </form>

  <button onclick="signOut()"> Cerrar Sesión</button>
  <div class="jumbotron text-center" style="margin-bottom:0">
    <p>Footer</p>
    </div>
</div>`
  
  const taskForm = divHome.querySelector('#task-form');
  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const description = taskForm['description'].value;
    console.log('descripcion', description);
    await homeLogic(description);
    
  });

  return divHome;
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.emailVerified === false)
      document.getElementById('log').innerHTML =
        `<p>logueado ${user.email} <p>
           <button onclick="signOut()"> Cerrar Sesión</button>
           `;
     console.log(user)
     // User is signed in, see docs for a list of available properties
     // https://firebase.google.com/docs/reference/js/firebase.User
     let uid = user.uid;
     // ...
   } else {
     document.getElementById('log').innerHTML = "No logueado ";
     // User is signed out
     // ...
   }
 });
 firebase.analytics();

