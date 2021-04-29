export const loginUser = (email, password) => {
    console.log(email, password);
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

export const createUser =  (email, pass) =>{
    console.log(email, pass);
    return firebase.auth().createUserWithEmailAndPassword(email, pass);
}
