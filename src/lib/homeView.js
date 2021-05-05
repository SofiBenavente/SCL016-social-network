import { homeLogic } from './homeLogic.js'
export const homeView = () => { /*html*/

  const divHome = document.createElement('div');
  divHome.classList.add('homelobby');
  divHome.innerHTML =
    `<div class = "homelobby">

    <div class="jumbotron" style="margin-bottom:0">
      <div id = "logo">
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
    <input type="text" id="title" class="form-control" class="Task Title" placeholder="Title" autofocus />
    
      <textarea id="description" rows="3" class="form-control" placeholder="Description"></textarea>
   

    <button class="saveComment" id="saveComment" type="submit">Guardar</button>

  </form>
  <div class="hr1"></div>
  <div class="jumbotron text-center" style="margin-bottom:0">
    <p>Footer</p>
  </div>
  </div>
  `
  
  const taskForm = divHome.querySelector('#task-form');
  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = taskForm['title'].value;
    const description = taskForm['description'].value;
    console.log("titulo y descripcion", title, description);
    await homeLogic(title, description);



  });

  return divHome;
}