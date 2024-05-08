import video from "../data/video.js";
import Likes from "./Likes"
import React, {useState} from "react"
import Comments from "./Comments"
function App() {
  console.log("Here's your data:", video);
  const[comments, setComments]= useState(false)
  const[upvotes, setUpVotes]= useState(video.upvotes)
  const[downvotes, setDownVotes]= useState(video.downvotes)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    <h2>React Today and Tomorrow and 90% Cleaner React With Hooks</h2>
      <p>730707 Views | Uploded Oct 26, 2018</p>
      <Likes video={video} upvotes={upvotes} setUpVotes={setUpVotes} downvotes={downvotes} setDownVotes={setDownVotes}/>
      <Comments video={video} comments={comments} setComments={setComments}/>
    </div>

  );
}

export default App;
