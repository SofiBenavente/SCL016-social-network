export const homeLogic = async (title, description) => {
    const db = firebase.firestore();

    const response = await db.collection('comments').doc().set({
        title,
        description
    });
    console.log("response", response);

};