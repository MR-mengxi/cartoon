import React, { Component } from 'react'
import ImgContainer from './ImgContainer'
import SwitchArrow from './SwitchArrow'
import SwitchDot from './SwitchDot'
import PropTypes from 'prop-types'
import './index.css'

export default class Banner extends Component {
    static defaultProps = {
        width: 520, // 图片的宽度
        height: 280, // 图片的高度
        imgSrcs: [], // 需要轮播的图片数组
        autoDuration: 5000, // 自动轮播的时间
        duration: 500, // 多长时间轮播一次
        isShow:false // 轮播图箭头是否显示
    }

    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        imgSrcs: PropTypes.array.isRequired,
        duration: PropTypes.number.isRequired
    }

    imgContainerRef = el => {
        this.imgContainer = el;
    }

    state = {
        curIndex: 0 // 当前显示的第几张图片
    }

    timer = null;

    handleSwitch = index => {
        this.setState({
            curIndex: index
        })
        this.imgContainer.switchTo(index);
    }

    autoSwitch() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            let cur = this.state.curIndex;
            cur = (cur + 1) % this.props.imgSrcs.length;
            this.handleSwitch(cur);
        }, this.props.autoDuration);
    }

    componentDidMount() {
        this.autoSwitch();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleArrowChange = type => {
        let cur = this.state.curIndex;
        if (cur === "left") {
            cur--;
            if (cur < 0) {
                cur = this.props.imgSrcs.length - 1;
            }
        } else {
            cur++;
            if (cur > this.props.imgSrcs.length - 1) {
                cur = 0;
            }
        }
        this.handleSwitch(cur);
    }

    render() {
        return (
            <div className='banner-container' style={{
                width: this.props.width,
                height: this.props.height
            }} onMouseEnter={() => {
                clearInterval(this.timer);
            }} onMouseLeave={() => {
                this.autoSwitch()
            }}>
                <ImgContainer
                    ref={this.imgContainerRef}
                    imgWidth={this.props.width}
                    imgHeight={this.props.height}
                    imgSrcs={this.props.imgSrcs}
                    duration={this.props.duration}
                />
                <SwitchArrow onChange={this.handleArrowChange} isShow={this.props.isShow} />
                <SwitchDot
                    total={this.props.imgSrcs.length}
                    curIndex={this.state.curIndex}
                    onChange={this.handleSwitch} />
            </div>
        )
    }
}
