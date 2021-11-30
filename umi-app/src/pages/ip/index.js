import React, { Component } from 'react'
import Layout from '@/components/common/Layout'
import IpListContainer from '@/components/containers/IpListContainer'
import IpContainer from '../../components/IpContainer'
import './index.css'

export default class ip extends Component {
    render() {
        return (
            <div className="ip">
                <Layout minWidth={990} style={{
                    margin: "0 auto"
                }} right={
                    <div className="news-list">
                        <div className="news-title">
                            <span>最新消息</span>
                            <span className="more">更多</span>
                        </div>
                        <IpListContainer />
                    </div>
                }>
                  <IpContainer /> 
                </Layout>
            </div>
        )
    }
}
