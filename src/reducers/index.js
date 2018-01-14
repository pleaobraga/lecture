import { combineReducers } from 'redux'
import post from './post/post'
import comments from './comments/comments'
import orderBy from './orderBy/orderBy'

export default combineReducers({ post, comments, orderBy })