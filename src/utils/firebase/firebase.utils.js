import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCRYB2b_3v1oDVlydTg39QAvZfDTQcri-I",
  authDomain: "crwn-clothing-4d534.firebaseapp.com",
  projectId: "crwn-clothing-4d534",
  storageBucket: "crwn-clothing-4d534.appspot.com",
  messagingSenderId: "313091561096",
  appId: "1:313091561096:web:d490c96d47047863ea713d"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)
}
