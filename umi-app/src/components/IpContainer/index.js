import React, { Component } from 'react'
import IpCartoonPager from '@/components/containers/IpCartoonPager'
import IpCartoonContainer from '../containers/IpCartoonContainer'
import IpPlayPager from '@/components/containers/IpPlayPager'
import IpPlayContainer from '../containers/IpPlayContainer'
import IpPerPager from '@/components/containers/IpPerPager'
import IpPerContainer from '../containers/IpPerContainer'
import './index.css'

export default class IpContainer extends Component {
    state = {
        ips: ["漫画改编", "动漫剧本", "周边合作"]
    }

    handlePageChange = newPage => {
        this.setState({
            current: newPage
        })
    }
    render() {
        const ips = this.state.ips.map((item, i) => (
            // 这里可以用current和i来进行切换
            <li key={i} className={i === 0 ? "active" : ""} onClick={(e) => {
                const lis = document.querySelectorAll(".nav_list li");
                const cards = document.querySelectorAll(".ip-list .card-item");
                for (let i = 0; i < this.state.ips.length; i++) {
                    if (lis[i] === e.target) {
                        lis[i].className = "active";
                        cards[i].className = "card-item show";
                    } else {
                        lis[i].className = "";
                        cards[i].className = "card-item";
                    }
                }
            }}>
                {item}
            </li>
        ))

        return (
            <div className="ip-content">
                <div className="ip-nav">
                    <div className="nav-title">IP开发</div>
                    <ul className="nav_list">
                        {ips}
                    </ul>
                </div>
                <div className="ip-list">
                    <div className="card-item show">
                        <ul className="card">
                            <IpCartoonContainer />
                        </ul>
                        <div className="ip-pager">
                            <IpCartoonPager />
                        </div>
                    </div>
                    <div className="card-item">
                        <ul className="card">
                            <IpPlayContainer />
                        </ul>
                        <div className="ip-pager">
                            <IpPlayPager />
                        </div>
                    </div>
                    <div className="card-item">
                        <ul className="card">
                            <IpPerContainer />
                        </ul>
                        <div className="ip-pager">
                            <IpPerPager />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
