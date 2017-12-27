import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../../Utils/apiUtils'
import './style/category.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'


export class Category extends Component {

    constructor() {
        super()

        this.state = { categories: [] }
    }

    componentDidMount() {
        this.setCategory();
    }

    setCategory() {
         api.getCategory()
            .then( response => {
                this.setState({ categories: response.data.categories})  
            }
         );
    }

    filteredPostsByCategory (category) {
        this.props.getCategoryPosts(category)
    }

    rendeCategory(categories) {
        return categories.map((category, index) => {
            return (
                <li key={index} id={`category-${index}`} onClick={() => this.filteredPostsByCategory(category.name)} >
                    <Link to={`/${category.name}/posts`} >
                        {category.name}
                    </Link>   
                </li>
            )
        })
    }

    render() {

        const { categories } = this.state;

        return (
            <ul className='horizontal-list'>
                {this.rendeCategory(categories)}
            </ul>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    getCategoryPosts: (category) => dispatch(actions.post.getFilteredPosts(category))
  })

export default connect(null, mapDispatchToProps)(Category);