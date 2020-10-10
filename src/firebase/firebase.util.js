import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCIbrYVn9cBfeaZtuubXex5sCFHKbNHnmY",
    authDomain: "crwn-db-392e5.firebaseapp.com",
    databaseURL: "https://crwn-db-392e5.firebaseio.com",
    projectId: "crwn-db-392e5",
    storageBucket: "crwn-db-392e5.appspot.com",
    messagingSenderId: "489216786706",
    appId: "1:489216786706:web:6f"
};
firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if( !userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error){
        console.log(error)}
    }
    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'})
export const signUpWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;