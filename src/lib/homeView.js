import { homeLogic} from './homeLogic.js'
import { updateComment} from './homeLogic.js'
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
 
      <textarea id="description" rows="3" class="text-area" placeholder="Título\nHistoria"></textarea>
      <button class="saveComment" id="saveComment" type="submit">Guardar</button>
    </div>
    <div class="hr1"></div>
    <div id= "post-container" class="postContainer"></div>
  </form>
  <button onclick="signOut()"> Cerrar Sesión</button>
  <div class="jumbotronFooter" style="margin-bottom:0">
    <p>ParaSocial 2021 Todos los Derechos Reservados ©.</p>
  </div>
  </div>`;
  
//Se llama al evento submit para guardar o actualizar el valor del formulario
  const taskForm = divHome.querySelector('#task-form');
  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const isEditing = getCookie('isEditing');

    const description = taskForm['description'].value;

//Se da una condición para llamar a la
    if (isEditing == 'true') {
      const id = getCookie('idComment');
      await updateComment(id, description);
    } else {
      await homeLogic(description);
    }
    
    document.cookie = "isEditing=false";

    taskForm.reset();
  });

  return divHome;
}
// Función para obtener una cookie del browser
const getCookie = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}