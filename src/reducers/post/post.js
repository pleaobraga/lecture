import * as constant from '../../Utils/constants'

const posts = (state = [], action) => {

    switch(action.type) {
        case constant.GET_ALL_POSTS: 
            let activatedPosts = action.posts.filter(post => post.deleted === false)
            return activatedPosts;
        default: 
            return state
    }
}

export default posts;