export const loginUser = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}
