import * as constant from './constants'
import axios from 'axios'

export const config = {
    headers: { Authorization: constant.AUTORIZATION }
}

export const getCategory = () => {
    return axios.get(`${constant.URL_BASE}/categories`, config);
}

export const getAllPost = () => {
    return axios.get(`${constant.URL_BASE}/posts`, config);
}

export const getCategoryPosts = (category) => {
    return axios.get(`${constant.URL_BASE}/${category}/posts`, config);
}

export const getPostDetail = (idPost) => {
    return axios.get(`${constant.URL_BASE}/posts/${idPost}`, config);
}

export const getPostComments = (idPost) => {
    return axios.get(`${constant.URL_BASE}/posts/${idPost}/comments`, config);
}

export const createNewPost = (post) => {
    return axios.post(`${constant.URL_BASE}/posts/`, post, config)
}