import React, { Component } from 'react';

export class Post extends Component {

    render() {
        if(this.props.posts) {
            return (
                <div>
                    {this.props.posts.map( post => {
                        return(
                            <div key= {post.id} >
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

        return null
        
    }
}

export default Post