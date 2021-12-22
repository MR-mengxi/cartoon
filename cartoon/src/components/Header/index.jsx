import React, { Component } from 'react'
import NavMenuContainer from './NavMenuContainer';
import styles from './index.css';
import './index.css';

export default class Header extends Component {

    render() {
        return (
            <div className={styles['cartoon-header']}>
                <div className={styles["cartoon-content"]}>
                    <div className={styles['cartoon-logo']}>
                        <h1 className='cartoon-title'>也子</h1>
                    </div>
                    <div className="nav-menu">
                        <NavMenuContainer />
                    </div>
                    <div className={styles["cartoon-search"]}>
                        <div className={styles["nav-search"]}>
                            <input placeholder='请输入搜索词' type="text" />
                            <i className='iconfont icon-sousuo'></i>
                        </div>
                    </div>
                    <div className={styles["cartoon-info"]}>
                        <div className={styles["info-token"]}>
                            <span>登录</span>
                            <span>注册</span>
                        </div>
                        <div>星期六</div>
                    </div>
                </div>
            </div>
        )
    }
}
