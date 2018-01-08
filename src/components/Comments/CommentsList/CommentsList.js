import React, { Component } from 'react'
import { formateDate } from '../../../Utils/utils'
import  CommentsForm from '../CommentsForm/CommentsForm'
import './style/comment-list.css'

 class CommentsList extends Component {

    constructor() {
        super()
        this.state = { editCommentList: [] }
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

    renderComment (comment) {
        let {
            id,
            timestamp,
            body,
            author,
            voteScore} = comment
        
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
                            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                        </div>
                        <button onClick={() => this.addElementToCommentList(comment) } ><i className="fa fa-pencil" aria-hidden="true"></i>Edit Comment</button>
                    </div>
                </footer>
            </div>
        )
    }

    renderCommentsItems (comments = []) {
        return comments.map(comment => {
            return this.state.editCommentList.indexOf(comment.id) === -1  ? this.renderComment(comment) : <CommentsForm key={comment.id} comment={comment} editComment={this.removeElementFromCommentList.bind(this)} />
        })
    }

    render() {
        return (
            <div className='comments-list' >
                <h3>Comments</h3>
                {this.renderCommentsItems(this.props.comments)}
            </div>
        )
    }
}

export default CommentsList