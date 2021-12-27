import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'


export default class Shop extends Component {

    static defaultProps = {
        imgWidth: 272,
        imgHeight: 272,
        shopList: [],
    }

    static propTypes = {
        imgWidth: PropTypes.number.isRequired,
        imgHeight: PropTypes.number.isRequired,
        shopList: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        const shops = this.props.shopList.map(shop => (
            <div className="shop-card" key={shop.id}>
                <div className="shop-card-img">
                    <img src={shop.src} alt="" style={{
                        width: this.props.imgWidth,
                        height: this.props.imgHeight
                    }} />
                </div>
                <div className="shop-card-desc">
                    {shop.desc}
                </div>
                <div className="shop-card-price">
                    <div className="shop-card-price-unit">
                        ￥
                    </div>
                    <div className="shop-card-price-val">
                        {shop.val}
                    </div>
                </div>
            </div>
        ))
        return (
            <div className="shop-list">
                {shops}
            </div>
        )
    }
}
