import React from 'react'
import { formateDate } from '../../../Utils/utils'
import './style/post-list.css'

function PostList (props) {

    function renderPostItem(posts = []) {
        return posts.map( post => {
            return(
                <div key= {post.id} className='post-item' >
                    <div className='main-informations' >
                        <h3 className='title' >{post.title}</h3>
                        <div className='author-date-informations' >
                            <h5 className='author'>{post.author}  </h5>
                            <h5 className='date' > {formateDate(post.timestamp)} </h5>
                        </div>
                    </div>
                    <div className='second-informations' >
                        <span className='score' >{post.voteScore}</span>
                        <span className='category'>{post.category}</span>
                        <span className='comments'>{post.commentCount}</span>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='post-list'>
            {renderPostItem(props.posts)}
        </div>
    );
}

export default PostList