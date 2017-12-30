import React from 'react'
import { formateDate } from '../../../Utils/utils'


export function PostDetail(props) {

    if(props.post) {

        let { title, 
            body, 
            author, 
            cathegory, 
            voteScore, 
            commentCount, 
            timestamp } = props.post

        return (
            <div>
                <div className='title'>{title}</div>
                <div className='author'>{author}</div>
                <div className='date'>{formateDate(timestamp)}</div>
                <div className='category'>{cathegory}</div>
                <div className='score'>{voteScore}</div>
                <div className='body'>{body}</div>
            </div>
        )
    } else {
        return null
    }
}

export default PostDetail