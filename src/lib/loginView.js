//export const htmlLogin = 

/*`<div class="login-box">
<div class="login-snip">
  <h1>PARASOCIAL</h1>
  <img id="ghost" src="./img/pngegg.png">
  <p>
    Únete a esta red de misterios, comparte tus experiencias, conoce miles de personas! Registrate ya!
  </p>
  <input id="tab-1" type="radio" name="tab" class="sign-in" checked=""><label for="tab-1" class="tab">Login</label> <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
    <div class="login-space">
        <div class="login">
            <div class="group"> <label for="user" class="label">Ingrese su correo electrónico</label> <input id="emailLogin" type="text" class="input" placeholder="Correo electrónico"> </div>
            <div class="group"> <label for="pass" class="label">Ingrese su contraseña</label> <input id="passLogin" type="password" class="input" data-type="password" placeholder="Contraseña"> </div>
            <div class="group"> <input type="submit" class="button" id="loginButton" value="Ingresar"> </div>
            <div class="foot"> <a href="#">Forgot Password?</a> </div>
            <div class="hr"></div>
            <div class="googleAccount">
              <a href="#" id="google">Ingresar con cuenta de Google</a> 
            </div>
            <input type="image" id="google_icon" src="./img/gogle1.png">
        </div>
        <div class="sign-up-form">
            <div class="group"> <label for="pass" class="label">Correo electrónico</label> <input id="emailRegister" type="text" class="input" placeholder="ingresa tu correo electrónica"> </div>
            <div class="group"> <label for="pass" class="label">Contraseña</label> <input id="passRegister" type="password" class="input" data-type="password" placeholder="Crea tu contraseña"> </div>
            <div class="group"> <label for="pass" class="label">Contraseña</label> <input id="pwd3" type="password" class="input" data-type="password" placeholder="Repite tu contraseña"> </div>
            <div class="group"> <input type="submit" class="button" id="registerButton" value="Registrar"> </div>
            <div class="hr"></div>
            <div class="foot"> <label for="tab-1">Already Member?</label> </div>
        </div>
    </div>
</div>
</div>`;*/

import {loginUser, createUser} from './loginLogic.js' 
export const htmlLogin = () => {

  const div = document.createElement('div');
  div.classList.add('login-box');
  div.innerHTML = `<div class="login-snip">
  <h1>PARASOCIAL</h1>
  <img id="ghost" src="./img/pngegg.png">
  <p>
    Únete a esta red de misterios, comparte tus experiencias, conoce miles de personas! Registrate ya!
  </p>
  <input id="tab-1" type="radio" name="tab" class="sign-in" checked=""><label for="tab-1" class="tab">Login</label> <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
    <div class="login-space">
        <div class="login">
            <div class="group"> <label for="user" class="label">Ingrese su correo electrónico</label> <input id="emailLogin" type="text" class="input" placeholder="Correo electrónico"> </div>
            <div class="group"> <label for="pass" class="label">Ingrese su contraseña</label> <input id="passLogin" type="password" class="input" data-type="password" placeholder="Contraseña"> </div>
            <div class="group"> <input type="submit" class="button" id="loginButton" value="Ingresar"> </div>
            <div class="foot"> <a href="#">Forgot Password?</a> </div>
            <div class="hr"></div>
            <div class="googleAccount">
              <a href="#" id="google">Ingresar con cuenta de Google</a> 
            </div>
            <input type="image" id="google_icon" src="./img/gogle1.png">
        </div>
        <div class="sign-up-form">
            <div class="group"> <label for="pass" class="label">Correo electrónico</label> <input id="emailRegister" type="text" class="input" placeholder="ingresa tu correo electrónica"> </div>
            <div class="group"> <label for="pass" class="label">Contraseña</label> <input id="passRegister" type="password" class="input" data-type="password" placeholder="Crea tu contraseña"> </div>
            <div class="group"> <label for="pass" class="label">Contraseña</label> <input id="pwd3" type="password" class="input" data-type="password" placeholder="Repite tu contraseña"> </div>
            <div class="group"> <input type="submit" class="button" id="registerButton" value="Registrar"> </div>
            <div class="hr"></div>
            <div class="foot"> <label for="tab-1">Already Member?</label> </div>
        </div>
    </div>
</div>`

  const googleAcc = div.querySelector('#google');
  googleAcc.addEventListener('click', loginGoogle);

  const login2 = div.querySelector('#loginButton');
  login2.addEventListener('click', () => {
    let emailLogin = div.querySelector('#emailLogin').value;
    let passLogin = div.querySelector('#passLogin').value;

    loginUser(emailLogin, passLogin)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        // ...
        location.replace("http://localhost:5000/#/home");
        location.reload();

        console.log('Hola, estas logueado' + user);
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);
      });
  });

  const login1 = div.querySelector('#registerButton');
  login1.addEventListener('click', () => {
    let email1 = div.querySelector('#emailRegister').value;
    let pass1 = div.querySelector('#passRegister').value;

    createUser(email1, pass1)
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

  });
  return div;
};

const loginGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
  });
}



