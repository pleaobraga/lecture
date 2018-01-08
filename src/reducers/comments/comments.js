import * as constant from '../../Utils/constants'
import { sortListByAttribute } from '../../Utils/utils'
import _ from 'lodash'

const comments = function(state = {}, action) {
    
    switch(action.type) {
        case constant.GET_POST_COMMENTS: 
            let activatedComments = action.comments.filter(comment => comment.deleted === false)
            activatedComments = sortListByAttribute(activatedComments, 'voteScore');
            return {...state, comments: activatedComments}
        case constant.EDIT_COMMENT:
            let { comments } = state
            const index =_.findIndex(comments, comment => comment.id === action.comment.id );
            comments[index] = action.comment;
            return{...state, comments}
        default:
            return state
    }
}

export default comments