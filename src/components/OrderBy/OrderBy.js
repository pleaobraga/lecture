import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import './style/order-by.css'


function OrderBy (props) {

    function changeOrder(orderBy) {
        let list = document.querySelector('#order-by-list').querySelectorAll('li')

        list.forEach(li => {
            li.classList.remove('selected')
            if(orderBy == li.getAttribute('id')) li.classList.add('selected')
        })

        props.orderBy(orderBy)
    }

    return (
        <div className='order-by' >
                <ul id='order-by-list' className='horizontal-list' >
                <li 
                    id='voteScore' 
                    className={`vote-score ${props.order === 'voteScore' ? 'selected' : ''}`} 
                    onClick={ () => changeOrder('voteScore')} >
                    <i className='fa fa-star' ></i>
                </li>
                <li 
                    id='timestamp' 
                    className={`date ${props.order === 'timestamp' ? 'selected' : ''}`} 
                    onClick={() => changeOrder('timestamp')}>
                    <i className='fa fa-calendar' ></i>
                </li>
            </ul>    
            <h5 className='filter-explain' >Click to order by</h5>
        </div>
    )
}

/*const mapStateToProps = ({name}) => ({
    orderBy: name
})*/

const mapDispatchToProps = dispatch => ({
    orderBy: (name) => dispatch(actions.orderBy.orderByPosts(name)),
})

export default connect(null, mapDispatchToProps)(OrderBy)