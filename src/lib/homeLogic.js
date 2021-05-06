const db = firebase.firestore();
export const homeLogic = async (description) => {
    

    await db.collection('comments').doc().set({
        description
    });
};

export const getComments = () => db.collection('comments').get();
