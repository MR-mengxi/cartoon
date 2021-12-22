import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'

export default class Production extends Component {
    static defaultProps = {
        width: 72,
        height: 72,
        marginRight: 88,
        marginBottom: 34,
        data: [],
    }

    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        marginRight: PropTypes.number.isRequired,
        marginBottom: PropTypes.number.isRequired,
        data: PropTypes.array.isRequired
    }

    render() {
        const lis = this.props.data.map((pro, i) => (
            <li className={styles['pro-item']} key={i} style={{
                marginRight: this.props.marginRight,
                marginBottom: this.props.marginBottom
            }}>
                <a href="">
                    <img src={pro.thumb} alt="" style={{
                        width: this.props.width,
                        height: this.props.height
                    }} />
                </a>
                <div className={styles['pro-info']}>
                    <p className={styles['pro-title']}>{pro.title}</p>
                    <p className={styles['pro-time']}>{pro.time}</p>
                </div>
            </li>
        ))
        return (
            <ul className={styles['pro-container']}>
                {lis}
            </ul>
        )
    }
}
