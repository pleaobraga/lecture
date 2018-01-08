import * as constant from '../../Utils/constants'
import { sortListByAttribute } from '../../Utils/utils'
import _ from 'lodash'

const posts = function(state = {}, action) {

    switch(action.type) {
        case constant.GET_ALL_POSTS: 
            let activatedPosts = action.posts.filter(post => post.deleted === false)
            activatedPosts = sortListByAttribute(activatedPosts, 'voteScore');
            return {...state, posts: activatedPosts};
        case constant.GET_CATEGORY_POSTS:
            return {...state, filteredPosts: action.filteredPosts}
        case constant.GET_POST_DETAIL:
            return {...state, postDetail: action.post}
        case constant.EDIT_POST:
            return {...state, postDetail: action.post}
        default: 
            return state
    }
}

export default posts;