const Tweeter = function () {
    const _posts = [ ]
    let postIdCounter = 0
    let commentIdCounter = 0
   
    const getPosts = function () { //this is done 
        return _posts
    }

    const addPost = function (text) { //this is done 
        postIdCounter ++
        _posts.push({
            text:text,
            id:"p" + postIdCounter,
            comments:[]
        })
    }

    const removePost = function (postID){ //this is done 
        for (let i = 0 ; i< _posts.length; i++){
            if (_posts[i]["id"] == postID){
                _posts.splice(i,1)
                //console.log(_posts)
            }
        }
    }



    const addComment = function (postID,text){ //this is done 
        commentIdCounter++
        for (let i = 0; i<_posts.length; i++){
            if (_posts[i]["id"] == postID) {
              //console.log(_posts[i].comments)
                _posts[i].comments.push({
                id:"c" + commentIdCounter,
                text:text
                })
            }
        }
       //console.log(_posts)
    }
    
    const removeComment = function (postId,commentId) { // this is done 100% sure
        for (let i = 0; i<_posts.length; i++) {
            if (_posts[i]["id"] == postId) {   
                for (let j = 0 ; j<_posts[i].comments.length; j++){
                    if(_posts[i]["comments"][j]["id"] == commentId){
                        _posts[i].comments.splice(j,1)
                    }
                }
            }
        }
    }
    




    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }

}

