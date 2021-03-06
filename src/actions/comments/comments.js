import * as api from '../../Utils/apiUtils'
import * as constant from '../../Utils/constants'

const getPostCommentsSuccess = comments => ({
    type: constant.GET_POST_COMMENTS,
    comments
})

const editCommentSuccess = comment => ({
    type: constant.EDIT_COMMENT,
    comment
})

const createCommentSuccess = comment => ({
    type: constant.CREATE_COMMENT,
    comment
})

const voteCommentSuccess = (comment, vote) => ({
    type: constant.VOTE_COMMENT,
    comment,
    vote
})

const deleteCommentSuccess = comment => ({
    type: constant.DELETE_COMMENT,
    comment
})

export const getPostComments = idPost => dispatch => {
    return api.getPostComments(idPost)
        .then(response => {
            dispatch(getPostCommentsSuccess(response.data))
            return response.data
        })
        .catch( error => console.log(error))
}

export const editComment = comment => dispatch => {
    return api.editComment(comment)
        .then(response => {
            dispatch(editCommentSuccess(response.data))
            return response.data
        })
        .catch( error => console.log(error))
}

export const createComment = comment => dispatch => {
    return api.createNewComment(comment)
        .then(response => {
            dispatch(createCommentSuccess(response.data))
            return response.data
        })
        .catch( error => console.log(error))
}

export const voteComment = (vote, comment) => dispatch => {
    return api.voteComment({option: vote}, comment.id)
        .then(response => {
            dispatch(voteCommentSuccess(response.data, vote))
            response.data.voted = vote.split('Vote')[0]
            return response.data
        })
        .catch( error => console.log(error))
}

export const deleteComment = idComment => dispatch => {
    return api.deleteComment(idComment)
        .then(response => {
            dispatch(deleteCommentSuccess(response.data))
            return response.data
        })
        .catch( error => console.log(error))
}