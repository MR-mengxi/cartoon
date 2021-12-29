import React, { Component } from 'react'
import Layout from '@/components/Layout'
import ListTest from '@/components/List/ListTest'
import RankTest from '@/components/Rank/RankTest'
import './index.css'

export default class Play extends Component {
    render() {
        const main = (
            <div className='play-container'>
                <div className="play-content">
                    <div className="play-t">
                        <div className="play-title">
                            <h2>动漫剧本</h2>
                        </div>
                        <div className="more">
                            更多
                            <i className="iconfont icon-gengduo"></i>
                        </div>
                    </div>
                    <div className="play-b">
                    <ListTest />
                    </div>
                </div>
            </div>
        );
        return (
            <Layout main={main} right={<RankTest/>} minWidth={990} mainWidth={710} rightWidth={240} />
        )
    }
}
