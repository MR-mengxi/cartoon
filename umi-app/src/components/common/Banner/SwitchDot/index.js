import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'

export default class SwitchDot extends Component {
    static propTypes = {
        total: PropTypes.number.isRequired,
        curIndex: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }
    render() {
        const spans = [];
        for (let i = 0; i < this.props.total; i++) {
            spans.push(<span
                className={i === this.props.curIndex ? "active" : ""}
                onClick={() => {
                    this.props.onChange && this.props.onChange(i)
                }}
                key={i}
            ></span>)
        }

        return (
            <div className="dots">
                {spans}
            </div>
        )
    }
}
