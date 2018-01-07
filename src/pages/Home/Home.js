import React, { Component } from 'react'
import Category from '../../components/Category/Category'
import PostList from '../../components/Post/PostList/PostList'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Link } from 'react-router-dom'
import './style/home.css';


export class Home extends Component {

  componentDidMount() {
    this.props.getAllPosts()
  }
  
  render() {

    let posts = this.props.posts ? this.props.posts : [] 

    return (
      <div className="home">
        <h1> Lecture </h1>
        <Category />
        <Link className='create-post' to='/create-post' ><i className="fa fa-plus-circle" aria-hidden="true"></i>Create New Post</Link>
        <PostList posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts,
})

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(actions.post.getAllPosts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
