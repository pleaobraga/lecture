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
                    <h3 className='category'>{category}</h3>
                    <h3 className='author'>{author}</h3>
                    <h3 className='date'>{formateDate(timestamp)}</h3>
                </div>
                <h1 className='title'>{title}</h1>
                <p className='body'>{body}</p>
                <div className='score'>{voteScore}</div>
            </div>
        )
    } else {
        return null
    }
}

export default PostDetail