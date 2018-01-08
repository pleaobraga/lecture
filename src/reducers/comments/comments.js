import * as constant from '../../Utils/constants'
import { sortListByAttribute } from '../../Utils/utils'
import _ from 'lodash'

const comments = function(state = {}, action) {

    let { comments } = state
    
    switch(action.type) {
        case constant.GET_POST_COMMENTS: 
            let activatedComments = action.comments.filter(comment => comment.deleted === false)
            activatedComments = sortListByAttribute(activatedComments, 'voteScore');
            return {...state, comments: activatedComments}
        case constant.EDIT_COMMENT:
            const index =_.findIndex(comments, comment => comment.id === action.comment.id );
            comments[index] = action.comment;
            return{...state, comments}
        case constant.CREATE_COMMENT:
            comments.push(action.comment)
            return{...state, comments}
        default:
            return state
    }
}

export default comments