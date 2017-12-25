import * as api from '../../Utils/apiUtils'
import * as constant from '../../Utils/constants'


const getAllPostsSuccess = (posts) => ({
    type: constant.GET_ALL_POSTS, 
    posts
})

export const getAllPosts = () => dispatch => {
    return api.getAllPost()
        .then(response => {
            dispatch(getAllPostsSuccess(response.data))
            return response.data
        });
}

