import React, { Component } from 'react'
import Category from '../../components/Category/Category'
import Post from '../../components/Post/Post'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import './style/home.css';


export class Home extends Component {

  componentDidMount() {
    this.props.getAllPosts()
  }
  
  render() {

    let posts  = this.props.posts ? this.props.posts : [] 

    return (
      <div className="home">
        <h1> Lecture </h1>
        <Category />
        <Post posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post
})

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(actions.post.getAllPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
