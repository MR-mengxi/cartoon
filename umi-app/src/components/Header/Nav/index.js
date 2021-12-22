import React, { Component } from 'react'
import styles from  "./index.css"
import { NavLink } from 'umi'

export default class nav extends Component {
    render() {
        const lis = this.props.nav.map(item => (
            <li key={item.id}>
                <NavLink activeClassName="current" exact to={item.to}>
                    {item.navTitle}
                </NavLink>
            </li>))
        return (
            <div className={styles.nav}>
                <ul className={styles["nav-list"]}>
                    {lis}
                </ul>
            </div>
        )
    }
}
