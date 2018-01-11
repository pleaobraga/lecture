import * as constant from '../../Utils/constants'
import { sortListByAttribute } from '../../Utils/utils'
import _ from 'lodash'

const comments = function(state = {}, action) {
    let { comments } = state,
        index,
        activatedComments

    switch(action.type) {
        case constant.GET_POST_COMMENTS: 
            activatedComments = action.comments.filter(comment => comment.deleted === false)
            activatedComments = sortListByAttribute(activatedComments, 'voteScore')
            return {...state, comments: activatedComments}
        
        case constant.EDIT_COMMENT:
            index =_.findIndex(comments, comment => comment.id === action.comment.id )
            comments[index] = action.comment
            return{...state, comments}

        case constant.CREATE_COMMENT:
            comments.push(action.comment)
            return{...state, comments}

        case constant.VOTE_COMMENT: 
            index =_.findIndex(comments, comment => comment.id === action.comment.id )
            action.comment.voted = action.vote.split('Vote')[0]
            comments[index] = action.comment;
            return {...state, comments}

        case constant.DELETE_COMMENT:
            index =_.findIndex(comments, comment => comment.id === action.comment.id )
            comments[index] = action.comment;
            activatedComments = comments.filter(comment => comment.deleted === false)
            activatedComments = sortListByAttribute(activatedComments, 'voteScore')
            return {...state, comments: activatedComments}

        default:
            return state
    }
}

export default comments