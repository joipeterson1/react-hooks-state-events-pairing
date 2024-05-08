
function Comments({video, setComments, comments}){
    function handleCommentToggle(){
        setComments((comments)=>!comments)
        }

const commentDisplay=() => {
  if (comments === false){
    return null 
  } else {
    return video.comments.map((c)=>{
        return(
<div key={c.id}>
    <b>{c.user}</b>
    <p>{c.comment}</p>
</div>
        )
        })
    
  }
}
    return(
     <div>
        <button onClick={handleCommentToggle}>{comments ? "Hide Comments" : "Show Comment"}</button>
        <h3>{`${video.comments.length} Comments`}</h3>
        {commentDisplay()}

    </div>
    )
}
export default Comments