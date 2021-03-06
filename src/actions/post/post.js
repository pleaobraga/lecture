import * as api from '../../Utils/apiUtils'
import * as constant from '../../Utils/constants'


const getAllPostsSuccess = posts => ({
    type: constant.GET_ALL_POSTS, 
    posts
})

const getAllFilteredPostsSuccess = (filteredPosts, category) => ({
    type: constant.GET_CATEGORY_POSTS,
    filteredPosts,
    category
})

const getPostDetailSuccess = post => ({
    type: constant.GET_POST_DETAIL,
    post
})

const editPostSuccess = post => ({
    type: constant.EDIT_POST,
    post
})

const votePostSuccess = (post, vote) => ({
    type: constant.VOTE_POST,
    post,
    vote
})

const deletePostSuccess = post => ({
    type: constant.DELETE_POST,
    post
})

export const getAllPosts = () => dispatch => {
    return api.getAllPost()
        .then(response => {
            dispatch(getAllPostsSuccess(response.data))
            return response.data
        })
        .catch( error => console.log(error))
}

export const getFilteredPosts = (category) => dispatch =>  {
    return api.getCategoryPosts(category)
        .then(response => {
            dispatch(getAllFilteredPostsSuccess(response.data, category))
            return response.data
        })
        .catch( error => console.log(error))
}

export const getPostDetail = (idPost) => dispatch => {
    return api.getPostDetail(idPost)
        .then(response => {
            dispatch(getPostDetailSuccess(response.data))
            return response.data
        })
        .catch( error => console.log(error))
}

export const editPost = (post) => dispatch => {
    return api.editPost(post)
        .then(response => {
            dispatch(editPostSuccess(response.data))
            return response.data
        })
        .catch( error => console.log(error))
}

export const votePost = (vote, post) => dispatch =>  {
    return api.votePost({option: vote}, post.id)
        .then(response => {
            dispatch(votePostSuccess(response.data, vote))
            response.data.voted = vote.split('Vote')[0]
            return response.data
        })
        .catch( error => console.log(error))
} 

export const deletePost = (id) => dispatch =>  {
    return api.deletePost(id)
        .then(response => {
            dispatch(deletePostSuccess(response.data))
            return response.data
        })
        .catch( error => console.log(error))
}

