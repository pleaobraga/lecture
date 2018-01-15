import React, { Component } from 'react'
import Category from '../../components/Category/Category'
import PostList from '../../components/Post/PostList/PostList'
import OrderBy from '../../components/OrderBy/OrderBy'
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
        let { orderBy } = this.props

        return (
          <div className="home">
              <h1> Lecture </h1>
              <Category />
              <OrderBy order={orderBy} />
              <Link className='create-post' to='/create-post' >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  New Post
              </Link>
              <PostList posts={posts} order={orderBy} />
          </div>
        );
    }
}

const mapStateToProps = ({post, orderBy}) => ({
    posts: post.posts,
    orderBy: orderBy.name
})

const mapDispatchToProps = dispatch => ({
    getAllPosts: () => dispatch(actions.post.getAllPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
