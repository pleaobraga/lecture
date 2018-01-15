import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../../../actions'
import uuidv1 from 'uuid/v1'
import './style/comments-form.css'

export class CommentsForm extends Component {

    constructor() {
        super()
        this.state = { 
            comment: {
                id: '',
                parentId: '',
                timestamp: '',
                body: '',
                author: '',
                voteScore: '',
                deleted: false
            },
            currentComment: {
                id: '',
                parentId: '',
                timestamp: '',
                body: '',
                author: '',
                voteScore: '',
                deleted: false
            },
            emptyField: { 
                author: true, 
                body: true 
            },
            submited: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let { comment } = this.state
        comment[name] = value
    
        this.setState({comment});

        this.setCommentFields(comment)
    }
    
    handleSubmit(event) {
        event.preventDefault();
    
        let { comment, submited } = this.state

        submited === false ? this.setState({submited: true}) : ''

        if(this.props.comment) {
            //case comment was not modify and press submit button dont call the api 
            _.isEqual(this.props.comment, comment) ? this.props.cancel(comment) : this.editComment(comment)
        } else {
            comment.timestamp = new Date().getTime()
            comment.id = uuidv1()
            comment.parentId = this.props.idPost

            this.createComment(comment)
        }
    }

  
    componentDidMount() {
        const { comment } = this.props 

        //certify the comment recieve from props will not update the atual comment
        if(comment) {
            const copyCorrentComment = Object.assign({}, comment);
            this.setState({currentComment: comment, comment: copyCorrentComment, submited: true})
            this.setCommentFields(comment)
        }
    }

    createComment(comment) {
        if(!this.hasCommentFiedsError()) 
            this.props.createComment(comment)
                .then(() => {  
                    this.props.getPostDetail(this.props.idPost)
                    this.props.cancel(comment)
                })
                .catch(error => {
                    console.log(error)
                }) 
    }

    editComment(comment) {
        if(!this.hasCommentFiedsError()) 
            this.props.editComment(comment)
                .then(response => {
                    this.props.cancel(comment)
                })
                .catch(error => {
                    console.log(error)
                })
    }

    setCommentFields(post) {

        let { emptyField } = this.state

        emptyField.author = post.author.length === 0  ? true  : false
        emptyField.body = post.body.length === 0 ? true  : false
        
        this.setState({emptyField})
    }

    hasCommentFiedsError() {
        const { emptyField } = this.state
        let hasError = false 
        
        _.forIn(emptyField, (value, key) => {
            if(value === true) hasError = true 
        })

        return hasError
    }


    render() {
        let { body, author } = this.state.comment,
            { comment, cancel } = this.props,
            { emptyField, submited } = this.state
 

        return (
            <div className='comments-form' >
                <form className='form-content' onSubmit={this.handleSubmit} >
                    <div className={`row ${emptyField.author && submited ? 'error' : '' }`} >
                        <label>Author</label>
                        <input 
                            name="author"
                            value={author}
                            onChange={this.handleInputChange}  /> 
                    </div>
                    <div className={`row ${emptyField.body && submited ? 'error' : '' }`} >
                        <label>Content</label>
                        <textarea 
                            name="body"
                            value={body}
                            onChange={this.handleInputChange}  /> 
                    </div>
                    <div className='action-buttons' >
                        <button  className='submit'  type="submit" >Submit</button>
                        <button 
                            className='reset' 
                            type='button' 
                            onClick={() => cancel(comment)} >
                            Cancel
                        </button>       
                    </div>        
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    editComment: (comment) => dispatch(actions.comments.editComment(comment)),
    createComment: (comment) => dispatch(actions.comments.createComment(comment)),
    getPostDetail: (idPost) => dispatch(actions.post.getPostDetail(idPost))
})
  
  
export default connect(null, mapDispatchToProps)(CommentsForm);
