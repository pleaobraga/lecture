import * as api from '../../Utils/apiUtils'
import * as constant from '../../Utils/constants'

const getPostCommentsSuccess = (comments) => ({
    type: constant.GET_POST_COMMENTS,
    comments
})

export const getPostComments = (idPost) => dispatch => {
    return api.getPostComments(idPost)
        .then(response => {
            dispatch(getPostCommentsSuccess(response.data))
            return response.data
        })
}