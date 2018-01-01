import React from 'react'
import { formateDate } from '../../../Utils/utils'
import './style/post-detail.css'

function PostDetail(props) {

    if(props.post) {

        let { title, 
            body, 
            author, 
            category, 
            voteScore, 
            commentCount, 
            timestamp } = props.post

        return (
            <div className="post-detail" >
                <div className="header-post" >
                    <h3 className={`category ${category}-category`}>{category}</h3>
                    <h3 className='author'><i className="fa fa-user" aria-hidden="true"></i> {author}</h3>
                    <h3 className='date'><i className="fa fa-calendar" aria-hidden="true"></i> {formateDate(timestamp)}</h3>
                </div>
                <h1 className='title'>{title}</h1>
                <p className='body'>{body}</p>
                <footer>
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
    } else {
        return null
    }
}

export default PostDetail