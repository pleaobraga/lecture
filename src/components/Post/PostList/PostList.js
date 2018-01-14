import React  from 'react'
import * as utils from '../../../Utils/utils'
import { withRouter } from 'react-router-dom'
import './style/post-list.css'


export function PostList(props) {

    function showPostDetail (category, id) {
        props.history.push(`/${category}/${id}`);
    }

    function renderPostItem(posts = []) {
        return utils.sortListByAttribute(posts, props.order).map( post => {
            return(
                <div key= {post.id} className='post-item' 
                     onClick={() => showPostDetail(post.category, post.id)} 
                    >
                    <div className='main-informations' >  
                        <h3 className='title' >{post.title}</h3>
                        <div className='author-date-informations' >
                            <h5 className='author'><i className="fa fa-user" aria-hidden="true"></i> {post.author}  </h5>
                            <h5 className='date' ><i className="fa fa-calendar" aria-hidden="true"></i> {utils.formateDate(post.timestamp)} </h5>
                        </div>
                    </div>
                    <div className='second-informations' >
                        <span className={`category ${post.category}-category`}>{utils.captalizeFirstLetter(post.category)}</span>
                        <div className='comments-stars' >
                            <span className='score' ><i className="fa fa-star" aria-hidden="true"></i> {post.voteScore}</span>
                            <span className='comments'><i className="fa fa-comments" aria-hidden="true"></i> {post.commentCount}</span>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='post-list' >
            {renderPostItem(props.posts)}
        </div>
    )
}

export default withRouter(PostList)