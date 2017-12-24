import * as api from '../Utils/apiUtils'
import * as constant from '../Utils/constants'


const getAllPostsSuccess = (post) => ({
    type: constant.GET_ALL_POSTS, 
    post
})

export const getAllPosts = () => dispatch => {
    return api.getAllPost()
        .then(response => {
        dispatch(getAllPostsSuccess(response.data))
        return response.data
    });
}

