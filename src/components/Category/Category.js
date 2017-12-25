import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../../Utils/apiUtils'
import './style/category.css'

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

    rendeCategory(categories) {
        return categories.map((category, index) => {
            return (
                <li key={index} id={`category-${index}`}>
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

export default Category;