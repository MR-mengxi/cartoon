import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'
export default class Author extends Component {
    static propTypes = {
        author: PropTypes.array.isRequired
    }
    render() {
        const authorItem = this.props.author.map((author, i) => (
            <li className={styles["author-item"]} key={i}>
                <div className={styles["avatar"]}>
                    <a>
                        <img src={author.src} alt="" />
                    </a>
                </div>
                <div className={styles["sign"]}>
                    <button>签到</button>
                </div>
            </li>
        ))
        return (
            <div className={styles['author']}>
                <div className={styles["author-header"]}>
                    <h2>推荐小叮当</h2>
                </div>
                <div className={styles["author-recommend"]}>
                    <ul className={styles["author-list"]}>
                        {authorItem}
                    </ul>
                </div>
            </div>
        )
    }
}
