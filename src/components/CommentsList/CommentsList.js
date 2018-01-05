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
                            <h5 className='author'><i className="fa fa-user" aria-hidden="true"></i> {author}  </h5>
                            <h5 className='date' ><i className="fa fa-calendar" aria-hidden="true"></i> {formateDate(timestamp)} </h5>
                        </div>
                        <div className="right-area" >
                            <div className='score-area'>
                                <i className="fa fa-star" aria-hidden="true" ></i>
                                <span className="score" >{voteScore}</span>
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                            </div>
                            <button><i className="fa fa-pencil" aria-hidden="true"></i>Edit Post</button>
                        </div>
                    </footer>
                </div>
            )
        })
    }

    return (
        <div className='comments-list' >
            <h3>Comments</h3>
            {renderCommentsItems(props.comments)}
        </div>
    )}

export default CommentsList