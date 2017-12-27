import * as constant from '../../Utils/constants'
import * as actions from './post'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { config } from '../../Utils/apiUtils'
import axios from 'axios'
import  MockAdapter  from 'axios-mock-adapter'

const createMockStore = configureMockStore([thunk])
let store = createMockStore({ post: [], filteredPosts: [] })

const post0 = [{
    "id": "8xf0y6ziyjabvozdd253nd",
    "timestamp": 1467166872634,
    "title": "Udacity is the best place to learn React",
    "body": "Everyone says so after all.",
    "author": "thingtwo",
    "category": "react",
    "voteScore": 6,
    "deleted": false,
    "commentCount": 2
 }]

 const mock = new MockAdapter(axios)


describe('actions posts', () => {

    beforeEach(() => {
       store = createMockStore({ post: [], filteredPosts: [] })
    })

    it('getAllPosts', () => {

        mock
            .onGet( `${constant.URL_BASE}/posts`)
            .reply(() => {
                return new Promise(function(resolve, reject) {
                    resolve([200, post0, config]);
                })
            });
        
        let expectedAction = [{ posts: post0, type: constant.GET_ALL_POSTS }]

        return store.dispatch(actions.getAllPosts()).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })

    it('getCategoryPosts', () => {

        let category = 'react'

        mock
            .onGet(`${constant.URL_BASE}/${category}/posts`)
            .reply(() => {
                return new Promise(function(resolve, reject) {
                    resolve([200, post0, config])
                })
            })

            let expectedAction = [{ category,  filteredPosts: post0, type: constant.GET_CATEGORY_POSTS }]

            return store.dispatch(actions.getFilteredPosts(category)).then(() => {
                expect(store.getActions()).toEqual(expectedAction)
            })

    })

}) 