import React, { Component } from 'react'
import PostDetail from '../../components/Post/PostDetail/PostDetail'
import PostForm from '../../components/Post/PostForm/PostForm'
import CommentsList from '../../components/Comments/CommentsList/CommentsList'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import './style/post-view.css'

export class PostView extends Component {

    constructor(props) {
        super(props);
        this.state = { editPost: false }
    }

    componentDidMount() {
        let { idPost } = this.props.match.params
        this.props.getPostDetail(idPost)
        this.props.getPostComments(idPost)
        const editPost =  this.props.location.state ? this.props.location.state.editPost : null
        editPost !== null ? this.setState({editPost}) : ''
    }

    
    editingPost(value) {
        this.setState({editPost: value});
    }

    renderPostComponent(post = {}, editingPost) {
        return this.state.editPost && !_.isEmpty(post) 
            ? <PostForm post={post} editingPost={editingPost.bind(this)} />
            : <PostDetail post={post} editingPost={editingPost.bind(this)} /> 
           
    }

    render() {
        const { post, comments } = this.props
        const idPost =  post !== undefined ? post.id : null 

        return (
            <div className="post-view" >
                <Link to={`/`} className='back-home'>
                    <i className="fa fa-chevron-left" aria-hidden="true"></i> 
                    Back to post list
                </Link>
                {this.renderPostComponent(post, this.editingPost)}
                {
                    !_.isEmpty(post) &&
                    <CommentsList 
                    comments={comments} 
                    idPost={idPost}  />
                }
            </div>
        );
    }
} 


const mapStateToProps = ({ post, comments }) => ({
    post: post.postDetail,
    comments: comments.comments
})

const mapDispatchToProps = dispatch => ({
    getPostDetail: (idPost) => dispatch(actions.post.getPostDetail(idPost)),
    getPostComments: (idPost) => dispatch(actions.comments.getPostComments(idPost))
})


export default connect(mapStateToProps, mapDispatchToProps)(PostView)