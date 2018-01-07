import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../../components/Post/PostForm/PostForm'

export class CreatePost extends Component {
    render() {
        return (
            <div>
                <PostForm />
            </div>
        )
    }
}

export default CreatePost