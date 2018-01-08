import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatedate } from '../../../Utils/utils'
import * as api from '../../../Utils/apiUtils'
import { Link, withRouter  } from 'react-router-dom'
import _ from 'lodash'
import * as actions from '../../../actions'
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
    }
    
    handleSubmit(event) {
        event.preventDefault();
    
        let { comment } = this.state

        if(this.props.comment) {
            
            _.isEqual(this.props.comment, comment) ? this.props.cancelEdit(comment) : this.editComment(comment)
            
        } else {
            comment.timestamp = new Date().getTime()
            comment.id = 1

            this.createComment(comment)
        }
    }

  
    componentDidMount() {
        const { comment } = this.props 

        if(comment) {
            const copyCorrentComment = Object.assign({}, comment);
            this.setState({currentComment: comment, comment: copyCorrentComment})
        }
    }

    createComment(comment) {
        api.createNewComment(comment)
            .then(respose => {  
                //this.backToHomePage()
                return Response.data
            })
            .catch(error => {
                console.log(error)
            }) 
    }

    editComment(comment) {
        this.props.editComment(comment)
            .then(response => {
                this.props.cancelEdit(comment)
            })
    }

    backToHomePage() {
        this.props.history.push(`/`);
    }

    cancelModifications() {
        const { currentComment } = this.state 
        const copyCorrentComment = Object.assign({}, currentComment);
        this.setState({comment: copyCorrentComment})
    }

    render() {

        let { 
              body,
              author,
              category } = this.state.comment,
            { cancelModifications } = this,
            { comment, cancelEdit } = this.props 

        return (
            <div className='comments-form' >
                <form className='form-content' onSubmit={this.handleSubmit} >
                    <div className='row' >
                        <div>
                            <label>Author</label>
                            <input 
                                name="author"
                                value={author}
                                onChange={this.handleInputChange}  /> 
                        </div>
                    </div>
                    <div className='row' >
                        <label>Body</label>
                        <textarea 
                            name="body"
                            value={body}
                            onChange={this.handleInputChange}  /> 
                    </div>
                    <button  className='submit'  type="submit" >Submit</button>
                            { comment && <button className='reset' type='button'  onClick={() => cancelEdit(comment)} >Cancel</button>}               
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    editComment: (comment) => dispatch(actions.comments.editComent(comment))
})
  
  
export default connect(null, mapDispatchToProps)(CommentsForm);
