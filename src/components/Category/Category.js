import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../../Utils/apiUtils'
import { captalizeFirstLetter } from '../../Utils/utils'
import './style/category.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'


export class Category extends Component {

    constructor() {
        super()
        this.state = { categories: []}
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

    renderCategory(categories, filteredCategory = '') {
        return categories.map((category, index) => {
            return (
                <li 
                    key={index} id={`category-${index}`} 
                    onClick={() => this.filteredPostsByCategory(category.name)} >
                    <Link 
                        to={`/${category.name}`} 
                        className={`${category.name}-category ${filteredCategory === category.name ? 'selected' : '' }`} >
                        {captalizeFirstLetter(category.name)}
                    </Link>   
                </li>
            )
        })
    }

    renderRemoveFilterButton() {
        return (
            <li>
                <Link to="/" className={`remove-filter-category`} >
                    Remove Filter
                </Link>
            </li> 
        )
    }

    render() {
        const { categories } = this.state
        let { removeFilter, filteredCategory } = this.props

        return (
            <div>
                <ul className='horizontal-list'>
                    {this.renderCategory(categories, filteredCategory)}
                    {removeFilter && this.renderRemoveFilterButton()}
                </ul>
                <h5 className='filter-explain' >Click to filter by</h5>
            </div>
            
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    getCategoryPosts: (category) => dispatch(actions.post.getFilteredPosts(category))
})

export default connect(null, mapDispatchToProps)(Category);