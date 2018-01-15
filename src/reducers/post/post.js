import * as constant from '../../Utils/constants'
import { sortListByAttribute } from '../../Utils/utils'
import _ from 'lodash'
import { constants } from 'zlib';

const posts = function(state = {}, action) {

    let { posts } = state
    let index

    switch(action.type) {
        case constant.GET_ALL_POSTS: 
            let activatedPosts = action.posts.filter(post => post.deleted === false)
            return {...state, posts: activatedPosts}

        case constant.GET_CATEGORY_POSTS:
            return {...state, filteredPosts: action.filteredPosts}

        case constant.GET_POST_DETAIL:
            return {...state, postDetail: action.post}

        case constant.EDIT_POST:
            index = _.findIndex(posts, post => post.id === action.post.id )
            posts[index] = action.post
            return {...state, postDetail: action.post, posts}

        case constant.VOTE_POST:
            action.post.voted = action.vote.split('Vote')[0] 
            index = _.findIndex(posts, post => post.id === action.post.id )
            posts[index] = action.post
            return {...state, postDetail: action.post, posts}
            
        case constant.DELETE_POST:
            index =_.findIndex(posts, post => post.id === action.post.id )
            posts[index] = action.post;
            activatedPosts = posts.filter(post => post.deleted === false)
            activatedPosts = sortListByAttribute(activatedPosts, 'voteScore')
            return {...state, posts: activatedPosts} 
        
        default: 
            return state
    }
}

export default posts;