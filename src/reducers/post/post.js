import * as constant from '../../Utils/constants'
import { sortListByAttribute } from '../../Utils/utils'
import _ from 'lodash'
import { constants } from 'zlib';

const posts = function(state = {}, action) {

    let { posts, filteredPosts } = state
    let index, activatedPosts, activateFilteredPost

    switch(action.type) {
        case constant.GET_ALL_POSTS: 
            activatedPosts = action.posts.filter(post => post.deleted === false)
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
            index = _.findIndex(filteredPosts, post => post.id === action.post.id )
            index >= 0 ? filteredPosts[index] = action.post : null
            return {...state, postDetail: action.post, posts, filteredPosts}
            
        case constant.DELETE_POST:
            index =_.findIndex(posts, post => post.id === action.post.id )
            posts[index] = action.post;
            activatedPosts = posts.filter(post => post.deleted === false)
            index = _.findIndex(filteredPosts, post => post.id === action.post.id )
            index >= 0 ? filteredPosts[index] = action.post : null
            activateFilteredPost = filteredPosts.filter(post => post.deleted === false)
            return {...state, posts: activatedPosts, filteredPosts: activateFilteredPost} 
        
        default: 
            return state
    }
}

export default posts;