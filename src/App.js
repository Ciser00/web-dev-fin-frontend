import React, {useEffect, useState} from "react"
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
//styles
import "./App.css"
//components
import Login from "./pages/Login"
import CreatePost from "./pages/CreatePost"
import HomePage from "./pages/HomePage"
import CreateUser from "./pages/CreateUser"
import ViewPost from "./pages/ViewPost"
import ViewProfile from "./pages/ViewProfile"
import Header from "./components/Header"
import FirebaseConfig from "./components/FireBaseConfig"

function App() {
  //track if user is logged in
  const [loggedIn, setLoggedIn] = useState(false);
  //check to see if loading
  const [loading, setLoading] = useState(true);
  //store user info in state
  const [userInformation, setUserInformation] = useState({});
  const [appInitialized, setAppInitialized] = useState(false);
  const [postIdArray, setPostIdArray] = useState(1);
  const [randomNum, setRandomNum] = useState(Math.floor((Math.random()*4)));

  useEffect(() => {
    //initialize firebaseapp
    initializeApp(FirebaseConfig);
    setAppInitialized(true);
  }, []);
  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user){
          //user is signed
          setUserInformation(user);
          setLoggedIn(true);
        }else{
          //user is signed out
          setUserInformation({});
          setLoggedIn(false);
        }
        //whenevr state changes setloading to false
        setLoading(false);
      });
    }
  }, [appInitialized]);
  function logout(){
    const auth = getAuth();
    signOut(auth).then(() =>{
      setUserInformation({});
      setLoggedIn(false);
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  if (loading || !appInitialized) return null;
  return(
    <div>
      <Header logout={logout} loggedIn={loggedIn} userInformation={userInformation}/>
      <Router>
        <Routes>
          <Route path="/create-post"
            element={
              loggedIn ? (
                <CreatePost
                  userInformation={userInformation}
                  randomNum={randomNum}
                  setRandomNum={setRandomNum}
                />
              ) : (
                <Navigate to="/login"/>
              )
            }
          />
          <Route path="/create-user"
            element={
              !loggedIn ? (
                <CreateUser/>
              ):(
                <Navigate to="/"/>
              )
            }/>
          <Route path="/login"
          element={
            !loggedIn ? (
              <Login/>
            ) : (
              <Navigate to="/"/>
            )
          }/>
          <Route path="/" element={<HomePage postIdArray={postIdArray} setPostIdArray={setPostIdArray}/>}/>
          <Route path="/view-post/:id"
            element={
              loggedIn ? (
                <ViewPost/>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/view-profile/:id"
            element={
              loggedIn ? (
                <ViewProfile/>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
