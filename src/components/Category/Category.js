import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../../Utils/apiUtils'
import './category.css'

class Category extends Component {

    constructor() {
        super()

        this.state = { categories: [] }
    }

    setCategory() {
         api.getCategory()
            .then( response => {
                this.setState({ categories: response.data.categories})  
            }
         );
    }

    componentDidMount() {
        this.setCategory();
    }

    render() {

        const { categories } = this.state;

        return (
            <ul className='horizontal-list'>
                {categories.map((category, index) => {
                    return (
                        <Link to={`/${category.name}/posts`} >
                            <li key={index} id={`category-${index}`}>
                                {category.name}
                            </li>
                        </Link>   
                    )
                })}
            </ul>
        )
    }
} 

export default Category;