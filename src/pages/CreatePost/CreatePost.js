import React, { Component } from 'react'
import PostForm from '../../components/Post/PostForm/PostForm'
import { Link } from 'react-router-dom'
import './style/create-post.css'

export class CreatePost extends Component {
    render() {
        return (
            <div className='create-post' >
                <Link to={`/`} className='back-home'><i className="fa fa-chevron-left" aria-hidden="true"></i> Back to post list</Link>
                <PostForm />
            </div>
        )
    }
}

export default CreatePost