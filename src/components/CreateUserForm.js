import React from 'react';

function CreateUserForm({signUpUser}){
  return (
    <div className="BackgroundLogin">
    <div className="PostPageWrapper">
      <h2 className="CreateUserLogin">Create User Profile</h2>
    <div className="Form">

      <form onSubmit={(e) => signUpUser(e)}>
        <label htmlFor="email"> Email </label>
        <input type="email" name="email" placeholder=" Enter Email" />

        <label htmlFor="password"> Password </label>
        <input type="password" name="password" placeholder=" *******" />

        <label htmlFor="displayName"> User Name </label>
        <input type="text" name="displayName" placeholder=" enter user" />

        <button type="submit" style={{height:"50px", width:"150px"}}> Create User </button>
      </form>
    </div>
      </div>
        </div>
);}

export default CreateUserForm;
