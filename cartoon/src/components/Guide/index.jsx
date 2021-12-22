import React, { Component } from 'react'
import './index.css'
import src1 from '@/assets/guide/1.jpg'

export default class Guide extends Component {
    render() {
        return (
            <div className='guide-container'>
                <div className="guide-show">
                    <div className="guide-t">
                        <div className="guide-title">
                            <h2>今日指南</h2>
                        </div>
                        <div className="guide-category">
                            <span className='active'>全部</span>
                            <span>漫画</span>
                            <span>同人曲</span>
                            <span>IP</span>
                        </div>
                    </div>
                    <div className="guide-b">
                        <div className="guide-thumb">
                            <a href="">
                                <img src={src1} alt="" />
                            </a>
                        </div>
                        <div className="guide-list">
                            <ul className='guide-list-ul'>
                                <li className='guide-item active'>作者也子首部悬疑漫画《夜笙》将于今日上午10点发布，请动动手指留下你的叮当币吧</li>
                                <li className='guide-item'>作者也子首部悬疑漫画《夜笙》将于今日上午10点发布，请动动手指留下你的叮当币吧</li>
                                <li className='guide-item'>作者也子首部悬疑漫画《夜笙》将于今日上午10点发布，请动动手指留下你的叮当币吧</li>
                                <li className='guide-item'>作者也子首部悬疑漫画《夜笙》将于今日上午10点发布，请动动手指留下你的叮当币吧</li>
                                <li className='guide-item'>《三分》的同人曲三分热血归来</li>
                                <li className='guide-item'>作者也子首部悬疑漫画《夜笙》将于今日上午10点发布，请动动手指留下你的叮当币吧</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
