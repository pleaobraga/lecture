import * as api from '../../Utils/apiUtils'
import * as constant from '../../Utils/constants'

const getPostCommentsSuccess = (comments) => ({
    type: constant.GET_POST_COMMENTS,
    comments
})

const editCommentSuccess = (comment) => ({
    type: constant.EDIT_COMMENT,
    comment
})

export const getPostComments = (idPost) => dispatch => {
    return api.getPostComments(idPost)
        .then(response => {
            dispatch(getPostCommentsSuccess(response.data))
            return response.data
        })
}

export const editComent = (comment) => dispatch => {
    return api.editComment(comment)
        .then(response => {
            dispatch(editCommentSuccess(response.data))
            
            return Response.data
        })
}