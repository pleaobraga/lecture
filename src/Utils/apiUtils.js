import * as constant from './constants'
import axios from 'axios'

//config Request
export const config = {
    headers: { Authorization: constant.AUTORIZATION }
}

//category Request
export const getCategory = () => {
    return axios.get(`${constant.URL_BASE}/categories`, config);
}

export const getCategoryPosts = category => {
    return axios.get(`${constant.URL_BASE}/${category}/posts`, config);
}


//Post Request
export const getAllPost = () => {
    return axios.get(`${constant.URL_BASE}/posts`, config);
}

export const getPostDetail = idPost => {
    return axios.get(`${constant.URL_BASE}/posts/${idPost}`, config);
}

export const createNewPost = post => {
    return axios.post(`${constant.URL_BASE}/posts/`, post, config)
}

export const editPost = post => {
    return axios.put(`${constant.URL_BASE}/posts/${post.id}`, post, config)
}

export const votePost = (vote, idPost) => {
    return axios.post(`${constant.URL_BASE}/posts/${idPost}`, vote, config)
}

export const deletePost = idPost => {
    return axios.delete(`${constant.URL_BASE}/posts/${idPost}`, config)
}


//Comment Request
export const getPostComments = idPost => {
    return axios.get(`${constant.URL_BASE}/posts/${idPost}/comments`, config);
}

export const editComment = comment => {
    return axios.put(`${constant.URL_BASE}/comments/${comment.id}`, comment, config)
}

export const createNewComment = comment => {
    return axios.post(`${constant.URL_BASE}/comments/`, comment, config)
}

export const voteComment = (vote, idComment) => {
    return axios.post(`${constant.URL_BASE}/comments/${idComment}`, vote, config)
}

export const deleteComment = idComment => {
    return axios.delete(`${constant.URL_BASE}/comments/${idComment}`, config)
}
