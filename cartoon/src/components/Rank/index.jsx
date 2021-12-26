import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Rank extends Component {
    static defaultProps = {
        rank: []
    }

    static propTypes = {
        rank: PropTypes.array.isRequired
    }
    render() {
        const rankItem = this.props.rank.map((rank, i) => (
            <li className='rank-item' key={i}>
                <span className={(i === 0 || i === 1 || i === 2) ? 'number on' : 'number'}>{rank.id}</span>
                <a>{rank.msg}</a>
            </li>
        ))
        return (
            <div className='rank-container'>
                <div className='rank-header'>
                    <h2>排行榜</h2>
                </div>
                <ul className='rank-list'>
                    {rankItem}
                </ul>
            </div>
        )
    }
}
