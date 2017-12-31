import * as constant from '../../Utils/constants'

const comments = function(state = {}, action) {
    
    switch(action.type) {
        case constant.GET_POST_COMMENTS: 
            let activatedComments = action.comments.filter(comment => comment.deleted === false)
            return {...state, comments: activatedComments}
        default:
            return state
    }
}

export default comments