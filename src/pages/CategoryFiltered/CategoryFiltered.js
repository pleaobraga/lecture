import React, { Component } from 'react'
import Category from '../../components/Category/Category'
import PostList from '../../components/Post/PostList/PostList'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import './style/categoryFiltered.css';


export class CategoryFiltered extends Component {

  componentDidMount() {
    const { category } = this.props.match
    this.props.getCategoryPosts(category)
  }
  
  render() {
    let { filteredPosts } = this.props

    return (
      <div className="home">
        <h1> Lecture </h1>
        <Category />
        <PostList posts={filteredPosts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filteredPosts: state.post.filteredPosts
})

const mapDispatchToProps = dispatch => ({
  getCategoryPosts: (category) => dispatch(actions.post.getFilteredPosts(category))
})


export default connect(mapStateToProps, mapDispatchToProps)(CategoryFiltered);
