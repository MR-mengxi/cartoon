import React, { Component } from 'react'
import Layout from "@/components/common/Layout"
import PlayModContainer from '@/components/containers/PlayModContainer'
import List from '../../components/List'
import "./index.css"

export default class Play extends Component {
    state = {
        play: [
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
        ],
    }

    render() {
        return (
            <div className="play">
                <Layout style={{
                    margin: "0 auto"
                }} right={
                    <div className="play-list">
                        <div className="play-title">
                            <span>剧本嘉年华</span>
                            <span className="more">更多</span>
                        </div>
                        <List data={this.state.play} />
                    </div>
                }>
                    <div>
                        <PlayModContainer />
                    </div>
                </Layout>
            </div>
        )
    }
}
