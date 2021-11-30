import React, { Component } from 'react'
import "./index.css"
import PropTypes from 'prop-types'
import ImgContainer from './ImgContainer'
import SwitchArrow from './SwitchArrow'
import SwitchDot from './SwitchDot'

export default class Banner extends Component {
    static defaultProps = {
        width: 520,
        height: 280,
        imgSrcs: [],
        autoDuration: 5000,
        duration: 500,
        style: {}
    }

    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        imgSrcs: PropTypes.arrayOf(PropTypes.object).isRequired,
        autoDuration: PropTypes.number.isRequired,
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
        if (type === "left") {
            cur--;
            if (cur < 0) {
                cur = this.props.imgSrcs.length - 1;
            }
        }
        else {
            cur++;
            if (cur > this.props.imgSrcs.length - 1) {
                cur = 0;
            }
        }
        this.handleSwitch(cur);
    }

    render() {
        return (
            <div className="banner-container" style={{
                width: this.props.width,
                height: this.props.height,
                ...this.props.style
            }}
                onMouseEnter={() => {
                    clearInterval(this.timer);
                }}
                onMouseLeave={() => {
                    this.autoSwitch();
                }}
            >
                <ImgContainer
                    ref={this.imgContainerRef}
                    imgWidth={this.props.width}
                    imgHeight={this.props.height}
                    imgSrcs={this.props.imgSrcs}
                    duration={this.props.duration}
                />
                <SwitchArrow onChange={this.handleArrowChange} />
                <SwitchDot
                    total={this.props.imgSrcs.length}
                    curIndex={this.state.curIndex}
                    onChange={this.handleSwitch} />
            </div>
        )
    }
}
