const db = firebase.firestore();
export const homeLogic = async (description) => {
    await db.collection('comments').doc().set({
        description
    });
    console.log('paso de crear');
};

export const getComments = () => db.collection('comments').get();

export const onGetComments = (callback) => db.collection('comments').onSnapshot(callback);

export const deleteComment = async (id) => await db.collection('comments').doc(id).delete();

export const getComment = async (id) => await db.collection('comments').doc(id).get();

export const updateComment = async (id, description) => 
await db.collection('comments').doc(id).update({
    description
});