import React, { Component } from 'react'
import PostDetail from '../../components/Post/PostDetail/PostDetail'
import PostForm from '../../components/Post/PostForm/PostForm'
import CommentsList from '../../components/Comments/CommentsList/CommentsList'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { Link } from 'react-router-dom'
import './style/post-view.css'

export class PostView extends Component {

    constructor() {
        super();
        this.state = {
            editPost: false
        }
    }

    componentDidMount() {
        const { idPost } = this.props.match.params
        this.props.getPostDetail(idPost)
        this.props.getPostComments(idPost)
    }

    editPost(value) {
        this.setState({editPost: value});
    }

    renderPostComponent(post, editPost) {
        return !this.state.editPost ? <PostDetail post={post} editPost={editPost.bind(this)} /> : <PostForm post={post} editPost={editPost.bind(this)} />
    }

    render() {
        const { post, comments } = this.props
        return (
            <div className="post-view" >
                <Link to={`/`} className='back-home'><i className="fa fa-chevron-left" aria-hidden="true"></i> Back to post list</Link>
                {this.renderPostComponent(post, this.editPost)}
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