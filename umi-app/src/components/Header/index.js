import React, { Component } from 'react'
import Nav from './Nav'
import styles from './index.css'
import { Link } from 'umi'

export default class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        也子
                    </h1>
                    <Nav nav={this.props.nav} />
                    <div className={styles.search}>
                        <input type="text" placeholder="输入你的喜好" />
                    </div>
                    <div className={styles.login}>
                        <Link to="/login">登录</Link>
                        <span>|</span>
                        <Link to="/register">注册</Link>
                    </div>
                </div>
            </div>
        )
    }
}
