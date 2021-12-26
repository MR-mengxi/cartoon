import React, { Component } from 'react'
import Layout from '@/components/Layout'
import RankTest from '@/components/Rank/RankTest'
import styles from './index.css'

export default class Cartoon extends Component {
    render() {
        const main = (
            <div className={styles["cartoon-container"]}>
                <div className={styles["cartoon-content"]}>
                    <div className={styles["cartoon-t"]}>
                        <div className={styles["cartoon-title"]}>
                            <h2>动漫</h2>
                        </div>
                        <div className={styles["more"]}>
                            更多
                            <i className="iconfont icon-gengduo" style={{
                                fontSize:12
                            }}></i>
                        </div>
                    </div>
                    <div className="cartoon-b">

                    </div>
                </div>
            </div>
        )
        return (
            <div>
                <Layout main={main} right={<RankTest />} minWidth={990} mainWidth={710} rightWidth={250}></Layout>
            </div>
        )
    }
}
