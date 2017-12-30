import React, { Component } from 'react'
import PostDetail from '../../components/Post/PostDetail/PostDetail'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'


export class PostView extends Component {

    componentDidMount() {
        const { idPost } = this.props.match.params
        this.props.getPostDetail(idPost)
    }

    render() {
        const { post } = this.props

        return (
            <PostDetail post={post} />
        );
    }
} 


const mapStateToProps = state => ({
    post: state.post.postDetail
})

const mapDispatchToProps = dispatch => ({
    getPostDetail: (idPost) => dispatch(actions.post.getPostDetail(idPost))
})


export default connect(mapStateToProps, mapDispatchToProps)(PostView)