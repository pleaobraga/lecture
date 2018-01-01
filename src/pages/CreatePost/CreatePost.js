import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../../components/Post/PostForm/PostForm'

export class CreatePost extends Component {
    render() {
        return (
            <div>
                <h1>FormPost</h1>
                <PostForm />
            </div>
        )
    }
}

export default CreatePost