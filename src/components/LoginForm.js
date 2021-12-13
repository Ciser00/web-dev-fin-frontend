import React from 'react';

function LoginForm({ loginUser}){
  return (
    <div className="BackgroundLogin">
    <div className="PostPageWrapper">
    <h2>  Login </h2>
      <div className="Form">

        <form onSubmit={(e) => loginUser(e)}>
          <label htmlFor="email"> Email </label>
          <input type="email" name="email" placeholder=" Enter Email" />

          <label htmlFor="password"> Password </label>
          <input type="password" name="password" placeholder=" *******" />

          <label htmlFor="name"> User Name </label>
          <input type="text" name="name" placeholder=" enter user" />

          <button type="submit" style={{height:"50px", width:"150px"}}> LOG IN </button>

        </form>
        </div>
      </div>
    </div>
);}

export default LoginForm;
