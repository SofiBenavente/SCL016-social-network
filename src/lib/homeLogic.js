export const homeLogic = async (description) => {
    const db = firebase.firestore();

    const response = await db.collection('comments').doc().set({
        description
    });
    console.log("response", response);

};