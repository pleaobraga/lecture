import commentReducer from '../comments'
import * as constant from '../../../Utils/constants'

describe('commentReducer', () => {
    
    let comments = [{ id: 1, deleted: false }, { id: 1, deleted: true}  ];

    it('set only non deleted comments', () => {

        const commentsAction = {type: constant.GET_POST_COMMENTS, comments}

        expect(commentReducer({}, commentsAction)).toEqual({ comments: [comments[0]]})

    })
})