import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'

export default class SwitchArrow extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        isShow: PropTypes.bool
    }
    render() {
        return (
            <div className={this.props.isShow ? "arrow" : "hidden"}>
                <span className="left" onClick={() => {
                    this.props.onChange && this.props.onChange("left")
                }}>
                    &lt;
                </span>
                <span className="right" onClick={() => {
                    this.props.onChange && this.props.onChange("right")
                }}>
                    &gt;
                </span>
            </div>
        )
    }
}
