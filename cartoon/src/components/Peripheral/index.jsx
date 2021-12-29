import React, { Component } from 'react'
import Layout from '@/components/Layout'
import ShopTest from '@/components/Shop/ShopTest'
import './index.css'

export default class Peripheral extends Component {
    render() {

        const main = (
            <div className='peripheral-container'>
                <div className="peripheral-content">
                    <div className="peripheral-t">
                        <div className="peripheral-title">
                            <h2>手办周边</h2>
                        </div>
                        <div className="more">
                            更多
                            <i className="iconfont icon-gengduo"></i>
                        </div>
                    </div>
                    <div className="peripheral-b">
                        <ShopTest />
                    </div>
                </div>
            </div>
        )
        return (
            <Layout main={main} minWidth={990} mainWidth={990} ></Layout>
        )
    }
}
