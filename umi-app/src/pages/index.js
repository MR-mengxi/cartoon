import React, { Component } from 'react'
// import BannerContainer from '@/components/containers/BannerContainer'
import Banner from '@/components/common/banner'
import src1 from '@/assets/img/banner/1.jpg';
import src2 from '@/assets/img/banner/2.jpg';
import src3 from '@/assets/img/banner/3.jpg';
import src4 from '@/assets/img/banner/4.jpg';
import src5 from '@/assets/img/banner/5.jpg';
import src6 from '@/assets/img/production/1.webp';
import src7 from '@/assets/img/production/2.webp';
import src8 from '@/assets/img/production/3.webp';
import src9 from '@/assets/img/production/4.webp';
import '@/assets/iconfont/lingdang/iconfont.css'
// import Slider from '../components/Slider'
import CardContainer from '@/components/containers/CardContainer'
import IndexModContainer from '../components/containers/IndexModContainer'
import './index.css';
import Production from '@/components/Production';

export default class index extends Component {
    state = {
        bannerWidth: "",
        // slider: [
        //     { id: 1, sliderList: "最近收藏" },
        //     { id: 2, sliderList: "成为小叮当" },
        //     { id: 3, sliderList: "叮当币" },
        // ],
        data: [
            { id: 1, title: "草莓棉花糖", time: "第20话", thumb: src6 },
            { id: 2, title: "工作细胞", time: "第12话", thumb: src7 },
            { id: 3, title: "中二病也要谈恋爱", time: "全集20", thumb: src8 },
            { id: 4, title: "肥志百科", time: "第1话", thumb: src9 },
        ]
    }


    componentDidMount() {
        const width = document.documentElement.clientWidth;
        this.setState({
            bannerWidth: width
        })
    }
    render() {
        return (
            <div className="main-container">
                <div className="banner">
                    {/* <BannerContainer width={this.state.bannerWidth} /> */}
                    <Banner width={+this.state.bannerWidth} height={312} imgSrcs={[src1, src2, src3, src4, src5]} />
                    {/* <Slider slider={this.state.slider} /> */}
                </div>
                <div className="pro" style={{
                    width:990,
                    margin:"20px auto 0"
                }}>
                    <Production data={this.state.data} />
                </div>
                <div className='fun' style={{
                    width: 990,
                    margin: "20px auto 0",
                    display: "flex"
                }}>
                    <div className="sign" style={{
                        textAlign: "center",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <i className="iconfont icon-lingdang1" style={{
                            fontSize: 36
                        }}></i>
                        收藏
                    </div>
                    <div className="sign" style={{
                        textAlign: "center",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <i className="iconfont icon-lingdang1" style={{
                            fontSize: 36
                        }}></i>
                        叮当币
                    </div>
                    <div className="sign" style={{
                        textAlign: "center",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <i className="iconfont icon-lingdang1" style={{
                            fontSize: 36
                        }}></i>
                        成为小叮当
                    </div>
                    <div className="sign" style={{
                        textAlign: "center",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <i className="iconfont icon-lingdang1" style={{
                            fontSize: 36
                        }}></i>
                        成为小叮当
                    </div>
                    <div className="sign" style={{
                        textAlign: "center",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <i className="iconfont icon-lingdang1" style={{
                            fontSize: 36
                        }}></i>
                        成为小叮当
                    </div>
                    <div className="sign" style={{
                        textAlign: "center",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <i className="iconfont icon-lingdang1" style={{
                            fontSize: 36
                        }}></i>
                        签到
                    </div>
                </div>
                <div className="card">
                    <CardContainer />
                </div>
                <div className='mod-container'>
                    <div className="mod">
                        <IndexModContainer />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <div style={{
                            display: "flex"
                        }}>
                            <div style={{
                                fontSize: "12px",
                                cursor: "pointer",
                                margin: "0 4px"
                            }}>最近在看</div>
                            <div style={{
                                fontSize: "12px",
                                cursor: "pointer",
                                margin: "0 4px"
                            }}>设置喜好</div>
                            <div style={{
                                fontSize: "12px",
                                cursor: "pointer",
                                margin: "0 4px"
                            }}>为你推荐</div>
                        </div>
                        <ul style={{
                            paddingTop: "10px"
                        }}>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Ducimus, perspiciatis sapiente.</li>
                            <li>Optio, inventore molestias!</li>
                            <li>Mollitia, perferendis animi.</li>
                            <li>Laborum, eius accusantium!</li>
                            <li>Excepturi, neque accusantium.</li>
                            <li>Minus, voluptates deleniti.</li>
                            <li>Pariatur, alias accusantium.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
