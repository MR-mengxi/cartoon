import React, { Component } from 'react'
import styles from './index.css'

export default class List extends Component {
    render() {
        const lists = this.props.list.map((list, i) => (
            <li className={styles['list-item']} key={list.id}>
                <a>
                    <img src={list.src} alt="" />
                </a>
            </li>
        ))
        return (
            <ul className={styles["list-ul"]}>
                {lists}
            </ul>
        )
    }
}
