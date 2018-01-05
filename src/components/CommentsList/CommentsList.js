import React from 'react'
import { formateDate } from '../../Utils/utils'
import './style/comment-list.css'

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
                <div key={id} className="comment-item"  >
                    <p className='body'>{body}</p>
                    <footer>
                        <div className="post-data" >
                            <div className='author'>{author}</div>
                            <div className='date'>{formateDate(timestamp)}</div>
                        </div>
                        <div className='score-area'>
                            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                            <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true" ></i>
                            <span className="score" >{voteScore}</span>
                        </div>
                        <button><i className="fa fa-pencil" aria-hidden="true"></i>Edit Post</button>
                    </footer>
                   
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