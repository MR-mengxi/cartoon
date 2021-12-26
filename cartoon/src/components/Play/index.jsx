import React, { Component } from 'react'
import Layout from '@/components/Layout'
import RankTest from '@/components/Rank/RankTest'
import './index.css'
import src1 from '@/assets/play/1.jpg'
import src2 from '@/assets/play/2.jpg'
import src3 from '@/assets/play/3.jpg'
import src4 from '@/assets/play/4.jpg'
import src5 from '@/assets/play/5.jpg'
import src6 from '@/assets/play/6.jpg'
import src7 from '@/assets/play/7.jpg'
import src8 from '@/assets/play/8.jpg'

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
                        <ul className="play-list">
                            <li className='play-item'>
                                <a>
                                    <img src={src1} alt="" />
                                    {/* <p>快把我哥带走</p>
                                    <p>搞笑</p> */}
                                </a>
                            </li>
                            <li className='play-item'>
                                <a>
                                    <img src={src2} alt="" />
                                </a>
                            </li>
                            <li className='play-item'>
                                <a>
                                    <img src={src3} alt="" />
                                </a>
                            </li>
                            <li className='play-item'>
                                <a>
                                    <img src={src4} alt="" />
                                </a>
                            </li>
                            <li className='play-item'>
                                <a>
                                    <img src={src5} alt="" />
                                </a>
                            </li>
                            <li className='play-item'>
                                <a>
                                    <img src={src6} alt="" />
                                </a>
                            </li>
                            <li className='play-item'>
                                <a>
                                    <img src={src7} alt="" />
                                </a>
                            </li>
                            <li className='play-item'>
                                <a>
                                    <img src={src8} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
        return (
            <Layout main={main} right={<RankTest/>} minWidth={990} mainWidth={710} rightWidth={240} />
        )
    }
}
