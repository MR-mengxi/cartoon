import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'umi'
import './index.css'

export default class NavMenu extends Component {
    static defaultProps = {
        menu: []
    }

    static propTypes = {
        menu: PropTypes.array.isRequired
    }

    render() {
        const menu = this.props.menu.map((menu, i) => (
            <li className='nav-menu-item' key={i}>
                <NavLink activeClassName="selected" exact to={menu.router}>{menu.link}</NavLink>
            </li>
        ))
        return (
            <ul className='nav-menu-ul flex'>
                {menu}
            </ul>
        )
    }
}
