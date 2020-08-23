//invoke funcs
const tweeter = Tweeter()
const renderer = Renderer()
  

//twwet button listiner -DONE 
$("#post").on("click",function () {
    let tweetVal = $("#input").val()
    $("#input").val("")
    tweeter.addPost(tweetVal)
    renderer.renderPosts(tweeter.getPosts())
})

//delete post listener **dynamic**  -DONE
$("#posts").on("click",".delete",function(){
    let postIdToDel = $(this).closest(".post").find(".comments").attr("id")
    tweeter.removePost(postIdToDel)
    renderer.renderPosts(tweeter.getPosts())
})


//add a comment listener *dynamic* - DONE
$("#posts").on("click",".subTheComment",function(){
    
    let commentText = $(this).closest(".post").find("#commentVal").val()
    let idPostForAddComent = $(this).closest(".post").find(".comments").attr("id")
    $(this).closest(".post").find("#commentVal").val("")
    tweeter.addComment(idPostForAddComent,commentText)
    renderer.renderPosts(tweeter.getPosts())
})

//delete comment listener *dynamic* - DONE
$("#posts").on("click",".delete-comment",function(){
    //need to retrive postID and Comment id
    let postIdToDelComment = $(this).closest(".post").find(".comments").attr("id")
    let commentIdToDelComment = $(this).closest("p").attr("data-commentid")
    tweeter.removeComment(postIdToDelComment,commentIdToDelComment)
    renderer.renderPosts(tweeter.getPosts())
    //working until here
})
