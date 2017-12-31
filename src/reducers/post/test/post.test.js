import postReducer from '../post'
import * as constant from '../../../Utils/constants'

describe('postReducer', () => {

    let posts = [{ id: 1, deleted: false, category: 'react' }, {id: 2, deleted: false, category: 'redux' }];

    it('fetches and sets all post', () => {

        const postAction = {type: constant.GET_ALL_POSTS, posts}

        expect(postReducer({}, postAction)).toEqual({posts});
    })

    it('set only non deleted posts', () => {

        posts = [{ id: 1, deleted: true }, {id: 2, deleted: true }];

        const postAction = {type: constant.GET_ALL_POSTS, posts: posts}

        expect(postReducer({}, postAction)).toEqual({posts:[]});
    })

    it('filter category', () => {
        
        const postAction = {type: constant.GET_CATEGORY_POSTS, category: 'react', filteredPosts: posts[0] }
        
        expect(postReducer({}, postAction)).toEqual({filteredPosts: posts[0]})
    })

    it('fetch and set detail post', () => {
        
        const postAction = {type:constant.GET_POST_DETAIL, post: posts[0] } 

        expect(postReducer({}, postAction)).toEqual({postDetail: posts[0]})
    })
})