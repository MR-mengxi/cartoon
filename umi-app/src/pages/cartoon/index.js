import React, { Component } from 'react'
import Layout from '@/components/common/Layout'
import CartoonModContainer from '@/components/containers/CartoonModContainer'
import CartoonAuthorContainer from '@/components/containers/CartoonAuthorContainer'
import List from '@/components/List'
import './index.css'

export default class Cartoon extends Component {

    state = {
        cartoon: [
            { id: 1, news: "《卡哇伊》出售动画版权" },
            { id: 2, news: "也子新作《夜笙》上线即售出动漫改编权" },
            { id: 3, news: "一只小礼帽的线下签售会在京顺利举行" },
            { id: 4, news: "运动题材漫画《三分》进行漫改，让我们期待再次与篮球的邂逅" },
            { id: 5, news: "《卡哇伊》出售动画版权" },
            { id: 6, news: "《卡哇伊》出售动画版权" },
            { id: 7, news: "《卡哇伊》出售动画版权" },
            { id: 8, news: "也子新作《夜笙》上线即售出动漫改编权" },
            { id: 9, news: "IP共创计划正式启动，首批入围的作品有《诡术》" },
            { id: 10, news: "《卡哇伊》出售动画版权" },
            { id: 11, news: "《卡哇伊》出售动画版权" },
            { id: 12, news: "《卡哇伊》出售动画版权" },
        ]
    }

    render() {
        return (
            <div className="cartoon">
                <Layout
                    minWidth={1100}
                    style={{
                        margin: "0 auto"
                    }} right={
                        <div className="cartoon-list">
                            <div className="cartoon-title">
                                <span>最新消息</span>
                                <span className="more">更多</span>
                            </div>
                            <List data={this.state.cartoon} />
                        </div>}>
                    <div>
                        <div className="recomment-author">
                            <h2>
                                <span>推荐作者</span>
                                <i style={{
                                    fontSize: "12px",
                                    marginLeft: "12px"
                                }}>这是一个小铃铛</i>
                            </h2>
                            <div className="macaron-author">
                                <div className="macaron-list">
                                    <CartoonAuthorContainer />
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "30px" }}>
                            <CartoonModContainer />
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}
