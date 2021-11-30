import React, { Component } from 'react'
import Layout from '@/components/common/Layout'
import styles from './index.css'

export default class fancreate extends Component {
    render() {
        return (
            <div className={styles["fancreate"]}>
                <div className={styles["fancreate-container"]}>
                    <Layout minWidth={800} minHeight={"100%"} style={{
                        margin: "0 auto"
                    }} mainWidth={140} rightWidth={660} gap={20} right={
                        <div className={styles["fancreate-right"]}>
                           <div className="fancreate-content">
                               音乐
                           </div>
                        </div>
                    }>
                        <div className={styles["fancreate-main"]}>
                            <ul>
                                <li>音乐</li>
                                <li>人物</li>
                                <li>消息</li>
                                <li>个性制作</li>
                            </ul>
                        </div>
                    </Layout>
                </div>
            </div>
        )
    }
}
