import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Layout extends Component {
    static defaultProps = {
        showContainer: true
    }
    static propTypes = {
        // minWidth: PropTypes.number.isRequired,
        // mainWidth: PropTypes.number.isRequired,
        // rightWidth: PropTypes.number.isRequired,
        // main: PropTypes.element.isRequired,
        // right: PropTypes.element.isRequired
    }
    render() {
        if (this.props.showContainer) {
            return (
                <div className='layout' style={{
                    width: this.props.minWidth,
                    margin: "0 auto 40px"
                }}>
                    <div className="main" style={{
                        width: this.props.mainWidth,
                    }}>
                        {this.props.main}
                    </div>
                    <div className="right" style={{
                        width: this.props.rightWidth
                    }}>
                        {this.props.right}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className='layout' style={{
                    width: this.props.minWidth
                }}>
                    <div className="main" style={{
                        width: this.props.mainWidth,
                    }}>
                        {this.props.main}
                    </div>
                    <div className="right" style={{
                        width: this.props.rightWidth
                    }}>
                        {this.props.right}
                    </div>
                </div>
            )
        }
    }
}
