import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatedate } from '../../../Utils/utils'
import * as api from '../../../Utils/apiUtils'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
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
            categories: []
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
    }
    
    handleSubmit(event) {
        event.preventDefault();
    
        let { post } = this.state

        if(this.props.post) {
            
            _.isEqual(this.props.post, post) ? this.props.editPost(false) : this.editPost(post)
            
        } else {
            post.timestamp = new Date().getTime()
            post.id = 1

            this.createPost(post)
        }
    }

  
    componentDidMount() {
        this.setCategory();

        const { post } = this.props 

        if(post) {
            const copyCorrentPost = Object.assign({}, post);
            this.setState({currentPost: post, post: copyCorrentPost})
        }
    }

    setCategory() {
        api.getCategory()
            .then( response => {
                this.setState({ categories: response.data.categories})  
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
        api.editPost(post)
            .then(response => { 
                window.location.reload(); 
                return response.data
            })
            .catch(error => {
                console.log(error)
            })
    }

    backToHomePage() {
        this.props.history.push(`/`);
    }

    cancelModifications() {
        const { currentPost } = this.state 
        const copyCorrentPost = Object.assign({}, currentPost);
        this.setState({post: copyCorrentPost})
    }

    render() {

        let { categories } = this.state,
            { 
              title,
              body,
              author,
              category } = this.state.post,
            { cancelModifications } = this,
            { post, editPost } = this.props 

        return (
            <div className='post-form' >
                <h3 className='title' >Post Form</h3>
                <form className='form-content' onSubmit={this.handleSubmit} >
                    <div className='row' >
                        <label>Title</label>
                        <input 
                            className='title'
                            name="title"
                            value={title}
                            onChange={this.handleInputChange}  />
                    </div>
                    <div className='two-proprieties row' >
                        <div>
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
                    <div className='row' >
                        <label>Body</label>
                        <textarea 
                            name="body"
                            value={body}
                            onChange={this.handleInputChange}  /> 
                    </div>
                    <button  className='submit'  type="submit" >Submit</button>
                            { post && <button className='reset' type='button'  onClick={() => editPost(false)} >Cancel</button>}               
                </form>
            </div>
        )
    }
}

export default withRouter(PostForm)