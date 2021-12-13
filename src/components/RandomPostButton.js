import React from "react";

function RandomPostButton({creepyPost}) {
  let bruh =0;
  if (!creepyPost){
    bruh=0
  }else{
    bruh = Math.floor((Math.random()*(creepyPost.length - 1)))
  }
  if (!creepyPost) return null;
  return(
    <div >
      <div className="RandomLinkWrapper">
        <a  className="RandomLink" href={`/view-post/${creepyPost[bruh].id}`}> Random Story </a>
      </div>
    </div>
  )
}


export default RandomPostButton;
