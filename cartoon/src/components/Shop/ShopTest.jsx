import React, { Component } from 'react'
import Shop from '.'
import src1 from '@/assets/shop/1.png'
import src2 from '@/assets/shop/2.png'
import src3 from '@/assets/shop/3.png'
import src4 from '@/assets/shop/4.png'

export default class ShopTest extends Component {
    state = {
        shopList: [
            { id: 1, src: src1, desc: "小书包", val: "59" },
            { id: 2, src: src2, desc: "小书包", val: "59" },
            { id: 3, src: src3, desc: "小书包", val: "59" },
            { id: 4, src: src4, desc: "小书包", val: "59" },
        ]
    }
    render() {
        return (
            <>
                <Shop shopList={this.state.shopList} />
            </>
        )
    }
}
