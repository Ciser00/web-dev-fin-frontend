import React from "react";
import axios from "axios";
import{ useNavigate } from 'react-router-dom';
//components
import CreatePostForm from "../components/CreatePostForm";
import RandomImage from "../components/RandomImage";
import Data from "../json/Data.json";
const baseUrl = `http://localhost:4000`
function CreatePost({userInformation, randomNum, setRandomNum }){
  const navigate = useNavigate();
  function submitPost(e){
      e.preventDefault();
      const imageChoice = Data[randomNum].imageSrc;
      const imageAlt = Data[randomNum].imageAlt;
      const story = e.currentTarget.story.value;
      const storyName = e.currentTarget.storyName.value;
      const userId = userInformation.uid;
      const tldr = e.currentTarget.tldr.value;
      const displayName =  userInformation.displayName;  //HELP user name doesnt work
      const url =`${baseUrl}/create?imageChoice=${imageChoice}&story=${story}&storyName=${storyName}&userId=${userId}&displayName=${displayName}&imageAlt=${imageAlt}&tldr=${tldr}`;
      axios
        .get(url)
        .then(function (response) {
          console.log({response});
          navigate("/",{replace : true}) //TODO change to post page
      })
        .catch(function (error) {
          console.log(error);
      });
    }

  return(
    <div>
      <div className="background">
        <div className="PostPageWrapper">
          <RandomImage randomNum={randomNum} setRandomNum={setRandomNum}/>

          <CreatePostForm submitPost={submitPost}/>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
