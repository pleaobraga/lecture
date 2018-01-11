import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as api from '../../../Utils/apiUtils'
import { withRouter} from 'react-router-dom'
import * as actions from '../../../actions'
import _ from 'lodash'
import uuidv1 from 'uuid/v1'
import './style/post-form.css'

export class PostForm extends Component {

    constructor() {
        super()
        this.state = { 
            post: {
                id: '',
                timestamp: '',
                title: '',
                body: '',
                author: '',
                category: 'react',
                voteScore: '',
                deleted: false,
                commentCount: ''
            },
            currentPost: {
                id: '',
                timestamp: '',
                title: '',
                body: '',
                author: '',
                category: 'react',
                voteScore: '',
                deleted: false,
                commentCount: ''
            },
            emptyField: { 
                title: true, 
                author: true, 
                body: true 
            },
            categories: [],
            submited: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let { post } = this.state
        post[name] = value
    
        this.setState({post});

        this.setPostFields(post)
    }
    
    handleSubmit(event) {
        event.preventDefault();
    
        let { post } = this.state

        this.setState({submited: true})

        if(this.props.post) {
            //case post was not modify and press submit button dont call the api 
            _.isEqual(this.props.post, post) ? this.props.editingPost(false) : this.editPost(post)
            
        } else {
            post.timestamp = new Date().getTime()
            post.id = uuidv1()

            this.createPost(post)
        }
    }

  
    componentDidMount() {
        this.setCategory();

        const { post } = this.props 

        //certify the post recieve from props will not update the atual post
        if(post) {
            const copyCorrentPost = Object.assign({}, post);
            this.setState({currentPost: post, post: copyCorrentPost, submited: true })
            this.setPostFields(post)
        }
    }

    setCategory() {
        api.getCategory()
            .then( response => {
                this.setState({ categories: response.data.categories})  
            })
            .catch(error => {
                console.log(error)
            }) 
    }

    createPost(post) {
        api.createNewPost(post)
            .then(respose => {  
                this.backToHomePage()
                return Response.data
            })
            .catch(error => {
                console.log(error)
            }) 
    }

    editPost(post) {
        if(!this.hasPostFiedsError()) 
            this.props.editPost(post)
                .then(response => { 
                    this.props.editingPost(false)
                })
                .catch(error => {
                    console.log(error)
                })
    }

    setPostFields(post) {

        let { emptyField } = this.state

        emptyField.title = post.title.length === 0 ? true  : false
        emptyField.author = post.author.length === 0  ? true  : false
        emptyField.body = post.body.length === 0 ? true  : false
        
        this.setState({emptyField})
    }

    hasPostFiedsError() {
        const { emptyField } = this.state
        let hasError = false 
        
        _.forIn(emptyField, (value, key) => {
            if(value === true) hasError = true 
        })

        return hasError
    }

    backToHomePage() {
        this.props.history.push(`/`);
    }

    render() {

        let { categories, emptyField, submited } = this.state,
            { 
              title,
              body,
              author,
              category } = this.state.post,
            { post, editingPost } = this.props 

        return (
            <div className='post-form' >
                <h3 className='title' >Post Form</h3>
                <form className='form-content' onSubmit={this.handleSubmit} >
                    <div className={`row ${emptyField.title && submited ? 'error' : '' }`} >
                        <label>Title</label>
                        <input 
                            className='title'
                            name="title"
                            value={title}
                            onChange={this.handleInputChange}  />
                    </div>
                    <div className='two-proprieties row' >
                        <div className={emptyField.author && submited ? 'error' : ''} >
                            <label>Author</label>
                            <input 
                                name="author"
                                value={author}
                                onChange={this.handleInputChange}  /> 
                        </div>
                        <div>
                            <label>Category</label>
                            <select name="category" value={category} onChange={this.handleInputChange}  >
                                {categories.map(category => {
                                    const { name } = category
                                    return <option key={name} value={name} >{name}</option>
                                })}
                            </select>
                        </div>
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
                        { 
                            post && 
                            <button className='reset' type='button'  onClick={() => editingPost(false)} >Cancel</button> 
                        }   
                    </div>                                
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    editPost: post => dispatch(actions.post.editPost(post)) 
})

export default withRouter(connect(null, mapDispatchToProps)(PostForm))
