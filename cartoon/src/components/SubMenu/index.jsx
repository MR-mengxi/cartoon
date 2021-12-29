import React, { Component } from 'react'
import './index.css'

export default class SubMenu extends Component {
    render() {
        const submenu = this.props.submenu.map((sub, i) => {
            <li>
                <i className='iconfont icon-shoucang'></i>
                <span>收藏</span>
            </li>
        })
        return (
            <div className='submenu-container'>
                <div className="submenu-show">
                    <ul className='submenu-ul'>
                        <li className='submenu-item'>
                            <div className="line"></div>
                            <i className='iconfont icon-shoucang'></i>
                            <span className='shoucang'>收藏</span>
                        </li>
                        <li className='submenu-item'>
                            <div className="line"></div>
                            <i className='iconfont icon-xiaoxi'></i>
                            <span className='xiaoxi'>消息</span>
                        </li>
                        <li className='submenu-item'>
                            <div className="line"></div>
                            <i className='iconfont icon-shangcheng'></i>
                            <span className='shangcheng'>周边</span>
                        </li>
                        <li className='submenu-item'>
                            <div className="line"></div>
                            <i className='iconfont icon-jinbi1'></i>
                            <span className='jinbi'>叮当币</span>
                        </li>
                        <li className='submenu-item'>
                            <div className="line"></div>
                            <i className='iconfont icon-xianxinglingdang'></i>
                            <span className='lingdang'>成为小叮当</span>
                        </li>
                        <li className='submenu-item'>
                            <div className="line"></div>
                            <i className='iconfont icon-qiandao'></i>
                            <span className='qiandao'>签到</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
