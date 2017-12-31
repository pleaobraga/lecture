import * as constant from '../../../Utils/constants'
import * as actions from '../comments'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { config } from '../../../Utils/apiUtils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const createMockStore = configureMockStore([thunk])
let store = createMockStore({ comments: [] })

const comment = [{
    "id": "894tuq4ut84ut8v4t8wun89g",
    "parentId": "8xf0y6ziyjabvozdd253nd",
    "timestamp": 1468166872634,
    "body": "Hi there! I am a COMMENT.",
    "author": "thingtwo",
    "voteScore": 6,
    "deleted": false,
    "parentDeleted": false
}]

const mock = new MockAdapter(axios)

describe('actions Comments', () => {

    const idPost = '8xf0y6ziyjabvozdd253nd'

    beforeEach(() => {
        store = createMockStore({ comments: [] })
    })

    it('getPostComments', () => {

        mock
            .onGet(`${constant.URL_BASE}/posts/${idPost}/comments`)
            .reply(() => {
                return new Promise(function(resolve, reject) {
                    resolve([200, comment, config])
                })
            });

        let expectedAction = [{ comments: comment, type: constant.GET_POST_COMMENTS  }]
        
        return store.dispatch(actions.getPostComments(idPost)).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })

})

