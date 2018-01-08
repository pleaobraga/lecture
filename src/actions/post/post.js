import * as api from '../../Utils/apiUtils'
import * as constant from '../../Utils/constants'


const getAllPostsSuccess = (posts) => ({
    type: constant.GET_ALL_POSTS, 
    posts
})

const getAllFilteredPostsSuccess = (filteredPosts, category) => ({
    type: constant.GET_CATEGORY_POSTS,
    filteredPosts,
    category
})

const getPostDetailSuccess = (post) => ({
    type: constant.GET_POST_DETAIL,
    post
})

const editPostSuccess = (post) => ({
    type: constant.EDIT_POST,
    post
})

export const getAllPosts = () => dispatch => {
    return api.getAllPost()
        .then(response => {
            dispatch(getAllPostsSuccess(response.data))
            return response.data
        });
}

export const getFilteredPosts = (category) => dispatch =>  {
    return api.getCategoryPosts(category)
        .then(response => {
            dispatch(getAllFilteredPostsSuccess(response.data, category))
            return response.data
        })
}

export const getPostDetail = (idPost) => dispatch => {
    return api.getPostDetail(idPost)
        .then(response => {
            dispatch(getPostDetailSuccess(response.data))
            return response.data
        })
}

export const editPost = (post) => dispatch => {
    return api.editPost(post)
        .then(response => {
            dispatch(editPostSuccess(response.data))
            return response.data
        })
}

