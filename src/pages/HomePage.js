import React, {useEffect, useState} from "react";
import axios from 'axios';
//components
import OpenBlurb from '../components/OpenBlurb';
import CreepyCard from '../components/CreepyCard';
import RandomPostButton from '../components/RandomPostButton';



const url = `http://localhost:4000`;
function HomePage(postIdArray, setPostIdArray){
  const [creepyPost, setCreepyPost] = useState();
  useEffect(() => {
    axios
    .get(url)
    .then(function (response) {
      setCreepyPost(response.data);
      // handle success
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  return(
    <div>
    <div className="OpeningWrapper">
      <OpenBlurb/>
      <RandomPostButton creepyPost={creepyPost}/>
    </div>
    <div className="background">
      {creepyPost && creepyPost.map((creepyPost, i) => (
        <CreepyCard creepyPost={creepyPost} key={i} />
      ))}
    </div>

    </div>
  )
}

export default HomePage;
//gonna be a tutorial or have random posts
