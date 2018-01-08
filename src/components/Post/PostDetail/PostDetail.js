import React from 'react'
import { formateDate } from '../../../Utils/utils'
import { votePost } from '../../../Utils/apiUtils'
import './style/post-detail.css'

function PostDetail(props) {

    function voteOnPost(vote, post) {
        votePost({option: vote}, post.id)
            .then(response => {
                let likeVote = vote.split('Vote')[0] 
                changeVoteIcon(likeVote)
                return response;
            })
            .catch(erro => console.log(erro))
    }

    function changeVoteIcon(vote) {

        const oposite = vote ==='up' ? 'down' : 'up'

        document.getElementById(`post-vote-${vote}`).classList.remove(`fa-thumbs-o-${vote}`)  
        document.getElementById(`post-vote-${vote}`).classList.add(`fa-thumbs-${vote}`)  
       
        document.getElementById(`post-vote-${oposite}`).classList.remove(`fa-thumbs-${oposite}`)
        document.getElementById(`post-vote-${oposite}`).classList.add(`fa-thumbs-o-${oposite}`)  
    }

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
                <h3 className="title" >Post Detail</h3>
                <div className="post-content" >
                    <div className="header-post" >
                        <h3 className={`category ${category}-category`}>{category}</h3>
                        <h3 className='author'><i className="fa fa-user" aria-hidden="true"></i> {author}</h3>
                        <h3 className='date'><i className="fa fa-calendar" aria-hidden="true"></i> {formateDate(timestamp)}</h3>
                    </div>
                    <h1 className='title'>{title}</h1>
                    <p className='body'>{body}</p>
                    <footer>
                        <div className='score-area'>
                            <i className="fa fa-thumbs-o-up" id='post-vote-up' aria-hidden="true" onClick={() => voteOnPost('upVote', props.post)} ></i>
                            <i className="fa fa-thumbs-o-down" id='post-vote-down' aria-hidden="true" onClick={() => voteOnPost('downVote', props.post)} ></i>
                            <i className="fa fa-star" aria-hidden="true" ></i>
                            <span className="score" >{voteScore}</span>
                        </div>
                        <button onClick={() => props.editingPost(true)} ><i className="fa fa-pencil" aria-hidden="true"></i>Edit Post</button>
                    </footer>
                </div>
            </div>
            
        )
    } else {
        return null
    }
}

export default PostDetail