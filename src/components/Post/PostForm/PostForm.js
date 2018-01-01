import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatedate } from '../../../Utils/utils'
import * as api from '../../../Utils/apiUtils'
import { Link } from 'react-router-dom'

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
        
        if(this.props.post) {

        } else {
            let { post } = this.state
            post.timestamp = new Date().getTime()
            post.id = 1

            this.createPost(post)
        }
    }

  
    componentDidMount() {
        this.setCategory();
    }

    setCategory() {
        api.getCategory()
            .then( response => {
                this.setState({ categories: response.data.categories})  
            })
    }

    componentWillReceiveProps(nextPops) {
        const { post } = nextPops.post 
        this.setState({post})
    }

    createPost(post) {
        api.createNewPost(post)
            .then(respose => {
                return Response.data
            })
            .catch(error => {
                console.log(error)
            }) 
    }

    render() {

        let { categories } = this.state
        let { 
            title,
            body,
            author,
            category } = this.state.post

        return (
            <form onSubmit={this.handleSubmit} >
                <div>
                    <label>Title</label>
                    <input 
                        name="title"
                        value={title}
                        onChange={this.handleInputChange}  />
                </div>
                <div>
                    <label>body</label>
                    <textArea 
                        name="body"
                        value={body}
                        onChange={this.handleInputChange}  /> 
                </div>
                <div>
                    <label>author</label>
                    <input 
                        name="author"
                        value={author}
                        onChange={this.handleInputChange}  /> 
                </div>
                <div>
                    <label>category</label>
                    <select name="category" value={category} onChange={this.handleInputChange}  >
                        {categories.map(category => {
                            const { name } = category
                            return <option key={name} value={name} >{name}</option>
                        })}
                    </select>
                </div>
                <button type="submit" >Submit</button>
                <Link to="/" >Cancel</Link>
            </form>
        )
    }
}

export default PostForm