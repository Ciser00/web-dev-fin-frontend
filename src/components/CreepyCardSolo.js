import React from 'react';
function CreepyCardSolo({singleCreepyPost}) {
  console.log(singleCreepyPost.story)
  return(
    <div className="SinglePostWrapper">
      <div className="PageWrapper">
        <div className="SingleStoryWrapper">
          <div className="SingleImageWrapper">
            <img className="SingleImage" src={singleCreepyPost.imageChoice} alt={singleCreepyPost.imageAlt} />
          </div>
          <h3> {singleCreepyPost.storyName} </h3>
          <p> {singleCreepyPost.story}</p>
        </div>
      </div>
    </div>

  )
}


export default CreepyCardSolo;
