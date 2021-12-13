import React from "react";

function Header({logout, loggedIn, userInformation}){
  return(
    <header className="HeaderWrapper">
      <div className="Header HeaderWrapperNoBotPadding">
        <a href="/" className="Header"> Creepy Posts </a>
        <nav>
          {!loggedIn && (
            <>
              <a href="/login"> LogIn </a>
              <a href="/create-user"> Create User </a>
            </>
          )}
          {loggedIn && (
            <>
              <a href={`/storypage/${userInformation.uid}`}> User Profile </a>
              <a href="/create-post"> Create Post </a>
              <button onClick={() => logout()}> Log Out </button>
            </>
          )}
        </nav>
  
      </div>
    </header>
  )
}

export default Header;
