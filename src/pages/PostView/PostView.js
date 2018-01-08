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

    
    editingPost(value) {
        this.setState({editPost: value});
    }

    renderPostComponent(post, editingPost) {
        return !this.state.editPost ? <PostDetail post={post} editingPost={editingPost.bind(this)} /> : <PostForm post={post} editingPost={editingPost.bind(this)} />
    }

    render() {
        const { post, comments } = this.props
        const idPost =  post !== undefined ? post.id : null 

        return (
            <div className="post-view" >
                <Link to={`/`} className='back-home'><i className="fa fa-chevron-left" aria-hidden="true"></i> Back to post list</Link>
                {this.renderPostComponent(post, this.editingPost)}
                <CommentsList comments={comments} idPost={idPost} />
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