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
            posts = editPost(posts, action.post)
            return {...state, postDetail: action.post, posts}

        case constant.VOTE_POST:
            action.post.voted = action.vote.split('Vote')[0] 
            posts = editPost(posts, action.post)
            filteredPosts = editPost(filteredPosts, action.post)
            return {...state, postDetail: action.post, posts, filteredPosts}
            
        case constant.DELETE_POST:
            posts = removePost(posts, action.post)
            filteredPosts = removePost(filteredPosts, action.post)
            return {...state, posts, filteredPosts} 
        
        default: 
            return state
    }
}

export default posts;


function editPost(posts = [] , newPost) {
    return posts.map( post => {
        if(post.id === newPost.id) post = newPost
        return post
    })
} 

function removePost(posts = [], newPost) {
    return posts.filter( post =>  post.id !== newPost.id )
} 