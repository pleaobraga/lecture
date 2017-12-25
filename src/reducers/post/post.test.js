import postReducer from './post'
import * as constant from '../../Utils/constants'

describe('postReducer', () => {

    let posts = [{ id: 1, deleted: false }, {id: 2, deleted: false }];

    it('fetches and sets all post', () => {

        const postAction = {type: constant.GET_ALL_POSTS, posts}

        expect(postReducer({}, postAction)).toEqual(posts);
    })

    it('set only non deleted posts', () => {

        posts = [{ id: 1, deleted: true }, {id: 2, deleted: true }];

        const postAction = {type: constant.GET_ALL_POSTS, posts: []}

        expect(postReducer({}, postAction)).toEqual([]);
    })
})