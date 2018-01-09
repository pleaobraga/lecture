import React, { Component } from 'react'
import { formateDate } from '../../../Utils/utils'
import  CommentsForm from '../CommentsForm/CommentsForm'
import './style/comment-list.css'
import * as actions from '../../../actions'
import { connect } from 'react-redux'

 class CommentsList extends Component {

    constructor() {
        super()
        this.state = { editCommentList: [], createComment: false }
    }

    removeElementFromCommentList(comment) {
        const { editCommentList } = this.state
        const index = editCommentList.indexOf(comment.id);

        editCommentList.splice(index, 1);

        this.setState({editCommentList})
    }

    addElementToCommentList(comment) {
        const { editCommentList } = this.state
        editCommentList.push(comment.id)
        
        this.setState({editCommentList})
    }

    calcelCreateComment() {
        this.setState({createComment: false})
    }

    voteOnComment(vote, comment) {
        if((comment.voted && comment.voted !== vote.split('Vote')[0]) || !comment.voted )
            this.props.voteComment(vote, comment)
                .then((newComment) => {
                    this.forceUpdate()
                    this.props.editComment(newComment)
                })
                .catch(erro => console.log(erro))
    }

    renderComment (comment) {
        let {
              id,
              timestamp,
              body,
              author,
              voteScore 
            } = comment
        
        return(
            <div key={id} id={id} className="comment-item"  >
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
                            <i 
                                onClick={() => this.voteOnComment('upVote',comment)} 
                                className={`fa fa-thumbs${comment.voted && comment.voted === 'up' ? '' : '-o'}-up`} 
                                aria-hidden="true"></i>
                            <i 
                                onClick={ () => this.voteOnComment('downVote',comment)} 
                                className={`fa fa-thumbs${comment.voted && comment.voted === 'down' ? '' : '-o'}-down`} 
                                aria-hidden="true"></i>
                        </div>
                        <button onClick={() => this.addElementToCommentList(comment) } ><i className="fa fa-pencil" aria-hidden="true"></i>Edit Comment</button>
                    </div>
                </footer>
            </div>
        )
    }

    renderCommentsItems (comments = []) {
        return comments.map(comment => {
            return this.state.editCommentList.indexOf(comment.id) === -1  ? 
                this.renderComment(comment) 
                : <CommentsForm 
                    key={comment.id} 
                    comment={comment} 
                    idPost={this.props.idPost}  
                    cancel={this.removeElementFromCommentList.bind(this)} />
        })
    }

    render() {

        const { comments, idPost } =  this.props

        return (
            <div className='comments-list' >
                <h3>Comments</h3>
                { !this.state.createComment && 
                  <button 
                    className="create-comment"  
                    onClick={() => this.setState({createComment: true}) } >
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    Create Comment
                </button>
                }
                { this.state.createComment && 
                  <CommentsForm 
                    idPost={idPost}  
                    cancel={this.calcelCreateComment.bind(this)} />  }
                {this.renderCommentsItems(comments)}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    voteComment: (vote, comment) => dispatch(actions.comments.voteComment(vote, comment)),
    editComment: (comment) => dispatch(actions.comments.editComment(comment)),
})

export default connect(null, mapDispatchToProps)(CommentsList)