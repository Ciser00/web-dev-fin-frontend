import React, {useEffect, useState} from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import CreepyCardSolo from '../components/CreepyCardSolo';

const url = `http://localhost:4000`
function ViewPost(){
  const [singleCreepyPost, setSingleCreepyPost] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios
    .get(`${url}/storypost/${id}`)
    .then(function (response) {
      setSingleCreepyPost(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [id]);
  console.log(singleCreepyPost)
  return(
    <div>
      <CreepyCardSolo singleCreepyPost={singleCreepyPost}/>
    </div>
  )
}

export default ViewPost;
