import * as constant from './constants'
import axios from 'axios'

export const config = {
    headers: { Authorization: constant.AUTORIZATION }
}

export const getCategory = () => {

    axios.get(`${constant.URL_BASE}/categories`, config)
        .then( category => category );
}