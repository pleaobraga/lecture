import * as constant from '../../Utils/constants'

const orderBy = function(state = {name: 'voteScore'}, action) {

    switch(action.type) {
        case constant.ORDER_BY_POSTS:
            return {...state, name: action.name}

        default: 
            return state
    }
}

export default orderBy;