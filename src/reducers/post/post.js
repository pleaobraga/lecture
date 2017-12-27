import * as constant from '../../Utils/constants'

const posts = function(state = {}, action) {

    switch(action.type) {
        case constant.GET_ALL_POSTS: 
            let activatedPosts = action.posts.filter(post => post.deleted === false)
            return {...state, posts: activatedPosts};
        case constant.GET_CATEGORY_POSTS:
            return {...state, filteredPosts: action.filteredPosts}
        default: 
            return state
    }
}

export default posts;