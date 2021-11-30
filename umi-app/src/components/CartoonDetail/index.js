import React, { Component } from 'react'
import styles from './index.css'

export default class CartoonDetail extends Component {
    render() {
        const detail = this.props.modDetail;
        return (
            <div className={styles["detail-area"]}>
                <a href="" className={styles["detail-img"]}>
                    <img src={detail.thumb} alt="" />
                </a>
                <div className={styles["detail-content"]}>
                    <span className={styles["detail-title"]}>{detail.modName}</span>
                    <span className={styles["detail-author"]}>{detail.author}</span>
                    <span className={styles["detail-desc"]}>{detail.desc}</span>
                    <span className={styles["detail-macaron"]}>小铃铛：{detail.macaron}</span>
                </div>
            </div>
        )
    }
}
