import React from 'react';

function CreepyCard({creepyPost,i}) {

  return(
    <div className="CreepyCardWrapper ">
    <div className="CreepyCard PageWrapper">
      <div className="NameImageWrapper">
        <img className="Image"src={creepyPost.imageChoice} alt="hello" />
      </div>
      <div className="StoryWrapper">
          <h3> {creepyPost.storyName} </h3>

        <p> {creepyPost.tldr} </p>
        <a href={`/view-post/${creepyPost.id}`}> READ MORE </a>
      </div>
    </div>
    </div>
  )
}


export default CreepyCard;
