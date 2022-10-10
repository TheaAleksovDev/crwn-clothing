import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  } from '../../utils/firebase/firebase.utils';
import { useEffect  } from 'react';
import { getRedirectResult } from 'firebase/auth';

const SignIn = () => {

  useEffect(async()=>{
    const response = await getRedirectResult(auth)
    console.log(response)
  },[])

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
    </div>
  );
};

export default SignIn;