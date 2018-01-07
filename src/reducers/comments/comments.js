import * as constant from '../../Utils/constants'
import { sortListByAttribute } from '../../Utils/utils'

const comments = function(state = {}, action) {
    
    switch(action.type) {
        case constant.GET_POST_COMMENTS: 
            let activatedComments = action.comments.filter(comment => comment.deleted === false)
            activatedComments = sortListByAttribute(activatedComments, 'voteScore');
            return {...state, comments: activatedComments}
        default:
            return state
    }
}

export default comments