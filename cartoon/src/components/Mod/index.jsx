import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'

export default class Mod extends Component {
    static defaultProps = {
        width: 72,
        height: 72,
        marginRight: 82,
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
        const mods = this.props.data.map((mod, i) => (
            <li className={styles['mod-item']} key={i} style={{
                marginRight: this.props.marginRight,
                marginBottom: this.props.marginBottom
            }}>
                <a href="">
                    <img src={mod.thumb} alt="" style={{
                        width: this.props.width,
                        height: this.props.height
                    }} />
                </a>
                <div className={styles['mod-info']}>
                    <p className={styles['mod-title']}>{mod.title}</p>
                    <p className={styles['mod-time']}>{mod.time}</p>
                </div>
            </li>
        ))
        return (
            <ul className={styles['mod-container']}>
                {mods}
            </ul>
        )
    }
}
