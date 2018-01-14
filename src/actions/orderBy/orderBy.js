import * as constant from '../../Utils/constants'

const orderBy = name => ({
    type: constant.ORDER_BY_POSTS,
    name
})

export const orderByPosts = name => dispatch => {
    dispatch(orderBy(name))
}