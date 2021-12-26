import React from 'react'
import './index.css'

export default function Footer() {
    return (
        <div className='cartoon-footer'>
            <div className='footer-wrap'>
                <div className="footer-left">
                    <p>©也子的筱时光</p>
                    <p>
                        <a>冀ICP备2040220349-1</a>
                        |
                        <a>公网安备110203399</a>
                    </p>
                    <p>请仔细阅读网站<a>《用户协议》</a>并遵循用户协议使用网站</p>
                    <p>不良信息举报：<a href="mailto:zzy12478@gmail.com">zzy12478@gmail.com</a></p>
                    <p>版权说明：<a href="mailto:MR-mengxi@outlook.com">MR-mengxi@outlook.com</a></p>
                </div>
                <div className="footer-right">
                    <p>扫描二维码关注公众号</p>
                </div>
            </div>
        </div>
    )
}
