import React, { Component }  from 'react'
import * as utils from '../../../Utils/utils'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux' 
import * as actions from '../../../actions' 
import * as api from '../../../Utils/apiUtils'
import './style/post-list.css'


class PostList extends Component {

    constructor(props) {
        super(props)
    }
    
    showPostDetail (category, id) {
        this.props.history.push(`/${category}/${id}`);
    }

    editPost (category, id) {
        const location = {
            pathname: `/${category}/${id}`,
            state: { editPost: true }
          }
        this.props.history.push(location);
    }

     voteOnPost(vote, post) {
        if((post.voted && post.voted !== vote.split('Vote')[0]) || !post.voted )
            this.props.votePost(vote, post)
                .then((newPost) => {
                    this.forceUpdate()
                    this.props.editPost(newPost)
                })
                .catch(erro => console.log(erro))
    }

    deletPost(id) {
        this.props.deletePost(id)
    }

    showActions(id) {
        document.querySelector(`div[idpost='${id}-action']`).classList.add('show')
    }

    removeActions(id) {
        document.querySelector(`div[idpost='${id}-action']`).classList.remove('show')
    }

    
    renderPostItem(posts = []) {
        return utils.sortListByAttribute(posts, this.props.order).map( (post, index) => {
            return(
                <div 
                    key={post.id} 
                    className='post-card' 
                    onMouseEnter={() => this.showActions(index) }  
                    onMouseLeave={() => this.removeActions(index)} >
                    <div  className='post-item' 
                     onClick={() => this.showPostDetail(post.category, post.id)} 
                    >
                        <div className='main-informations' >  
                            <h3 className='title' >{post.title}</h3>
                            <div className='author-date-informations' >
                                <h5 className='author'><i className="fa fa-user" aria-hidden="true"></i> {post.author}  </h5>
                                <h5 className='date' ><i className="fa fa-calendar" aria-hidden="true"></i> {utils.formateDate(post.timestamp)} </h5>
                            </div>
                        </div>
                        <div className='second-informations' >
                            <span className={`category ${post.category}-category`}>{utils.captalizeFirstLetter(post.category)}</span>
                            <div className='comments-stars' >
                                <span className='score' ><i className="fa fa-star" aria-hidden="true"></i> {post.voteScore}</span>
                                <span className='comments'><i className="fa fa-comments" aria-hidden="true"></i> {post.commentCount}</span>
                            </div>
                        </div>
                    </div>
                    <div idpost={`${index}-action`} className='actions' >
                        <div className='delete' >
                            <i className='fa fa-trash' onClick={() => this.deletPost(post.id)} ></i>
                        </div>
                        <div className='edit' >
                            <i className='fa fa-pencil' onClick={ () => this.editPost(post.category, post.id)} ></i>
                        </div>
                        <div className='vote' >
                            <i 
                                className={`fa fa-thumbs${post.voted && post.voted === 'up' ? '' : '-o'  }-up`}  
                                aria-hidden="true" 
                                onClick={() => this.voteOnPost('upVote', post)} >
                            </i>
                            <i className={`fa fa-thumbs${post.voted && post.voted === 'down' ? '' : '-o'  }-down`}
                                aria-hidden="true" 
                                onClick={() => this.voteOnPost('downVote', post)} >
                            </i>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {

        let { posts } = this.props 

        return (
            <div className='post-list' >
                {this.renderPostItem(posts)}
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    votePost: (vote, post) => dispatch(actions.post.votePost(vote, post)),
    editPost: post => dispatch(actions.post.editPost(post)),
    deletePost: (idPost) => dispatch(actions.post.deletePost(idPost)) 
})

export default withRouter(connect(null, mapDispatchToProps)(PostList))