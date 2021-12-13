import React from 'react';
//setting up post form and submit post function 16:25
function CreatePostForm({submitPost}){

  return (
    <div className="Form">
      <form onSubmit={(e) => submitPost(e)}>

        <label className="FormText" htmlFor="storyName"> Story Name </label>
        <input type="storyName" name="storyName" placeholder="STORY NAME" />

        <label className="FormText" htmlFor="tldr" > Story Blurb </label>
        <input type="text" name="tldr" placeholder="TLDR ABOUT YOUR STORY " />

        <label className="FormText" htmlFor="story" > Story </label>
        <textarea  className="StoryBox" type="story" name="story" placeholder=" WRITE YOUR STORY HERE "/>

        <button className="FormButton" type="submit" style={{height:"50px", width:"150px"}}> submit post </button>
      </form>
    </div>
);}

export default CreatePostForm;
