import React, { Component } from 'react'
import BannerContainer from '@/components/containers/BannerContainer'
import './index.css'
import Slider from '../components/Slider'
import CardContainer from '@/components/containers/CardContainer'
import IndexModContainer from '../components/containers/IndexModContainer'

export default class index extends Component {
    state = {
        slider: [
            { id: 1, sliderList: "最近收藏" },
            { id: 2, sliderList: "成为小叮当" },
            { id: 3, sliderList: "叮当币" },
        ],
    }
    render() {
        return (
            <div className="main-container">
                <div className="banner">
                    <Slider slider={this.state.slider} />
                    <BannerContainer />
                </div>
                <div className="card">
                    <CardContainer />
                </div>
                <div className="mod">
                    <IndexModContainer />
                </div>
            </div>
        )
    }
}
