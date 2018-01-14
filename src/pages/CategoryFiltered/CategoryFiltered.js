import React, { Component } from 'react'
import Category from '../../components/Category/Category'
import PostList from '../../components/Post/PostList/PostList'
import OrderBy from '../../components/OrderBy/OrderBy'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Link } from 'react-router-dom'
import './style/category-filtered.css'


export class CategoryFiltered extends Component {

  componentDidMount() {
    const { category } = this.props.match.params
    this.filteredPostsByCategory(category)
  }

  filteredPostsByCategory (category) {
    this.props.getCategoryPosts(category)
  }
  
  render() {
    let { filteredPosts, orderBy } = this.props
    const { category } = this.props.match.params

    return (      
      <div className="category-filtered">
          <h1> Lecture </h1>
          <Category removeFilter={true} filteredCategory={category}  />
          <OrderBy order={orderBy} />
          <Link className='create-post' to='/create-post' >
              <i className="fa fa-plus" aria-hidden="true"></i>
              New Post
          </Link>
          <PostList posts={filteredPosts} order={orderBy} />
      </div>
    );
  }
}

const mapStateToProps = ({post, orderBy}) => ({
  filteredPosts: post.filteredPosts,
  orderBy: orderBy.name
})

const mapDispatchToProps = dispatch => ({
  getCategoryPosts: (category) => dispatch(actions.post.getFilteredPosts(category))
})


export default connect(mapStateToProps, mapDispatchToProps)(CategoryFiltered);
