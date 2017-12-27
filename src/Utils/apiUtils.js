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