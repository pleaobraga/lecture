import React, { Component } from 'react'
import PostDetail from '../../components/Post/PostDetail/PostDetail'
import CommentsList from '../../components/CommentsList/CommentsList'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { Link } from 'react-router-dom'
import './style/post-view.css'

export class PostView extends Component {

    componentDidMount() {
        const { idPost } = this.props.match.params
        this.props.getPostDetail(idPost)
        this.props.getPostComments(idPost)
    }

    render() {
        const { post, comments } = this.props

        return (
            <div className="post-view" >
                <Link to={`/`} className='back-home'>Back</Link>
                <PostDetail post={post} />
                <CommentsList comments={comments} />
            </div>

        );
    }
} 


const mapStateToProps = state => ({
    post: state.post.postDetail,
    comments: state.comments.comments
})

const mapDispatchToProps = dispatch => ({
    getPostDetail: (idPost) => dispatch(actions.post.getPostDetail(idPost)),
    getPostComments: (idPost) => dispatch(actions.comments.getPostComments(idPost))
})


export default connect(mapStateToProps, mapDispatchToProps)(PostView)