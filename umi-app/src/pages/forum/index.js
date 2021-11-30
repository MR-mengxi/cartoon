import React, { Component } from 'react'
import Layout from '@/components/common/Layout'
import List from '@/components/List'
import './index.css'

export default class forum extends Component {
    state = {
        forum: [
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
        ]
    }
    render() {
        return (
            <div className="forum">
                <Layout style={{ margin: "0 auto" }} gap={10} right={
                    <div className="forum-list">
                        <div className="forum-title">
                            <span>推荐</span>
                            <span className="more">更多</span>
                        </div>
                        <List data={this.state.forum} />
                    </div>
                }>
                    <div className="forum-content">
                        <div className="forum-type">
                            <div className="type-title">
                                类型
                            </div>
                            <ul className="forum-nav">
                                <li><span>奇幻</span></li>
                                <li><span>悬疑</span></li>
                                <li><span>热血</span></li>
                                <li><span>日常</span></li>
                                <li><span>搞笑</span></li>
                            </ul>
                        </div>
                        <div className="forum-author">
                            <div className="type-title">
                                作者
                            </div>
                            <ul className="author">
                                <li>
                                    <a href="">

                                    </a>
                                </li>
                                <li>
                                    <a href="">

                                    </a>
                                </li>
                                <li>
                                    <a href="">

                                    </a>
                                </li>
                                <li>
                                    <a href="">

                                    </a>
                                </li>
                                <li>
                                    <a href="">

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}


