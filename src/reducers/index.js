import { combineReducers } from 'redux'
import post from './post/post'
import comments from './comments/comments'

export default combineReducers({ post, comments })