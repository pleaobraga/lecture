import React from 'react'
import { formateDate, captalizeFirstLetter } from '../../../Utils/utils'
import './style/post-detail.css'
import { connect } from 'react-redux' 
import { withRouter } from 'react-router-dom'
import * as actions from '../../../actions' 
import * as api from '../../../Utils/apiUtils'
import _ from 'lodash'

function PostDetail(props) {

    function voteOnPost(vote, post) {
        if((post.voted && post.voted !== vote.split('Vote')[0]) || !post.voted )
            props.votePost(vote, post)
                .then((newPost) => {
                    props.editPost(newPost)
                })
                .catch(erro => console.log(erro))
    }


    function deletPost() {
        props.deletePost(props.post.id)
            .then(() => {
                props.history.push(`/`);
            })
    }

    if(props.post) {

        if(_.isEmpty(props.post)) {
            
            return (
                <div className="post-detail" >
                    <h3 className="title deleted" >This post was deleted</h3>
                </div>
            )

        } else {

            let { title, 
                body, 
                author, 
                category, 
                voteScore, 
                commentCount,
                timestamp } = props.post
    
            return (
                <div className="post-detail" >
                    <h3 className="title" >Post Detail</h3>
                    <div className="post-content" >
                        <div className="header-post" >
                            <h3 className={`category ${category}-category`}>{captalizeFirstLetter(category)}</h3>
                            <h3 className='author'><i className="fa fa-user" aria-hidden="true"></i> {author}</h3>
                            <h3 className='date'><i className="fa fa-calendar" aria-hidden="true"></i> {formateDate(timestamp)}</h3>
                        </div>
                        <h1 className='title'>{title}</h1>
                        <p className='body'>{body}</p>
                        <footer>
                            <div className='score-area'>
                                <i 
                                    className={`fa fa-thumbs${props.post.voted && props.post.voted === 'up' ? '' : '-o'  }-up`}  
                                    aria-hidden="true" 
                                    onClick={() => voteOnPost('upVote', props.post)} >
                                </i>
                                <i className={`fa fa-thumbs${props.post.voted && props.post.voted === 'down' ? '' : '-o'  }-down`}
                                    aria-hidden="true" 
                                    onClick={() => voteOnPost('downVote', props.post)} >
                                </i>
                                <i className="fa fa-star" aria-hidden="true" ></i>
                                <span className="score" >{voteScore}</span>
                            </div>
                            <div className='score-area' >
                                <i className="fa fa-comments" aria-hidden="true" ></i>
                                <span>{commentCount}</span>
                            </div>
                            <div className='action-buttons' >
                                <button 
                                    className='edit' 
                                    onClick={() => props.editingPost(true)} >
                                    Edit
                                </button>
                                <button
                                    className="delete" 
                                    onClick={() => deletPost(true)} >
                                    Remove
                                </button>
                            </div>
                        </footer>
                    </div>
                </div>
            )
        } 
    } else {
        return null
    }
}

const mapDispatchToProps = dispatch => ({
    votePost: (vote, post) => dispatch(actions.post.votePost(vote, post)),
    editPost: post => dispatch(actions.post.editPost(post)),
    deletePost: (idPost) => dispatch(actions.post.deletePost(idPost)) 
})

export default withRouter(connect(null, mapDispatchToProps)(PostDetail))