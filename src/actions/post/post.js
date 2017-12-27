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

