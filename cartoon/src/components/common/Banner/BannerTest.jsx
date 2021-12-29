import React, { Component } from 'react'
import Banner from '.'
import src1 from '@/assets/img/banner/1.jpg'
import src2 from '@/assets/img/banner/2.jpg'
import src3 from '@/assets/img/banner/3.jpg'
import src4 from '@/assets/img/banner/4.jpg'
import src5 from '@/assets/img/banner/5.jpg'

export default class BannerTest extends Component {
    bannerWidthRef = el => {
        this.bannerWidth = el;
    }
    state = {
        bannerWidth: 0
    }
    componentDidMount() {
        const bannerWidth = window.getComputedStyle(this.bannerWidth).width;
        this.setState({
            bannerWidth:parseFloat(bannerWidth)
        })
    }

    render() {
        return (
            <div ref={this.bannerWidthRef}>
                <Banner width={this.state.bannerWidth} height={280} imgSrcs={[src1, src2, src3, src4, src5]} />
            </div>
        )
    }
}
