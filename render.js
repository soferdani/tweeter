
const Renderer = function () {
    const renderPosts = function (Posts) {
        $("#posts").empty()
        for (let i in Posts){
            let postText = Posts[i]["text"]
            let postId = Posts[i]["id"]
            let newPost = (
                `<div class="post">
                <h3 class="post-text">${postText}</h3>
                <div class="comments" id="${postId}">
                    <p class="commentsHere" >
                    
                    </p>
                </div>
                <input placeholder="Got somthing to say?" id="commentVal">
                <button class="subTheComment">Comment</button>
                <div>
                <div class="delete">Delete Post</div>
                </div>
            </div>`)
                $("#posts").append(newPost)
            if (Posts[i]["comments"].length){
                //$(`#${postId}`).empty()
                for (let j = 0; j< Posts[i]["comments"].length ; j++) {
                    let commentId = Posts[i]["comments"][j]["id"]
                    let commentText = Posts[i]["comments"][j].text
                    let newComment = `<p data-commentId="${commentId}"><span class="delete-comment"> X  </span>${commentText}</p>`
                    $(`#${postId}`).append(newComment)
                }
                
            }
                
        }
    }

    return{
        renderPosts
    }
}
