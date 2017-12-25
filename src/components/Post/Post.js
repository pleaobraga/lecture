import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'


export class Post extends Component {

    constructor() {
        super();    

        this.state = { posts:[] }
    }

    componentDidMount() {
        this.props.getAllPosts()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({posts: nextProps.posts})
    }

    render() {

        const { posts } =  this.state;

        return (
            <div>
                {posts.map( post => {
                    return(
                        <div>
                            <h3 className='title' >{post.name}</h3>
                            <h5 className='author'>{post.author}</h5>
                            <h5 className='date' > {post.timestamp} </h5>
                            <div>
                                <span className='score' >{post.score}</span>
                                <span className='category'>{post.category}</span>
                                <span className='comments'>{post.commentCount}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    posts: state.post
}

const mapDispatchToProps = dispatch => ({
    getAllPosts: () => dispatch(actions.post.getAllPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)