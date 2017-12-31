import React from 'react'
import { formateDate } from '../../Utils/utils'

 function CommentsList(props) {

    function renderCommentsItems (comments = []) {
        return comments.map(comment => {
            let {
                id,
                parentId,
                timestamp,
                body,
                author,
                voteScore} = comment
            
            return(
                <div key={id} >
                    <div className='body'>{body}</div>
                    <div className='author'>{author}</div>
                    <div className='score'>{voteScore}</div>
                    <div className='date'>{formateDate(timestamp)}</div>
                </div>
            )
        })
    }

    return (
        <div className='comments-list' >
            {renderCommentsItems(props.comments)}
        </div>
    )}

export default CommentsList