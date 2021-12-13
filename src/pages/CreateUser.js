import React, { useCallback } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import CreateUserForm from '../components/CreateUserForm';

function CreateUser({setLoggedIn, setUserInformation}){
  const signUpUser=useCallback((e) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const displayName = e.currentTarget.displayName.value;   //HELP USERNAME DOESNT WORK
    const auth=getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user=userCredential.user;
        setLoggedIn(true);
        setUserInformation({
          email: user.email,
          displayName: user.displayName,
          uid: user.uid,
          accessToken: user.accessToken
        });
        updateProfile(auth.currentUser, {
          displayName
        })
          .then(() => {
            console.log("SIGNED UP");
          })
          .catch((error) => {
            return(error.errorMessage);
          });
      })
      .catch((error) => {
        const errorCode=error.code;
        const errorMessage=error.message;
        console.warn({error, errorCode, errorMessage})
      });
  },
  [setLoggedIn, setUserInformation]
);
  return (
    <div >
    
      <CreateUserForm signUpUser={signUpUser}/>
    </div>
);
}

export default CreateUser;
