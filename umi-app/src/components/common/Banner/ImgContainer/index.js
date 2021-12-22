import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImgContainer extends Component {

    static propTypes = {
        imgWidth: PropTypes.number.isRequired,
        imgHeight: PropTypes.number.isRequired,
        imgSrcs: PropTypes.array.isRequired,
        duration: PropTypes.number.isRequired
    }

    containerRef = el => {
        this.div = el;
    }

    tick = 16; // 计时器的间隔时间

    timer = null;

    /**
     * 切换到第几张图片
     * @param {*} index 
     */
    switchTo(index) {
        if (index < 0) {
            index = 0;
        }
        else if (index > this.props.imgSrcs.length - 1) {
            index = this.props.imgSrcs.length - 1;
        }
        const targetLeft = -index * this.props.imgWidth;
        let curLeft = parseFloat(window.getComputedStyle(this.div).marginLeft);
        const times = Math.ceil(this.props.duration / this.tick);
        let curTimes = 0;
        const totalDis = targetLeft - curLeft;
        const dis = totalDis / times;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            curTimes++;
            curLeft += dis;
            this.div.style.marginLeft = curLeft + "px";
            if (curTimes === times) {
                this.div.style.marginLeft = targetLeft + "px";
                clearInterval(this.timer);
            }
        }, this.tick);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const imgs = this.props.imgSrcs.map((src, i) => <img src={src} key={i} alt="" style={{
            width: this.props.imgWidth,
            height: this.props.imgHeight,
            float: "left"
        }} />)
        return (
            <div
                ref={this.containerRef}
                style={{
                    width: this.props.imgSrcs.length * this.props.imgWidth,
                    height: this.props.imgHeight
                }}>
                {imgs}
            </div>
        )
    }
}
