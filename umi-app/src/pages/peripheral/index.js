import React, { Component } from 'react'
import ShopList from '@/components/containers/ShopList'
import ShopPager from '@/components/containers/ShopPager'
import './index.css'
export default class Peripheral extends Component {
    render() {
        return (
            <div className="peripheral">
                <ShopList />
                <div className="pager">
                <ShopPager />
                </div>
            </div>
        )
    }
}
