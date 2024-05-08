

function Likes ({video, upvotes, downvotes, setUpVotes, setDownVotes}){

const handleUpvoteClick= ()=> {
    upvotes = video.upvotes
setUpVotes((upvotes)=> upvotes + 1)
}

const handleDownvoteClick= ()=> {
    downvotes = video.downvotes
setDownVotes((downvotes) => downvotes + 1)
}


return(
<div>
    <button onClick={handleUpvoteClick}>{`${upvotes}👍`}</button> <button onClick={handleDownvoteClick}>{`${downvotes}👎`}</button>
</div>  
    )
}
export default Likes